import { ContainerScrollView, Containerwhite } from "../../components/Container/Style"
import { HeaderHome } from "../../components/HeaderHome/Style"
import { Ionicons } from '@expo/vector-icons';
import { ImagemPerfilHome } from "../../components/ImagemPerfil/Style";
import { Box, BoxMensagemHome, BoxRow, BoxTitleAndImage } from "../../components/BoxCadastrar/Style";
import { TextSubCriar, Title } from "../../components/Title/Style";

export const HomeMedico = () => {
    return (
        <ContainerScrollView>
            <Containerwhite>
                <HeaderHome>


                    <BoxTitleAndImage>

                        <ImagemPerfilHome
                            source={require('../../assets/image/Mask_group.png')}
                        />

                        <BoxMensagemHome>

                            <TextSubCriar>Bem vindo</TextSubCriar>
                            <Title>Dr. Claudio</Title>

                        </BoxMensagemHome>

                    </BoxTitleAndImage>
                    <Ionicons name="notifications" size={24} color="white" />

                </HeaderHome>

                
                
            </Containerwhite>
        </ContainerScrollView>
    )
}