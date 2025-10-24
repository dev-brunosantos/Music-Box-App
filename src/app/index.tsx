import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Tela, TelaContainer } from "../components/Tela";
import { useRouter } from "expo-router";
import { BtnComponent } from "../components/Buttons";

export default function App() {

    const route = useRouter();

    return (
        <Tela>
            <View style={{ marginTop: 150 }}>
                <TelaContainer>
                    <Text style={{ fontSize: 65, fontWeight: 'bold' }}>Music Box</Text>
                </TelaContainer>
            </View>

            <View style={styles.containerBtn}>
                <View style={{ width: '90%' }}>
                    <BtnComponent onPress={() => route.push('/Login')} titulo="Fazer login" />
                    <BtnComponent onPress={() => route.push('/CriarConta')} titulo="Criar conta" />
                </View>
            </View>
        </Tela>
    )
}

const styles = StyleSheet.create({
    containerBtn: {
        width: '100%',
        height: 250,
        borderWidth: 1,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 0
    }
})