import React from "react"
import "./contactForm.css"
import { Link } from "gatsby"

function contactForm() {
  return (
    <>
      <div>
        <ul className="nav-bar">
          <Link to="/">
            <li className="hide">Inicio</li>
          </Link>
          <Link to="/blog/">
            <li className="hide">Blog</li>
          </Link>
          <Link to="/contacto/">
            <li className="active">Contacto</li>
          </Link>
        </ul>
      </div>
      <div style={{ alignSelf: "center" }}>
        <div class="container">
          <div class="form-container">
            <div class="left-container">
              <div class="left-inner-container">
                <h2>¡Contáctame!</h2>
                <p>
                  ¡Cualquier duda o comentario que tengas, enviamela por la
                  forma de contacto!
                </p>
                <br />
                <p>
                  Estoy a tu servicio para contestar cualquiera de tus dudas.
                </p>
              </div>
            </div>
            <div class="right-container">
              <div class="right-inner-container">
                <form action="#">
                  <h2 class="lg-view">Contacto</h2>
                  <p>* Requerido</p>
                  <input class="detail" type="text" placeholder="Nombre *" />
                  <input class="detail" type="email" placeholder="Correo *" />
                  <input class="detail" type="text" placeholder="Empresa" />
                  <input class="detail" type="phone" placeholder="Telefono" />
                  <textarea rows="4" placeholder="Mensaje"></textarea>
                  <button style={{ fontSize: "1rem" }}>Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contactForm
