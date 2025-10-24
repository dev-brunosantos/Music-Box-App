import { LoginContextProvider } from "./LoginContext"

export const AppContext = ({ children }: { children: React.ReactNode }) => {
    return (
        <LoginContextProvider>
            {children}
        </LoginContextProvider>
    )
}