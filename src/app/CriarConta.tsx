import { Text, View } from "react-native";
import { BtnComponent } from "../components/Buttons";
import { InputComponent } from "../components/Inputs";
import { Tela, TelaContainer } from "../components/Tela";

export default function CriarConta() {
    return (
        <Tela centralizar>
            <TelaContainer>
                <Text style={{ fontSize: 65, fontWeight: 'bold' }}>Music Box</Text>
            </TelaContainer>

            <View style={{ position: 'relative', bottom: 50}}>
                <TelaContainer>
                    <InputComponent
                        isPassword={false}
                        labelTxt="Nome"
                        placeholder="Digite o seu nome"
                        corBorda="#000"
                    />
                    <InputComponent
                        isPassword={false}
                        labelTxt="E-mail"
                        placeholder="Digite o seu e-mail"
                        corBorda="#000"
                    />
                    <InputComponent
                        isPassword={true}
                        labelTxt="Senha"
                        placeholder="Digite sua senha"
                    />
                </TelaContainer>
            </View>

            <BtnComponent titulo="Criar" />
        </Tela>
    )
}