import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import headerimg from '../images/unilegal-blog.jpg'
import mobileheaderimg from '../images/unilegal-blog-mobile.jpg'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    projects: allSanitySampleProject(
      limit: 6
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>

      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <div class="container1111 desktop">
        <img src={headerimg} alt="Snow" width="1920" height="419" />
        <div class="centered"><h1>Blogs</h1>
          <p>Have a question? Need help with the products? Drop us a message here and we will try our best to help you!</p>
        </div>
      </div>
      <div class="container1111 mobile">
        <img src={mobileheaderimg} alt="Snow" width="1015" height="807" />
        <div class="centered"><h1>Blogs</h1>
          <p>Have a question? Need help with the products? Drop us a message here and we will try our best to help you!</p>
        </div>
      </div>
      <Container>
        {projectNodes && (
          <ProjectPreviewGrid
            title='Latest projects'
            nodes={projectNodes}
            
          />
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage
