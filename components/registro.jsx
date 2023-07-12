export default async function Registro() {
    const user = await fetchUser();
    // console.log(user);
    return (
      <section>
        <header>
          <h1>Bienvenido al "Reto - Fullstack Engineer (SP)"</h1>
        </header>
        <div>
          <h4>Favor iniciar sesion</h4>
        </div>
        <form>
          <div>
            <label>Email </label>
            <input
              // value={email}
              // onChange={(e) => valUser(e.target.value)}
              type="text"
              placeholder="correo@dominio.com"
            />
          </div>
          <div className="relative flex flex-col gap-y-1">
            <label className="font-medium text-gray-300">Contraseña</label>
            <input
              // onChange={(e) => valPassword(e)}
              name="password"
              // value={password.password}
              type="password"
              placeholder="********"
            />
          </div>
          <div>
            <label>Repita su contraseña</label>
            <input
              // onChange={(e) => valPassword(e)}
              name="password2"
              // value={password.password2}
              type="password"
              placeholder="********"
            />
          </div>
          <button to="#" type="submit">
            Registrate
          </button>
        </form>
        <div>
          <Link href="/register">No tienes una cuenta? Registrate</Link>
        </div>
        <section>
          <img src="" alt="logo google" />
        </section>
      </section>
    );
  }