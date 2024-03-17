import './HomePage.scss'

export const HomePage = () => {
  return (
    <div className="login-container">
      <form className="login-form" action="#" method="POST">
        <h2>Inicio Sesión</h2>
        <div className="form-group-index">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group-index">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button className='button' type="submit">Entrar</button>
      </form>
    </div> 
  )
}