import { useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, InputPequeno, ScrollForm } from "./style";
import axios from "axios";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { useEffect } from "react";

export function Home() {
    const [cep, setCep] = useState()
    const [endereco, setEndereco] = useState({})
    const [estado, setEstado] = useState()



    async function ChamarCep(cep) {
        try {
            if (cep != "" && cep.length >= 8) {

                const response = await (axios.get(`https://viacep.com.br/ws/${cep}/json/`))
                setEndereco(response.data)


                const estado = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${response.data.uf}`)
                setEstado(estado.data.nome);
            }


        }


        catch (error) {
            console.log(`Erro ao buscar o cep: ${error}`)
        }
    }


    function Limpar() {
        setEndereco({})
        setEstado()
    }



    return (
        <>
            <ScrollForm>
                <ContainerForm>
                    <BoxInput
                        textLabel='Informar CEP'
                        placeholder='CEP...'
                        editable={true}
                        fieldValue={cep}
                        onChangeText={tx => setCep(tx)}
                        keyType='numeric'
                        maxLength={9}
                        onBlur={cep ? ChamarCep(cep) : Limpar}

                    />

                    <BoxInput
                        textLabel='Logradouro'
                        placeholder='Logradouro...'
                        fieldValue={endereco.logradouro}
                    />
                    <BoxInput
                        textLabel='Bairro'
                        placeholder='Bairro...'
                        fieldValue={endereco.bairro}
                    />
                    <BoxInput
                        textLabel='Cidade'
                        placeholder='Cidade...'
                        fieldValue={endereco.localidade}
                    />
                    <InputPequeno>
                        <BoxInput
                            textLabel='Estado'
                            placeholder='Logradouro...'
                            fieldWidth={70}
                            fieldValue={estado}
                        />
                        <BoxInput
                            textLabel='UF'
                            placeholder='UF'
                            fieldWidth={24}
                            fieldValue={endereco.uf}
                        />
                    </InputPequeno>
                </ContainerForm>
            </ScrollForm>
        </>
    )
}