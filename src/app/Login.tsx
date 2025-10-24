import { Text } from "react-native";
import { BtnComponent } from "../components/Buttons";
import { InputComponent } from "../components/Inputs";
import { Tela, TelaContainer } from "../components/Tela";

export default function Login() {
    return (
        <Tela centralizar>
            <TelaContainer>
                <Text style={{ fontSize: 65, fontWeight: 'bold' }}>Music Box</Text>
            </TelaContainer>
            
            <TelaContainer>
                <InputComponent
                    isPassword={false}
                    labelTxt="Usuário"
                    placeholder="Digite o seu e-mail"
                    corBorda="#000"
                />
                <InputComponent
                    isPassword={true}
                    labelTxt="Senha"
                    placeholder="Digite sua senha"
                />
            </TelaContainer>

            <TelaContainer>
                <BtnComponent titulo="Login" />
            </TelaContainer>
        </Tela>
    )
}