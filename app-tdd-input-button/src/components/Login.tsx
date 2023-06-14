const Login = () => {
    return (
        <form>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="Senha"></input>
        
        // o disabled esta com valor TRUE, mude para false, para rever o cenário de falha.
        <button disabled={true}>Entrar</button>
        </form>
    )
}

export default Login