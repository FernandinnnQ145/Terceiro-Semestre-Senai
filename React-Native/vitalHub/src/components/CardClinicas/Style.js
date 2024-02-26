import styled from "styled-components";

export const BoxCardClinicas = styled.TouchableHighlight`
width: 90%;
border-radius: 5px;
padding: 16px;
background-color: white;

`


export const BoxCardConteudo = styled.View`
width: 90%;
flex-direction: row;
justify-content: space-between;
`

export const NomeClinica = styled.Text`
font-family: MontserratAlternates_600SemiBold;
font-size: 16px;
color: #33303E;
`

export const BoxClassificacao = styled.View`
flex-direction: row;
gap: 3px;

`

export const Nota = styled.Text`
font-family: Quicksand_600SemiBold;
color: #F9A620;
font-size: 14px;
`

export const LocalClinica = styled(Nota)`
color: #4E4B59;
`

export const BoxDias = styled.View`
width: 100px;
border-radius: 5px;
height: 26px;
background-color: #49B3BA;
`