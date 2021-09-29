import React from "react"
import { graphql, Link } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import "./blog-post.css"

export const query = graphql`
  query ($slug: String!) {
    contentfulRgAsesoresPost(slug: { eq: $slug }) {
      title
      author
      date(formatString: "MMM Do YY", locale: "es-mx")
      tags
      image {
        file {
          url
        }
      }
      content {
        raw
      }
    }
  }
`

const BlogPost = props => {
  return (
    <>
      {" "}
      <SEO title={props.data.contentfulRgAsesoresPost.title} />
      <div>
        <ul className="nav-bar">
          <Link to="/">
            <li className="hide">Inicio</li>
          </Link>
          <Link to="/blog/">
            <li className="hide">Blog</li>
          </Link>
          <Link to="/contacto/">
            <li className="hide">Contacto</li>
          </Link>
        </ul>
      </div>
      <div class="blog-container">
        <div class="blog-header">
          <div
            class="blog-cover"
            style={{
              background: `url(https://${props.data.contentfulRgAsesoresPost.image.file.url})`,
              borderRadius: "5px 5px 0 0",
              height: "40rem",
            }}
          >
            <div class="blog-author">
              <h3>{props.data.contentfulRgAsesoresPost.author}</h3>
            </div>
          </div>
        </div>

        <div class="blog-body">
          <div class="blog-title" style={{ paddingTop: "2rem" }}>
            <h1>
              <a href="#">{props.data.contentfulRgAsesoresPost.title}</a>
            </h1>
          </div>
          <div class="blog-summary" style={{ textAlign: "justify" }}>
            <p>{renderRichText(props.data.contentfulRgAsesoresPost.content)}</p>
          </div>
          <div class="blog-tags">
            <ul>
              {props.data.contentfulRgAsesoresPost.tags.length > 0
                ? props.data.contentfulRgAsesoresPost.tags.map(tag => {
                    console.log(tag)
                    return (
                      <li>
                        <a href="#">{tag}</a>
                      </li>
                    )
                  })
                : null}
            </ul>
          </div>
        </div>

        <div class="blog-footer">
          <ul>
            <li class="published-date">
              {props.data.contentfulRgAsesoresPost.date}
            </li>
            <li class="comments">
              <a href="#">
                <svg class="icon-bubble"></svg>
                <span class="numero">4</span>
              </a>
            </li>
            <li class="shares">
              <a href="#">
                <svg class="icon-star"></svg>
                <span class="numero">1</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default BlogPost
