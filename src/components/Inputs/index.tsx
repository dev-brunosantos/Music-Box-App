import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native"
import { Entypo } from "@expo/vector-icons";
import { BtnIcon } from "../Buttons/BtnIcon";
import { useState } from "react";
import { IInputComponentProps } from "@/src/interfaces/input.interface";

// export interface IInputComponentProps extends TextInputProps {
//     isPassword: boolean;
//     labelTxt: string;
//     borda?: boolean;
//     corBorda?: string;
//     backgroud?: string;
// }

export const InputComponent = ({ isPassword, labelTxt, borda = true, corBorda, backgroud, ...rest }: IInputComponentProps) => {

    // Importando os estilos
    const { container, label, input } = styles;

    const [seguranca, setSeguranca] = useState(true)
    const [icone, setIcone] = useState('eye-with-line')

    const verificarSenha = () => {
        if (seguranca) {
            setSeguranca(false)
            setIcone('eye')
        }
        else {
            setSeguranca(true)
            setIcone('eye-with-line')
        }
    }

    if (isPassword) {
        return (
            <View>
                <View style={{ height: 'auto', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text style={label}>{labelTxt}</Text>
                </View>

                <View style={container}>

                    <TextInput
                        style={input}
                        {...rest}
                        secureTextEntry={seguranca}
                    />

                    <BtnIcon style={styles.btnIcone} onPress={verificarSenha}>
                        <Entypo name={icone} size={35} />
                    </BtnIcon>
                </View>
            </View>
        )
    }

    return (
        <View>
            <View style={{ height: 'auto', alignItems: 'flex-start', justifyContent: 'center' }}>
                <Text style={label}>{labelTxt}</Text>
            </View>

            <View style={container}>
                <TextInput
                    style={input}
                    {...rest}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: "100%",
        height: 54,
        marginTop: 8,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        position: 'relative'
    },
    label: {
        // maxWidth: 75,
        maxWidth: 'auto',
        // borderWidth: 1,
        // textAlign: 'center',
        marginLeft: 8,
        marginTop: 16,
        marginBottom: -20,
        zIndex: 999,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#efefef'
    },
    input: {
        width: "100%",
        height: "100%",
        outline: 'none',
        paddingHorizontal: 12,
        fontSize: 14
    },
    btnIcone: {
        height: '100%',
        padding: 8,
        position: 'absolute',
        right: 16
    }
})

