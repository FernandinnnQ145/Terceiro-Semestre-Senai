import styled from "styled-components";
import { BoxCardClinicas } from "../CardClinicas/Style";

export const BoxCardMedico = styled(BoxCardClinicas)`
flex-direction: row;
gap: 10px;
padding: 9px 0px 9px 8px;
align-items: center;
`

export const BoxInfoMedico = styled.View`
gap: 10px;
`

export const InfoMedico = styled.Text`
font-family:  Quicksand_500Medium;
font-size: 14px;
color: #8C8A97;
`