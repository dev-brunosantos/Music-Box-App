import { Text } from "react-native";
import { BtnComponent } from "../components/Buttons";
import { InputComponent } from "../components/Inputs";
import { Tela, TelaContainer } from "../components/Tela";
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";

export default function Login() {

    const { login } = useLogin();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const realizarLogin = () => {
        login({ email, senha });
    }

    return (
        <Tela centralizar>
            <TelaContainer>
                <Text style={{ fontSize: 65, fontWeight: 'bold' }}>Music Box</Text>
            </TelaContainer>

            <TelaContainer>
                <InputComponent
                    isPassword={false}
                    labelTxt="Usuário"
                    onChangeText={setEmail}
                    placeholder="Digite o seu e-mail"
                    corBorda="#000"
                />
                <InputComponent
                    isPassword={true}
                    labelTxt="Senha"
                    onChangeText={setSenha}
                    placeholder="Digite sua senha"
                />
            </TelaContainer>

            <TelaContainer>
                <BtnComponent onPress={realizarLogin} titulo="Login" />
            </TelaContainer>
        </Tela>
    )
}