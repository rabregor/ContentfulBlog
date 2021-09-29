import React from "react"
import "./landindpage.css"
import { Link } from "gatsby"
import { Modal } from "gatsby-plugin-material-ui"

export default function LandingPage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div className="wrapper">
        <ul className="nav-bar">
          <li className="active">Inicio</li>
          <Link to="/blog/">
            <li className="hide">Blog</li>
          </Link>
          <Link to="/contacto/">
            <li className="hide">Contacto</li>
          </Link>
        </ul>

        <div className="content">
          <h1>Bienvenido a mi blog</h1>
          <p>
            Hice este blog para compartir algunas ocurrencias, mostrar mis
            habilidades, y de paso divertirme un poco...
          </p>
        </div>

        <ul className="share">
          <Link to="/contacto/">
            <li data-text="mail">
              <i className="fa fa-envelope" aria-hidden="true" />
            </li>
          </Link>
          <Link to={"https://www.facebook.com/rafaabregor/"} target={"__blank"}>
            {" "}
            <li data-text="facebook">
              <i className="fa fa-facebook" aria-hidden="true" />
            </li>
          </Link>
          <Link
            to={
              "https://api.whatsapp.com/send/?phone=5218115283397&text=Hola,%20como%20estas?&app_absent=0"
            }
            target={"__blank"}
          >
            <li data-text="whatsapp">
              <i className="fa fa-whatsapp" aria-hidden="true" />
            </li>
          </Link>
        </ul>
      </div>
      <footer
        style={{
          textAlign: `center`,
          backgroundColor: "black",
          color: "white",
        }}
      >
        © {new Date().getFullYear()}, Hecho por{" "}
        <a
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
          href="https://github.com/rabregor"
          target="_blank"
        >
          Rafael Abrego{" "}
        </a>
      </footer>
    </>
  )
}
