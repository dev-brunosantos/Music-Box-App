import { LoginContextProvider } from "./LoginContext"

export const AppContext = ({ chhildren }: { chhildren: React.ReactNode }) => {
    return (
        <LoginContextProvider>
            {chhildren}
        </LoginContextProvider>
    )
}