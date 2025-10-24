import { useContext } from "react"
import { LoginContext } from "../contexts/LoginContext"

export const useLogin = () => {
    const contexto = useContext(LoginContext)
    if (!contexto) { throw new Error("Não existe nenhum contexto de LOGIN cadastrado no sistema.") }
    return contexto
}