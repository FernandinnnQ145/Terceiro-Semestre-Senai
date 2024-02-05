import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
    colors: ['#52ACFF', '#FFE32C'],
    start: { x: 1.5, y: 0.2 },
    end: {  x: 1, y: 1 },
})`
flex: 1;
align-items: center;
justify-content: center;
`