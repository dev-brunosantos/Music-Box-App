import { createContext, useState } from "react";
import { Alert } from "react-native";

export interface IAlunoContextProps {
    aluno: string;
    editar: (nome:string) => void;
    apagar: (nome:string) => void;
}

//const AlunosContext = createContext<IAlunoContextProps | undefined>({} as IAlunoContextProps);
const AlunosContext = createContext<IAlunoContextProps | undefined>(undefined);

const AlunosContextProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [aluno, setAluno] = useState('');

    const editar = (nome:string) => {
        setAluno(nome)
        Alert.alert(`Função para EDITAR os dados ${nome}`)
    }

    const apagar = (nome:string) => {
        setAluno(nome)
        Alert.alert(`Função para APAGAR os dados ${nome}`)
    }

    return (
        <AlunosContext.Provider value={{ aluno, editar, apagar }}>
            {children}
        </AlunosContext.Provider>
    )
};

export { AlunosContext, AlunosContextProvider }