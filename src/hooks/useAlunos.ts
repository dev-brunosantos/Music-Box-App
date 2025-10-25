import { useContext } from "react"
import { AlunosContext } from "../contexts/AlunosContexts"

export const useAlunos = () => {
    const contexto = useContext(AlunosContext)
    if(!contexto) { throw new Error("Não existe nenhum contexto de ALUNO cadastrado.")}
    return contexto
}