import { StyleSheet, View } from "react-native"

export interface ITelaProps {
    children: React.ReactNode;
    centralizar?: boolean;
}

export const Tela = ({ children, centralizar }: ITelaProps) => {
    return (
        <View 
            style={[
                styles.tela,
                { justifyContent: centralizar ? 'space-evenly' : 'flex-start'}
            ]}
        >
            {children}
        </View>
    )
}

export const TelaContainer = ({ children }: ITelaProps) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    container: {
        // width: 'auto',
        minWidth: '100%',
        minHeight: 200,
        height: 'auto',
        paddingVertical: 16,
        paddingHorizontal: 8,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})