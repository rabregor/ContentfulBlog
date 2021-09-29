const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulRgAsesoresPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulRgAsesoresPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
  createPage({
    path: `/contacto/`,
    component: path.resolve("./src/components/landingPage/contactForm.js"),
  })
}
