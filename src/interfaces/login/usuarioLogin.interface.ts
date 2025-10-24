export interface IUsuarioLoginProps {
    email: string;
    senha: string;
}

export interface ILoginProps {
    usuario: IUsuarioLoginProps;
    login: ({ email, senha }:IUsuarioLoginProps)  => void;
    logout: () => void;
}