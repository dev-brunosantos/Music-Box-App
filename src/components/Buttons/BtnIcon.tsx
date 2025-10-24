import { IBtnIconProps } from "@/src/interfaces/button.interface"
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native"

// export interface BtnIconProps extends TouchableOpacityProps {
//     children: React.ReactNode;
// }

export const BtnIcon = ({ children, ...rest }: IBtnIconProps) => {
    return (
        <TouchableOpacity style={styles.btn} {...rest}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        height: '100%',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    }
})