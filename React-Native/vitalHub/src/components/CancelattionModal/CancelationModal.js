import { Modal } from "react-native"
import { ButtonModal, ButtonSecundario } from "../Button/Style"
import { ModalContent, ModalText, PatientModal } from "./Style"
import { Title, TitleGray } from "../Title/Style"
import { ButtonSecundarioTitleBlue, ButtonTitle } from "../ButtonTitle/Style"

export const CancelattionModal = ({
    visible,
    setShowModalCancel,
    ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <TitleGray>Cancelar consulta</TitleGray>
                    <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

                    <ButtonModal>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>

                    <ButtonSecundario onPress={() => setShowModalCancel(false)}>
                        <ButtonSecundarioTitleBlue>Cancelar</ButtonSecundarioTitleBlue>
                    </ButtonSecundario>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}