import { View } from "react-native"
import { ContainerScrollView, Containerwhite } from "../../components/Container/Style"
import { ImagemPerfil } from "../../components/ImagemPerfil/Style"
import { InfoPerfil } from "../../components/InfoPerfil/Style"
import { EmailPerfil, NamePerfil } from "../../components/Title/Style"
import { Box } from "../../components/BoxCadastrar/Style"
import { BoxInputPreenchido } from "../../components/InputAndLabel/Index"


export const Prontuario = () => {
    return (
        <ContainerScrollView>
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
                    <BoxInputPreenchido
                        textLabel='Descricao da consulta:'
                        editable={true}
                        placeholder='Descrição'
                        placeholderTextColor='#34898F'
                        

                    />
                </Box>



            </Containerwhite>
        </ContainerScrollView>
    )
}