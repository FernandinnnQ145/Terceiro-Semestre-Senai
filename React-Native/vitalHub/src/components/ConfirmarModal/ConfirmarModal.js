import { Modal } from "react-native"
import { ModalContent, PatientModal } from "../CancelattionModal/Style"
import { TitleGray } from "../Title/Style"
import { BoxConfirmModal, QuestionModal, ResponseModal, SubTitleModal } from "./Style"
import { Button, ButtonModal, ButtonSecundario } from "../Button/Style"
import { ButtonSecundarioTitleBlue, ButtonTitle } from "../ButtonTitle/Style"

export const ConfirmarModal = ({
    visible,
    setModalConfirmar,
    ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <TitleGray>Agendar consulta</TitleGray>

                    <SubTitleModal>Consulte os dados selecionados para a sua consulta</SubTitleModal>

                    <BoxConfirmModal>
                        <QuestionModal>Data da consulta</QuestionModal>
                        <ResponseModal>1 de Novembro de 2023</ResponseModal>
                    </BoxConfirmModal>

                    <BoxConfirmModal>
                        <QuestionModal>Médico(a) da consulta</QuestionModal>
                        <ResponseModal>Dra Alessandra</ResponseModal>
                        <ResponseModal>Demartologa, Esteticista</ResponseModal>
                    </BoxConfirmModal>

                    <BoxConfirmModal>
                        <QuestionModal>Local da consulta</QuestionModal>
                        <ResponseModal>São Paulo, SP</ResponseModal>
                    </BoxConfirmModal>

                    <BoxConfirmModal>
                        <QuestionModal>Tipo da consulta</QuestionModal>
                        <ResponseModal>Rotina</ResponseModal>
                    </BoxConfirmModal>



                    <ButtonModal>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ButtonModal>

                    <ButtonSecundario onPress={() => setModalConfirmar(false)}>
                        <ButtonSecundarioTitleBlue>Cancelar</ButtonSecundarioTitleBlue>
                    </ButtonSecundario>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}