import { IBtnProps } from "@/src/interfaces/button.interface";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

// export interface IBtnProps extends TouchableOpacityProps {
//     titulo: string;
//     borda?: boolean;
//     corBorda?: string;
//     corText?: string;
//     backgroud?: string;
// }

export const BtnComponent = ({ titulo, ...rest }: IBtnProps) => {
    return (
        <TouchableOpacity style={styles.btn} {...rest}>
            <Text style={styles.txt}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        minWidth: "100%",
        height: 54,
        marginVertical: 8,
        padding: 8,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})