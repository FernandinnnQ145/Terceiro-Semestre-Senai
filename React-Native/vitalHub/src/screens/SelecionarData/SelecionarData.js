
import { LabelModal } from "../../components/AgendarModal/Style"
import { Box } from "../../components/BoxCadastrar/Style"
import { Button, ButtonSecundarioPag } from "../../components/Button/Style"
import { ButtonSecundarioTitleBlue, ButtonTitle } from "../../components/ButtonTitle/Style"
import CalendarComponent from "../../components/CallendarList/CallendarList"
import { Containerwhite } from "../../components/Container/Style"
import { InputSelect, SelectDate } from "../../components/InputSelect/InputSelect"
import { TitleGrayMargin } from "../../components/Title/Style"

export const SelecionarData = () => {
    return (
        <Containerwhite>
            <TitleGrayMargin>Selecionar data</TitleGrayMargin>

            <CalendarComponent />

            <Box>
                <LabelModal>Selecione um horário disponível</LabelModal>
            </Box>

            <SelectDate/>

          <Box>
                <Button>
                    <ButtonTitle>Continuar</ButtonTitle>
                </Button>
            </Box>

            <ButtonSecundarioPag>
                <ButtonSecundarioTitleBlue>Cancelar</ButtonSecundarioTitleBlue>
            </ButtonSecundarioPag>
        </Containerwhite>
    )
}