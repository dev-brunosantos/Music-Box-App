import { InputStyles } from "@/src/styles/input.styles"
import { StyleSheet, Text, View } from "react-native"

interface ILabelProps {
    labelTxt: string;
}

export const Label = ({ labelTxt }:ILabelProps) => {
    //Inportação de estilos
    const { label } = InputStyles;

    return (
        <View style={{ height: 'auto', alignItems: 'flex-start', justifyContent: 'center' }}>
            <Text style={label}>{labelTxt}</Text>
        </View>
    )
}