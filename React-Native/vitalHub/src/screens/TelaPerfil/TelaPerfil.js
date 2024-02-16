import { Box, BoxInputRow } from "../../components/BoxCadastrar/Style"
import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { ContainerScrollView, Containerwhite } from "../../components/Container/Style"
import { ImagemPerfil } from "../../components/ImagemPerfil/Style"
import { InfoPerfil } from "../../components/InfoPerfil/Style"

import { BoxInputPreenchido } from "../../components/InputAndLabel/Index"
import { EmailPerfil, NamePerfil } from "../../components/Title/Style"

export const TelaPerfil = () => {
    return (
        <ContainerScrollView>
            <Containerwhite>


                <ImagemPerfil
                    source={require('../../assets/image/Imagem_exemplo_perfil.png')}>
                    <InfoPerfil>
                        <NamePerfil>Richard Kosta</NamePerfil>
                        <EmailPerfil>richard.kosta@gmail.com</EmailPerfil>
                    </InfoPerfil>
                </ImagemPerfil>

                <Box>
                    <BoxInputPreenchido
                        textLabel='Data de nascimento:'
                        value='04/05/1999'
                    />
                    <BoxInputPreenchido
                        textLabel='CPF'
                        value='859********'
                    />
                    <BoxInputPreenchido
                        textLabel='Endereço'
                        value='Rua Vicenso Silva, 987'
                    />
                    <BoxInputRow>
                        <BoxInputPreenchido
                            textLabel='Cep'
                            value='06548-909'
                            fieldWidth={45}
                        />
                        <BoxInputPreenchido
                            textLabel='Cidade'
                            value='Moema-SP'
                        />
                    </BoxInputRow>

                    <Button>
                        <ButtonTitle>Salvar</ButtonTitle>
                    </Button>
                    <Button>
                        <ButtonTitle>Editar</ButtonTitle>
                    </Button>
                </Box>

            </Containerwhite>
        </ContainerScrollView>
    )
}