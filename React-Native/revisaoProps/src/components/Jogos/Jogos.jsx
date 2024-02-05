import { StyleSheet, Text, View } from "react-native";


const Jogos = ({ id, nome, dataLancamento, genero }) => {
    return (
        <View style={styles.bloco}>
            <Text style={styles.text}>Nome: {nome}</Text>
            <Text style={styles.text}>Data de lancamento: {dataLancamento}</Text>
            <Text style={styles.text}>genero: {genero}</Text>
        </View>
    );
};

export default Jogos

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: "#fff",
        fontFamily: 'SingleDay_400Regular'
    },
    bloco: {
        backgroundColor: "green",
        padding: 15,
        margin: 20,
        borderRadius: 10,

    },
});