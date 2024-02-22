import { View } from "react-native"
import { ContainerScrollView, Containerwhite } from "../../components/Container/Style"
import { ImagemPerfil } from "../../components/ImagemPerfil/Style"
import { InfoPerfil } from "../../components/InfoPerfil/Style"
import { EmailPerfil, NamePerfil } from "../../components/Title/Style"
import { Box } from "../../components/BoxCadastrar/Style"
import { BoxInput } from "../../components/InputAndLabel/Index"
import { Button, ButtonSecundario } from "../../components/Button/Style"
import { ButtonSecundarioTitleBlue, ButtonTitle } from "../../components/ButtonTitle/Style"


export const Prontuario = () => {
    return (
        <ContainerScrollView showsVerticalScrollIndicator={false}>
            <Containerwhite>
                <ImagemPerfil
                    source={require('../../assets/image/Imagem_exemplo_perfil.png')}>
                    <InfoPerfil>
                        <NamePerfil>Richard Kosta</NamePerfil>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <EmailPerfil>22 anos</EmailPerfil>
                            <EmailPerfil>richard.kosta@gmail.com</EmailPerfil>

                        </View>

                    </InfoPerfil>
                </ImagemPerfil>


                <Box>
                    <BoxInput
                        textLabel='Descricao da consulta:'
                        placeholder='Descrição'
                        height={120}
                        paddingBottom={60}
                        editable={true}
                    />
                    <BoxInput
                        textLabel='Descricao da consulta:'
                        placeholder='Descrição'
                        editable={true}

                    />
                    <BoxInput
                        textLabel='Descricao da consulta:'
                        placeholder='Descrição'
                        height={120}
                        paddingBottom={60}
                        editable={true}
                    />




                    <Button>
                        <ButtonTitle>Salvar</ButtonTitle>
                    </Button>
                </Box>
                <ButtonSecundario>
                    <ButtonSecundarioTitleBlue>Cancelar</ButtonSecundarioTitleBlue>
                </ButtonSecundario>





            </Containerwhite>
            
        </ContainerScrollView>


    )
}