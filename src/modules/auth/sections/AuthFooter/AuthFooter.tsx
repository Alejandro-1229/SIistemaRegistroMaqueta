import { Link } from "react-router-dom";
import "./AuthFooter.scss";

export const AuthFooter = () => {
  return (
    <footer className="auth-footer">
      <ul className="auth-footer__list">
        <li className="auth-footer__item">
          <Link to="">Terminos y condiciones</Link>
        </li>
        <li className="auth-footer__item">
          <Link to="">Avisos de Privacidad</Link>
        </li>
        <li className="auth-footer__item">
          <Link to="">Soporte</Link>
        </li>
        <li className="auth-footer__item auth-footer__item--copy">
          Copyright © 2023 Luchito Store. Todos los derechos reservados.
        </li>
      </ul>
    </footer>
  );
};
