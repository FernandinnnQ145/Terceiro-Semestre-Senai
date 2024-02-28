import { useState } from "react"
import { Box } from "../../components/BoxCadastrar/Style"
import { Button, ButtonSecundarioPag } from "../../components/Button/Style"
import { ButtonSecundarioTitleBlue, ButtonTitle } from "../../components/ButtonTitle/Style"
import { CardMedico } from "../../components/CardMedico/CardMedico"
import { Containerwhite } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"
import { TitleGrayMargin } from "../../components/Title/Style"

export const SelecionarMedico = () => {

    const Medicos = [
        { id: 1, nome: "Fernando", },
        { id: 2, nome: "Fernando", },
        { id: 3, nome: "Fernando", },
    ]



    // crie uma funcao para verificar se o card esta selecionado
    const [medicoSelectId, setMedicoSelect] = useState(0)



    return (
        <Containerwhite>
            <TitleGrayMargin>Selecionar medico</TitleGrayMargin>


            <ListComponent
                data={Medicos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <CardMedico
                        medico={item}
                        onPress={() => setMedicoSelect(item.id)}
                        clickButton={item.id === medicoSelectId}
                    />}
                showsVerticalScrollIndicator={false}
            />


            <Box>
                <Button>
                    <ButtonTitle>Continuar</ButtonTitle>
                </Button>
            </Box>

            <ButtonSecundarioPag>
                <ButtonSecundarioTitleBlue>Cancelar</ButtonSecundarioTitleBlue>
            </ButtonSecundarioPag>
        </Containerwhite>
    )
}