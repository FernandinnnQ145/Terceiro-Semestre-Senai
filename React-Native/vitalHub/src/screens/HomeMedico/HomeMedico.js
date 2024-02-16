import { ContainerScrollView, Containerwhite } from "../../components/Container/Style"
import { HeaderHome } from "../../components/HeaderHome/Style"
import { Ionicons } from '@expo/vector-icons';
import { ImagemPerfilHome } from "../../components/ImagemPerfil/Style";
import { Box, BoxMensagemHome, BoxRow, BoxTitleAndImage } from "../../components/BoxCadastrar/Style";
import { TextSubCriar, Title } from "../../components/Title/Style";
import { CalendarHome } from "../../components/CalendarHome/CalendarHome";
import { Button, ButtonHomeMarcado } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";

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

                <CalendarHome />

                <ButtonHomeMarcado>
                    <ButtonTitle>Agendadas</ButtonTitle>
                </ButtonHomeMarcado>
                <Button>
                    <ButtonTitle>Realizadas</ButtonTitle>
                </Button>
                <Button>
                    <ButtonTitle>Canceladas</ButtonTitle>
                </Button>


            </Containerwhite>
        </ContainerScrollView>
    )
}