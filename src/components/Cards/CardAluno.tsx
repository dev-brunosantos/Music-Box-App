import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { BtnIcon } from "../Buttons/BtnIcon"

export interface CardAlunosProps {
    nome: string;
    funcaoEditar: () => void;
    funcaoApagar: () => void;
}

export const CardAlunos = ({ nome, funcaoEditar, funcaoApagar }: CardAlunosProps) => {

    const abrirModal = () => {
        return Alert.alert("Modal será aberto")
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.containerBtnAluno}>
                    <TouchableOpacity style={styles.btnAluno} onPress={abrirModal}>
                        <Text style={styles.txtAluno}>{nome}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerBtn}>
                <BtnIcon onPress={funcaoEditar}>
                    <Entypo name="pencil" size={35} />
                </BtnIcon>

                <BtnIcon onPress={funcaoApagar}>
                    <Entypo name="trash" size={35} />
                </BtnIcon>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 74,
        marginVertical: 8,
        //paddingLeft: 4,
        paddingRight: 8,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    containerBtnAluno: {
        padding: 8,
        //borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnAluno: {
        width: '100%', 
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtAluno: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    containerBtn: {
        width: 100,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})