import { createContext, useState } from "react";
import { ILoginProps, IUsuarioLoginProps } from "../interfaces/login/usuarioLogin.interface";
import { Alert } from "react-native";
import { useRouter } from "expo-router";

const LoginContext = createContext<ILoginProps | undefined>({} as ILoginProps);

const LoginContextProvider = ({ children }: { children: React.ReactNode }) => {

    const route = useRouter();
    const [usuario, setUsuario] = useState<IUsuarioLoginProps>({ email: "", senha: "" })

    const login = ({ email, senha }: IUsuarioLoginProps) => {
        if (email.trim() == "" || senha.trim() == "") {
            return Alert.alert("Todos os campos devem ser preenchidos!")
        }
        setUsuario({ email, senha })

        return route.push('/CriarConta')
    }

    const logout = () => {
        return Alert.alert("Sair")
    }

    return (
        <LoginContext.Provider value={{ usuario, login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginContextProvider }