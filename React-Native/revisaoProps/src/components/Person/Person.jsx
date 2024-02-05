import { StyleSheet, Text, View } from "react-native";

const Person = ({ name, age }) => {
  return (
    <View style={styles.personContainer}>
      <Text style={styles.personText}>Nome: {name}</Text>
      <Text style={styles.personText}>Idade: {age}</Text>
    </View>
  );
};

export default Person;

const styles = StyleSheet.create({
  personText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: 'SingleDay_400Regular'
  },
  personContainer: {
    backgroundColor: "red",
    padding: 15,
    margin: 15,
    width: '100%',
    borderRadius: 10,
    display: 'flex'
  },
});