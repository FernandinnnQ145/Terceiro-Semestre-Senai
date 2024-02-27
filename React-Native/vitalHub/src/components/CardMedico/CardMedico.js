import { NomeClinica } from "../CardClinicas/Style"
import { ImagePaciente } from "../ImagemPerfil/Style"
import { BoxCardMedico, BoxInfoMedico, InfoMedico } from "./Style"

export const CardMedico = () => {
    return (
        <BoxCardMedico>
            <ImagePaciente
                source={require('../../assets/image/Imagem_Escolha_Medico.png')} />


            <BoxInfoMedico>
                <NomeClinica>Dra Alessandra</NomeClinica>
                <InfoMedico>Demartologa, Esteticista</InfoMedico>
            </BoxInfoMedico>


        </BoxCardMedico>
    )
}