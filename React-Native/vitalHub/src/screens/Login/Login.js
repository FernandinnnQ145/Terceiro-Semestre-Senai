import { Text } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Input, InputSenha } from "../../components/Input/Style"
import { Box } from "../../components/BoxCadastrar/Style"
import { LinkMedium } from "../../components/LinkMedium/Style"
import { Button, ButtonGoogle } from "../../components/Button/Style"
import { ButtonTitle, TitleGoogle } from "../../components/ButtonTitle/Style"
import { ContentAcount, ContentDuvida, ContentLink } from "../../components/ContentAcount/Style"
import { AntDesign } from '@expo/vector-icons';


export const Login = () => {
    return (
        <Container>
            <Logo
                source={require('../../assets/image/VitalHub_Logo_branco.png')}
            />
            <Title>Entrar ou criar conta</Title>

            <Box>
                <Input
                    placeholder='Usuario ou E-mail'
                    placeholderTextColor='#FFF'
                />
                <InputSenha
                    placeholder='Senha'
                    placeholderTextColor='#FFF'
                    valueColor='#FFFFF'
                />
                <LinkMedium>Esqueceu sua senha</LinkMedium>
                <Button>
                    <ButtonTitle>Entrar</ButtonTitle>
                </Button>
                <ButtonGoogle>
                    
                    
                    <AntDesign name="google" size={14} color="#496BBA" />
                    
                    <TitleGoogle>Entrar com google</TitleGoogle>
                </ButtonGoogle>


                <ContentAcount>
                    <ContentDuvida>Nao tem conta? </ContentDuvida>
                    <ContentLink>Crie uma agora</ContentLink>
                </ContentAcount>
            </Box>

        </Container>

    )
}