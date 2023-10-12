import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/inicio", { replace: true });
  };
  return (
    <>
      <form>
        <div className="group">
          <input type="text" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Nombre</label>
        </div>
        <div className="group">
          <input type="password" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Contraseña</label>
        </div>
        <button type="button" className="button buttonBlue" onClick={onLogin}>
          Login
          <div className="ripples buttonRipples">
            <span className="ripplesCircle"></span>
          </div>
        </button>
      </form>
    </>
  );
};
