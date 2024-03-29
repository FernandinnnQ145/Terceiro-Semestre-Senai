import { useState } from "react"
import { Box } from "../../components/BoxCadastrar/Style"
import { Button, ButtonSecundario, ButtonSecundarioPag } from "../../components/Button/Style"
import { ButtonSecundarioTitleBlue, ButtonTitle, TitleGoogle } from "../../components/ButtonTitle/Style"
import { CardClinicas } from "../../components/CardClinicas/CardClinicas"
import { Containerwhite } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"
import { TitleGrayMargin } from "../../components/Title/Style"

export const SelecionarClinica = ({
    navigation,
    route
}) => {

    const { setShowModalAgendar } = route.params;

    async function Login(){
        navigation.navigate("Main")
        
        setShowModalAgendar(true)
    }
    const Clinicas = [
        { id: 1, nome: "Fernando", },
        { id: 2, nome: "Fernando",},
        { id: 3, nome: "Fernando", },
    ]

    
    const [selectClinicaId, setSelectClinicaId] = useState(0)


    

    return (
        <Containerwhite>
            <TitleGrayMargin>Selecionar clinica</TitleGrayMargin>


            {/* FlatList que sera feito mais tarde */}
            <ListComponent
                data={Clinicas}
                keyExtractor={(item) => item.id}
                renderItem={({item})=>
                    <CardClinicas
                    clinica={item}
                    onPress={() => setSelectClinicaId(item.id)}
                    clickButton={item.id == selectClinicaId}
                    />
            
            }
                showsVerticalScrollIndicator={false}
            />


            <Box>
                <Button onPress={() => navigation.replace("SelecionarMedico")}>
                    <ButtonTitle>Continuar</ButtonTitle>
                </Button>
            </Box>

            <ButtonSecundarioPag onPress={() => Login()}>
                <ButtonSecundarioTitleBlue>Cancelar</ButtonSecundarioTitleBlue>
            </ButtonSecundarioPag>

        </Containerwhite>
    )
}