import { StyleSheet } from "react-native";

export const InputStyles = StyleSheet.create({
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

