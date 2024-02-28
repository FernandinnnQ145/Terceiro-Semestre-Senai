import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BoxCardClinicas, BoxCardConteudo, BoxClassificacao, BoxDias, Dias, LocalClinica, NomeClinica, Nota } from './Style';

export const CardClinicas = ({
    onPress,
    clickButton
}) => {
    return (
        <BoxCardClinicas onPress={onPress} clickButton={clickButton}>
            <BoxCardConteudo>
                <NomeClinica>Clínica Natureh</NomeClinica>
                <BoxClassificacao>
                    <AntDesign name="star" size={20} color="#F9A620" />
                    <Nota>4,5</Nota>
                </BoxClassificacao>

            </BoxCardConteudo>

            <BoxCardConteudo>
                <LocalClinica>São Paulo, SP</LocalClinica>

                <BoxDias>
                    <MaterialCommunityIcons name="calendar" size={14} color="#49B3BA" />
                    <Dias>Seg-Sex</Dias>
                </BoxDias>

            </BoxCardConteudo>


        </BoxCardClinicas>
    )
}