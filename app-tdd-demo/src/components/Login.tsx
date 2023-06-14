const Login = () => {
    return (
        <form>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="Senha"></input>
        <button disabled={true}>Entrar</button>
        </form>
    )
}

export default Login