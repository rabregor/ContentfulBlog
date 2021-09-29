import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import moment from "moment"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog.css"

const Blog = () => {
  moment.locale("es")
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulRgAsesoresPost {
          edges {
            node {
              title
              subtitle
              author
              slug
              teaser
              content {
                raw
              }

              date(formatString: "LL [a las] h:mm a", locale: "es-mx")
              image {
                gatsbyImageData
              }
              slide
            }
          }
        }
      }
    `
  )
  return (
    <>
      <div>
        <ul className="nav-bar">
          <Link to="/">
            <li className="hide">Inicio</li>
          </Link>
          <Link to="/blog/">
            <li className="active">Blog</li>
          </Link>
          <Link to="/contacto/">
            <li className="hide">Contacto</li>
          </Link>
        </ul>
      </div>
      {data.allContentfulRgAsesoresPost.edges
        .map(edge => {
          return (
            <>
              <div className={edge.node.slide ? "blog-card" : "blog-card alt"}>
                <div className="meta">
                  <div className="photo" style={{ width: "100%" }}>
                    <GatsbyImage
                      image={edge.node.image.gatsbyImageData}
                      alt={edge.node.title}
                    />
                  </div>
                  <ul className="details">
                    <li className="author">Autor: {edge.node.author}</li>
                    <li className="date">{edge.node.date}</li>
                  </ul>
                </div>
                <div className="description">
                  <h1>{edge.node.title}</h1>
                  <h2>{edge.node.subtitle}</h2>
                  <p>{edge.node.teaser}</p>
                  <p className="read-more">
                    <Link to={`/blog/${edge.node.slug}/`}>Leer más</Link>
                  </p>
                </div>
              </div>
            </>
          )
        })
        .reverse()}
    </>
  )
}

export default Blog
