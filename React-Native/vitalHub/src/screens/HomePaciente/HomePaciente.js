import { useState } from 'react'
import { BoxMensagemHome, BoxTitleAndImage } from '../../components/BoxCadastrar/Style'
import CalendarHome from '../../components/CalendarHome/CalendarHome'
import { Containerwhite } from '../../components/Container/Style'
import { HeaderHome } from '../../components/HeaderHome/Style'
import { ImagemPerfilHome } from '../../components/ImagemPerfil/Style'
import { TextSubCriar, Title } from '../../components/Title/Style'
import { Ionicons } from '@expo/vector-icons';
import { ButtonAgendar, ButtonsHome } from '../../components/Button/Style'
import { BtnListAppointment } from '../../components/BtnListAppointment/BtnListAppointment'
import { CancelattionModal } from '../../components/CancelattionModal/CancelationModal'
import { AppointmentModal } from '../../components/AppointmentModal/AppointmentModal'
import { Card } from '../../components/Card/Card'
import { ListComponent } from '../../components/List/List'
import { AgendarModal } from '../../components/AgendarModal/AgendarModal'
import { FontAwesome6 } from '@expo/vector-icons';



export const HomePaciente = () => {
    //state para o estado da lista(cards)
    const [statusLista, setStatusLista] = useState("pendente")


    const Consultas = [
        { id: 1, nome: "Fernando", situacao: "pendente" },
        { id: 2, nome: "Fernando", situacao: "cancelado" },
        { id: 3, nome: "Fernando", situacao: "realizado" },
        { id: 4, nome: "Fernando", situacao: "pendente" },
        { id: 5, nome: "Fernando", situacao: "cancelado" },
    ]



    //state para exibicao dos modals
    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)
    const [showModalAgendar, setShowModalAgendar] = useState(false)
    return (
        <Containerwhite >
            <HeaderHome>


                <BoxTitleAndImage>

                    <ImagemPerfilHome
                        source={require('../../assets/image/Outra_Img_Medico.png')}
                    />

                    <BoxMensagemHome>

                        <TextSubCriar>Bem vindo</TextSubCriar>
                        <Title>Richard Kosta</Title>

                    </BoxMensagemHome>

                </BoxTitleAndImage>
                <Ionicons name="notifications" size={24} color="white" />

            </HeaderHome>

            <CalendarHome />

            <ButtonsHome>
                <BtnListAppointment
                    textButton='Agendaddas'
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />
                <BtnListAppointment
                    textButton='Realizadas'
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}
                />
                <BtnListAppointment
                    textButton='Canceladas'
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />
            </ButtonsHome>



            {/* Secao Card */}
            {/* Lista */}
            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    statusLista == item.situacao && (

                        <Card
                            situacao={item.situacao}
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressAppointment={() => setShowModalAppointment(true)}
                        />
                    )
                }
                showsVerticalScrollIndicator={false}/>



            

            <ButtonAgendar onPress={() =>setShowModalAgendar(true)}>
                <FontAwesome6 name="stethoscope" size={26} color="white" />
            </ButtonAgendar>

            {/* modal cancelar */}
            <CancelattionModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />



            {/* modal ver prontuario */}

            <AppointmentModal
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />

            <AgendarModal
            visible={showModalAgendar}
            setShowModalAgendar={setShowModalAgendar}
            />



        </Containerwhite >
    )
}