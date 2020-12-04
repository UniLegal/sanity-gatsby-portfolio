import React, { useEffect } from 'react'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import slide from '../images/portomono-glass-protect-screen-protector-tempered-glass-slide1.png'
import slide2 from '../images/portomono-glass-protect-screen-protector-tempered-glass-slide2.png'
import slide3 from '../images/portomono-glass-protect-screen-protector-tempered-glass-slide3.png'
import mobslide2 from '../images/portomono-glass-protect-screen-protector-tempered-glass-mobslide1.png'
import mobslide1 from '../images/portomono-glass-protect-screen-protector-tempered-glass-mobslide2.png'
import mobslide3 from '../images/portomono-glass-protect-screen-protector-tempered-glass-mobslide3.png'
import Carousel from 'nuka-carousel';

export const query = graphql`
  query IndexPageQuery1 {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    
  }
`

const IndexPage = props => {

  const { data, errors } = props
  const site = (data || {}).site

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout> 
    )
  }

    function handleClick(e) {
        e.preventDefault();
        window.location.href = "/glass-protect";
    }
    function handleClick1(e) {
        e.preventDefault();
        window.location.href = "/warranty-policy";
    }
    function handleClick2(e) {
        e.preventDefault();
        window.location.href = "/register-interest";
    }
  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
          <div className="App">
              <Carousel className="desktopslide"
        defaultControlsConfig={{
          nextButtonText: 'Custom Next',
          prevButtonText: 'Customn Prev',
          pagingDotsStyle: {
            fill: 'white',
            color: "white"
          }
        }}
        wrapAround="true"
        disableEdgeSwiping="true"
        autoplay="true"
        autoplayInterval="5000"
        renderCenterLeftControls={({ previousSlide }) => (
        <button class= "slidebtn" onClick={previousSlide}>
          <i className="fa fa-arrow-left" />
        </button>
      )}
        renderCenterRightControls={({ nextSlide }) => (
          <button class="slidebtn" onClick={nextSlide}>
            <i className="fa fa-arrow-right" />
          </button>
                  )}>
                  <img src={slide} onClick={handleClick} alt="portomono glass protect screen protector slide"/>
                  <img src={slide2} onClick={handleClick2} alt="portomono glass protect uv screen protector slide"/>
                  <img src={slide3} onClick={handleClick1} alt="portomono glass protect screen protector warranty slide"/>
              </Carousel>
              <Carousel className="mobileslide"
        defaultControlsConfig={{
          nextButtonText: 'Custom Next',
          prevButtonText: 'Customn Prev',
          pagingDotsStyle: {
            fill: 'white',
            color: "white"
          }
        }}
        wrapAround="true"
        disableEdgeSwiping="true"
        autoplay="true"
        autoplayInterval="5000"
        renderCenterLeftControls={({ previousSlide }) => (
        <button class= "slidebtn" onClick={previousSlide}>
          <i className="fa fa-arrow-left" />
        </button>
      )}
        renderCenterRightControls={({ nextSlide }) => (
          <button class="slidebtn" onClick={nextSlide}>
            <i className="fa fa-arrow-right" />
          </button>
        )}>
                  <img src={mobslide1} onClick={handleClick} alt="portomono glass protect screen protector slide"/>
                  <img src={mobslide2} alt="portomono glass protect uv screen protector slide"/>
                  <img src={mobslide3} onClick={handleClick1} alt="portomono glass protect screen protector warranty slide"/>
      </Carousel>
      <div class="about">
        <div class="brand">About UniLegal</div>
                  <div class="desc">Welcome to the website of UniLegal LLC. We are a dynamic law firm, established for more than a decade with a wide range of expertise and experience, providing exceptional advice and service at competitive costs. 
          </div>
              </div>


    </div>
    </Layout>
  )
}

export default IndexPage
