import { AlunosContextProvider } from "./AlunosContexts"
import { LoginContextProvider } from "./LoginContext"

export const AppContext = ({ children }: { children: React.ReactNode }) => {
    return (
        <LoginContextProvider>
            <AlunosContextProvider>
                {children}
            </AlunosContextProvider>
        </LoginContextProvider>
    )
}