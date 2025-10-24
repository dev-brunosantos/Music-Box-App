import { Stack } from "expo-router";
import { AppContext } from "../contexts/AppContexts";

export default function AppLayout() {
    return (
        <AppContext>
            <Stack>
                <Stack.Screen name="index" />
                <Stack.Screen name="Login" />
                <Stack.Screen name="CriarConta" options={{ headerTitle: 'Criar Conta' }} />
            </Stack>
        </AppContext>
    )
}