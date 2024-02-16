import styled from "styled-components";

export const Button = styled.TouchableOpacity`
margin-top: 25px;
width: 100%;
height: 44px;
padding: 12px 8px 12px 8px;
align-items: center;
justify-content: center;
background-color: #496BBA;
border-radius: 5px;
border: 1px solid #496BBA;
`

export const ButtonGoogle = styled(Button)`
background-color: #FFFFFF;
margin-bottom: 40px;
flex-direction: row;
justify-content: center;
gap: 10px;
border: 1px solid white;
`