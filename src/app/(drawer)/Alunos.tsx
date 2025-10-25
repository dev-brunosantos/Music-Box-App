import { CardAlunos } from "@/src/components/Cards/CardAluno";
import { Tela, TelaContainer } from "@/src/components/Tela";
import { useAlunos } from "@/src/hooks/useAlunos";
import { FlatList, Text, View } from "react-native";

export default function Alunos() {

    const alunos = [
        { id: 1, nome: "Bruno Santos" },
        { id: 2, nome: "Monica Santos" },
        { id: 3, nome: "Sara Santos" },
        { id: 4, nome: "Teste 1" },
        { id: 5, nome: "Teste 2" },
    ]

    const { aluno, editar, apagar } = useAlunos();

    return (
        <Tela>
            <TelaContainer>
                <View>

                </View>

                <FlatList
                    data={alunos}
                    showsVerticalScrollIndicator={false}
                    renderItem={card => (
                        <CardAlunos
                            key={card.item.id}
                            nome={card.item.nome}
                            funcaoEditar={() => { editar(card.item.nome) }}
                            funcaoApagar={() => { apagar(card.item.nome) }}

                        />
                    )}
                />
            </TelaContainer>
        </Tela>
    )
}