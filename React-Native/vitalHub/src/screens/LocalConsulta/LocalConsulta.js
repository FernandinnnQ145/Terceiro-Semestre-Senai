import { Box, BoxInputRow } from "../../components/BoxCadastrar/Style"
import { Containerwhite } from "../../components/Container/Style"
import { ImagemLocalConsulta } from "../../components/ImagemPerfil/Style"
import { BoxInputPreenchido } from "../../components/InputAndLabel/Index"
import { TitleGray } from "../../components/Title/Style"
import { SubTitleLocal } from "./Style"
import { ButtonSecundarioPag } from "../../components/Button/Style"
import { ButtonSecundarioTitleBlue } from "../../components/ButtonTitle/Style"
import Map from "../../components/Map/Map"

export const LocalConsulta = ({
    navigation
}) => {
    return (
        <Containerwhite>
            
                <Map/>
           


            <TitleGray>Clínica Naturebah</TitleGray>
            <SubTitleLocal>São Paulo, SP</SubTitleLocal>


            <Box>


                <BoxInputPreenchido
                    value='Rua Vicenso Silva, 987'
                    textLabel='Endereço'
                />
                <BoxInputRow>
                    <BoxInputPreenchido
                        value='578'
                        textLabel='Número'
                        fieldWidth={45}
                    />
                    <BoxInputPreenchido
                        value='Moema-SP'
                        textLabel='Bairro'
                        fieldWidth={45}
                    />
                </BoxInputRow>
            </Box>

            <ButtonSecundarioPag onPress={() => navigation.replace("Main")}>
                <ButtonSecundarioTitleBlue>Cancelar</ButtonSecundarioTitleBlue>
            </ButtonSecundarioPag>
        </Containerwhite>
    )
}