import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import headerimg from '../images/portomono-glass-protect-screen-protector-tempered-glass-contactus-header.jpg'
import mobileheaderimg from '../images/portomono-glass-protect-screen-protector-tempered-glass-contactus-header-mobile.jpg'
import Accordion from "../components/accordion/Accordion";




const ContactPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
    function colorSet() {
        document.getElementById('selection').style.color = "black";
    }

  return (
    <Layout>
      <SEO title="Contact Us" />
          <div class="container1111 desktop">
              <img src={headerimg} alt="Snow" width="1920" height="419"/>
              <div class="centered"><h1>Contact Us</h1>
                  <p>Have a question? Need help with the products? Drop us a message here and we will try our best to help you!</p>
</div>
          </div>
          <div class="container1111 mobile">
              <img src={mobileheaderimg} alt="Snow" width="1015" height="807"/>
              <div class="centered"><h1>Contact Us</h1>
                  <p>Have a question? Need help with the products? Drop us a message here and we will try our best to help you!</p>
              </div>
          </div>
          <Container>
              <div class="contactus">
                  <div class="left">
                      <div class="map">
                          <div class="mapleft">

                              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=104srEPcKm871w7Ni9GNt9x_NbMuo5n93" ></iframe>                          </div>
              <div class="mapright">
                <Accordion
                  title="160 Robinson Road"
                  content="160 Robinson Road,<br/>
#08-03 SBF Centre,<br/>
Singapore 068914<br/><br/>

Ranvir Kumar Singh<br/>
Lai Swee Fung<br/>
Yoong Nim Chor<br/>
Nazim Khan<br/>
Ng Puay Joo<br/>
Clarence Tan<br/>
Leonard Hazra<br/>
Kenneth Koh<br/>
Eric Low<br/>
Chia Cheok Sien<br/>
Kunal Haresh Mirpuri<br/><br/>
Fax: +65 6226 1993<br/>
Parking: GB Building<br/>
MRT: Raffles Place/Tanjong Pagar (Exit F)"
                />
                              <Accordion
                          title="6 Raffles Quay"
                                  content="6 Raffles Quay, #14-01, Singapore 048580<br/><br/>

Ernest Balasubramaniam<br/>
Serena Kent<br/><br/>

Tel: +65 6325 2852<br/>
Fax: +65 6325 2853<br/>
Email: ernest.bala@ernestbala.com.sg<br/><br/>

Parking: Available at 6 Raffles Quay<br/>
MRT: Raffles Place  "
                              />
                             
                              </div>
                              
                          </div>
                      <form id="contactform" class="contactusform" name="Contact Form" action="https://getsimpleform.com/messages?form_api_token=98e8867c4b508288f7697c44adfbcb05" method="post">
                  <input type='hidden' name='redirect_to' value='http://www.portomono.me/thank-you' />

                          <input type="hidden" name="form-name" value="Contact Form" />
                          <div class="flex">

          <div>
            <input placeholder="Name" type="text" name="name" />
                          </div>
                          <div>
                              <input placeholder="Phone Number" type="text" name="phonenumber" />
                          </div>
                              </div>
                          <div class="flex">
                              <div>
            <input placeholder="E-mail" type="email" name="email" />
          </div>
                              <div>
                                  <select id="selection" name="enquirytype" placeholder="Choose Enquiry Type" onClick={colorSet} required="">
              <option value="" hidden selected="">Choose Enquiry Type</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Litigation">Litigation</option>
                    <option value="Conveyance">Conveyance</option>
            </select>
                          </div>
                          </div>
                         
          <div class="textarea">
            <textarea placeholder="Your Message" name="message" />
          </div>
          <button type="submit">Send</button>
                      </form>
                  </div>
              </div>
      </Container>
    </Layout>
  )
}
ContactPage.defaultProps = {
  data: {
    page: {
      title: 'No title'
    }
  }
}
export default ContactPage
