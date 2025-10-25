import { Text, TextInput, View } from "react-native"
import { Entypo } from "@expo/vector-icons";
import { BtnIcon } from "../Buttons/BtnIcon";
import { useState } from "react";
import { IInputComponentProps } from "@/src/interfaces/input.interface";
import { InputStyles } from "@/src/styles/input.styles";
import { Label } from "./Label";


export const InputComponent = ({ isPassword, labelTxt, borda = true, corBorda, backgroud, ...rest }: IInputComponentProps) => {

    // Importando os estilos
    const { container, label, input, btnIcone } = InputStyles;

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
                <Label labelTxt={labelTxt} />

                <View style={container}>

                    <TextInput
                        style={input}
                        {...rest}
                        secureTextEntry={seguranca}
                    />

                    <BtnIcon style={btnIcone} onPress={verificarSenha}>
                        <Entypo name={icone} size={35} />
                    </BtnIcon>
                </View>
            </View>
        )
    }

    return (
        <View>
            <Label labelTxt={labelTxt} />

            <View style={container}>
                <TextInput
                    style={input}
                    {...rest}
                />
            </View>
        </View>
    )
}

