import './tela.css';
import iconLogin from '../../imagens/user-icon.png';

function tela(){
    const rememberMe = ' Lembrar De Min'
    return(
        <div id='screen-tela'>
            <form>
                <img class="mb-4" src={iconLogin} alt="" width="72" height="72"></img>
                <h1 class="h3 mb-3 font-weight-normal">Faça login</h1>
                <label for="inputEmail" class="sr-only">Endereço de email</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Seu email" required autofocus></input>
                <label for="inputPassword" class="sr-only">Senha</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required></input>
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" />{rememberMe}
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2023-2023</p>
            </form>
        </div>
    )
}

export default tela