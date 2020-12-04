import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import lai from '../images/lawyers/lai.jpg'
import kenneth from '../images/lawyers/kenneth.jpg'
import serena from '../images/lawyers/serena.jpg'
import ernest from '../images/lawyers/ernest.jpg'
import ranvir from '../images/lawyers/ranvir.jpg'
import ng from '../images/lawyers/ng.jpg'
import nazim from '../images/lawyers/nazim.jpg'
import clarence from '../images/lawyers/clarence.jpg'
import yoongnc from '../images/lawyers/yoongnc.jpg'
import eric from '../images/lawyers/eric.jpg'
import leonard from '../images/lawyers/leonard.jpg'
import chia from '../images/lawyers/chia.jpg'

import $ from 'jquery'; 

const warrantyRequestPage = props => {
    var v = $(window).width();
    var mob = Boolean(v < 600);
    console.log(mob);
    $(document).ready(function () {
        $('#l1').click(function () {
            if (mob == true) {
                $('#open1mob').slideToggle("slow");
            }
            else {
                $('#open2').slideUp("slow");
                $('#open4').slideUp("slow");
                $('#open3').slideUp("slow");
                $('#open5').slideUp("slow");
                $('#open1').slideToggle("slow");
            }
        });
        $('#l2').click(function () {
            if (mob == true) {
                $('#open2mob').slideToggle("slow");
            }
            else {
                $('#open1').slideUp("slow");
                $('#open4').slideUp("slow");

                $('#open3').slideUp("slow");
                $('#open5').slideUp("slow");

                $('#open2').slideToggle("slow");
            }
        });
        $('#l3').click(function () {
            if (mob == true) {
                $('#open3mob').slideToggle("slow");
            }
            else {
                $('#open2').slideUp("slow");
                $('#open4').slideUp("slow");

                $('#open1').slideUp("slow");
                $('#open5').slideUp("slow");

                $('#open3').slideToggle("slow");
            }
        });
        $('#l4').click(function () {
            if (mob == true) {
                $('#open4mob').slideToggle("slow");
            }
            else {
                $('#open1').slideUp("slow");
                $('#open2').slideUp("slow");

                $('#open3').slideUp("slow");
                $('#open5').slideUp("slow");

                $('#open4').slideToggle("slow");
            }
        });
        $('#l5').click(function () {
            if (mob == true) {
                $('#open5mob').slideToggle("slow");
            }
            else {
                $('#open2').slideUp("slow");
                $('#open4').slideUp("slow");

                $('#open3').slideUp("slow");
                $('#open1').slideUp("slow");

                $('#open5').slideToggle("slow");
            }
        });
        $('#l6').click(function () {
            if (mob == true) {
                $('#open6mob').slideToggle("slow");
            }
            else {
                $('#open7').slideUp("slow");
                $('#open8').slideUp("slow");

                $('#open9').slideUp("slow");
                $('#open10').slideUp("slow");

                $('#open6').slideToggle("slow");
            }
        });
        $('#l7').click(function () {
            if (mob == true) {
                $('#open7mob').slideToggle("slow");
            }
            else {
                $('#open6').slideUp("slow");
                $('#open8').slideUp("slow");

                $('#open9').slideUp("slow");
                $('#open10').slideUp("slow");

                $('#open7').slideToggle("slow");
            }
        });
        $('#l8').click(function () {
            if (mob == true) {
                $('#open8mob').slideToggle("slow");
            }
            else {
                $('#open6').slideUp("slow");
                $('#open7').slideUp("slow");

                $('#open9').slideUp("slow");
                $('#open10').slideUp("slow");

                $('#open8').slideToggle("slow");
            }
        });
        $('#l9').click(function () {
            if (mob == true) {
                $('#open9mob').slideToggle("slow");
            }
            else {
                $('#open6').slideUp("slow");
                $('#open7').slideUp("slow");

                $('#open8').slideUp("slow");
                $('#open10').slideUp("slow");

                $('#open9').slideToggle("slow");
            }
        });
        $('#l10').click(function () {
            if (mob == true) {
                $('#open10mob').slideToggle("slow");
            }
            else {
                $('#open6').slideUp("slow");
                $('#open7').slideUp("slow");

                $('#open8').slideUp("slow");
                $('#open9').slideUp("slow");

                $('#open10').slideToggle("slow");
            }

        });
        $('#l11').click(function () {
            if (mob == true) {
                $('#open12').slideUp("slow");

                $('#open11mob').slideToggle("slow");
            }
            else {
                $('#open12').slideUp("slow");

                $('#open11').slideToggle("slow");
            }
        });
        $('#l12').click(function () {
            if (mob == true) {
                $('#open11').slideUp("slow");
                $('#open12mob').slideToggle("slow");
            }
            else {
                $('#open11').slideUp("slow");
                $('#open12').slideToggle("slow");
            }
        });
    });


    function showoverlay(num) {
        if (mob == true) {
            $('#open' + num + 'mob').slideUp("slow");
        }
        else {
            $('#open'+num).slideUp("slow");
        }
    }
  return (
    <Layout>
          <SEO title="Profile of Lawyers" />
          <div class="installclass" style={{ marginTop: 1 + 'em' }}>
          <div class="install">
                      <img class="installimg" id="l2" height="3024" width="3024" src={lai} alt="portomono installation guide" />
                  </div>
              <div class="open" id="open2mob">
                  <div class="inner">
                      <div class="inner11">

                      <div class="position">
                          Lai Swee Fung<br />
                  Consultant<br />
                          </div>
                          <div class="btnmob">
                          <button class="crossmob" onClick={showoverlay.bind(null, "2")} >
                                  &#215;
                  </button>
                              </div>
                      </div>
                      <div class="wrapper">
                          <div class="left">
                              Email: <a href="mailto:lai@unilegal.com.sg">lai@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362949">+65 6236 2949</a>
                              <br />
                          Tel: <a href="tel:+6562362983">+65 6236 2983</a>
                          </div>
                          <div class="right">
                              Swee Fung graduated from the National University of Singapore in 1984. Since then he has been involved in civil & criminal litigation and arbitration. He obtained a Masters of Business Administration (for Asia Pacific Executives) from National University of Singapore in 1999. He is a Founding Director of UniLegal LLC. Prior to that he was a Senior Partner of Chan Ng Aqbal and a Partner of Toh Tan & Partners. He has been involved in numerous litigation cases involving commercial, construction, family, estate, property, conveyancing, criminal and other matters.</div>
                      </div>
                  </div>
              </div>
          <div class="install">
                      <img class="installimg" id="l1" height="3024" width="3024" src={ranvir} alt="portomono installation guide"/>
          </div>
              <div class="open" id="open1mob">
                  <div class="inner">
                      <div class="inner11">

                          <div class="position">
                              Ranvir Kumar Singh<br />
                  Director<br />
                          </div>
                          <div class="btnmob">
                              <button class="crossmob" onClick={showoverlay.bind(null, "3")} >
                                  &#215;
                  </button>
                          </div>
                      </div>

                      <div class="wrapper">
                          <div class="left">
                              Email: <a href="mailto:ranvir.kumar@unilegal.com.sg">ranvir.kumar@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362434">+65 6236 2434</a>
                              <br />
                          Tel: <a href="tel:+6562362436">+65 6236 2436</a>
                              <br />
                          Tel: <a href="tel:+656236 2430">+65 6236 2430</a>
                          </div>
                          <div class="right">
                              Ranvir graduated from National University of Singapore with LL.B (Hons) in 1984. He also graduated from Singapore Institute of Management with Dip F Mgt in 1990. He was admitted to the Singapore Bar in 1985 and has been in private practice ever since.
                          <br /><br />

                          Ranvir is a very practical and pragmatic lawyer and he has gained considerable exposure and experience in a wide spectrum of legal matters. He has been the lead Counsel in a number of large complicated cases. He is an active Advocate who has argued cases in superior Courts in Singapore, the International Court of Arbitration of the International Chamber of Commerce, Singapore International Arbitration Centre and Singapore Mediation Centre.
                          <br /><br />

                          Fluent in English, Hindi and Malay. Conversant in some Chinese dialects. He is active in social and community work and holds key positions in a number of organisations.
                                     </div></div>
                  </div>
              </div>

          <div class="install">
                  <img class="installimg" id="l3" height="3024" width="3024" src={yoongnc} alt="portomono installation guide"/>
              </div>
              <div class="open" id="open3mob">
                  <div class="inner">
                      <div class="inner11">
                          <div class="position">
                              Yoong Nim Chor<br />
                  Director<br />
                          </div>
                          <div class="btnmob">
                              <button class="crossmob" onClick={showoverlay.bind(null, "9")} >
                                  &#215;
                  </button>
                          </div>
                      </div>

                      <div class="wrapper">
                          <div class="left">
                              Email: <a href="mailto:yoongnc@unilegal.com.sg">yoongnc@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362432">+65 6236 2432</a>
                              <br />
                          Tel: <a href="tel:+6598180268">+65 9818 0268</a>
                          </div>
                          <div class="right">
                              Nim Chor holds a LL.B. (Hons) (Second Class Upper Division) conferred by the National University of Singapore in 1981. He is admitted to as an Advocate & Solicitor (Supreme Court of Singapore) in 1982, an Advocate & Solicitor (High Court of Malaya, Malaysia) in 1994, and a Solicitor (England & Wales) in 1995. Nim Chor is practises as a Consultant of UniLegal LLC (as an Advocate & Solicitor of Singapore), and contemporaneously as Senior Partner of Malaysian law firm Yoong & Partners (as an Advocate & Solicitor of Malaysia).
                          <br /><br />
                          He has practised with eminent City of London law firm Freshfields (now known as Freshfields Bruckhaus Deringer) in their Singapore and London offices. Nim Chor also co-founded prominent Singapore law firms Wong, Yoong, Tan & Molly Lim and Wong Partnership, and went on to set up Yoong & Partners. He has headed the Corporate & Securities Department of KhattarWong LLP before becoming a Consultant with UniLegal. His experience spans matters and transactions in Singapore, Malaysia as well as cross-border transactions in most ASEAN countries, Hong Kong, China, United Kingdom, United States, India and Switzerland.
                          <br /><br />
                          He practices especially in the areas of Corporate, Securities and Finance laws, both as a solicitor and as an advocate. He advises on and works closely with clients in structuring transactions and deals, drafting of relevant agreements and related documents, and legal aspects of completion and implementation. In addition, in situations of conflict or dispute, he has been closely involved in the dispute management process, advising where appropriate on avenues to avoid litigation as well as litigation in the Courts or via arbitration when necessary. Uniquely for a specialist in the areas of Corporate, Securities and Finance laws, Nim Chor has - in those areas - acted for clients and has appeared for clients in the apex courts of both Singapore (The Court of Appeal, Singapore) and Malaysia (The Federal Court, Malaysia). A number of the Court cases on which he has acted are reported as authorities on points of law in Law Reports.
                          <br /><br />
Nim Chor's vast experience includes having acted and advised on Initial Public Offerings of shares (including being the principal partner in listings in Singapore and in Malaysia), bond and other transferable instruments issues, mergers and acquisitions, company, joint venture and commercial transactions, investments and holdings in securities and specific industries in Singapore, Malaysia and other countries, and acquisitions, disposals and derivatives involving personal assets and real property. An area where he has a particularly long and successful record relates to the calling, agenda, regulatory compliances and processes, and conduct of Extraordinary General Meetings of companies listed in Singapore as well as in Malaysia, not least when there is an element of disagreement or dispute in respect of the outcomes. Of late, Nim Chor has also advised on the legal ramifications of cryptocurrencies and Initial Coin Offerings of cryptocurrencies.</div>
                      </div>
                  </div>
              </div>
          <div class="install">
                      <img class="installimg" id="l4" height="3024" width="3024" src={ng} alt="portomono installation guide"/>
          </div>        
              <div class="open" id="open4mob">
                  <div class="inner">
                      <div class="inner11">
                          <div class="position">
                              Ng Puay Joo<br />
                  Director<br />
                          </div>
                          <div class="btnmob">
                              <button class="crossmob" onClick={showoverlay.bind(null, "6")} >
                                  &#215;
                  </button>
                          </div>
                      </div>

                      <div class="wrapper">
                          <div class="left">
                              Email: <a href="mailto:ngpuayjoo@unilegal.com.sg">ngpuayjoo@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362931">+65 6236 2931</a>
                              <br />
                          Tel: <a href="tel:+6562362948">+65 6236 2948</a>
                          </div>
                          <div class="right">
                              Puay Joo graduated from the National University of Singapore with LLB. (Hons) in 1988 and was called to the Singapore Bar in 1989. She has been a director of UniLegal LLC since 2006. Prior to that, she practised with the law firms Messrs Rajah & Tann, Messrs Peter Low Tang & Belinda Ang as well as Messrs Toh Tan & Partners. She has also spent a short stint as an in-house legal counsel of one of the major local banks.
                          <br /><br />
                          Puay Joo's areas of practice and specialisation include banking, conveyancing, securities and loan documentation. She has advised banks, financial institutions, local statutory boards, registered societies, corporations and individuals on a variety of banking and finance transactions including development project financing, multi-currency loans, syndicated loans, and in the sale, acquisition and mortgage of industrial, commercial and residential properties. Her other areas of practice include representing and advising landlords and tenants in commercial and residential leasing in Singapore as well as estate and probate matters.
                                </div>

                      </div>
                  </div>
              </div>
                  <div class="install">
                      <img class="installimg" id="l5" height="3024" width="3024" src={nazim} alt="portomono installation guide"/>
              </div>
              <div class="open" id="open5mob">
                  <div class="inner">
                      <div class="inner11">

                          <div class="position">
                              Nazim Khan<br />
                  Director<br />
                          </div>
                          <div class="btnmob">
                              <button class="crossmob" onClick={showoverlay.bind(null, "7")} >
                                  &#215;
                  </button>
                          </div>
                      </div>

                      <div class="wrapper">
                          <div class="left">
                              Email: <a href="mailto:nazim.khan@unilegal.com.sg">nazim.khan@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362939">+65 6236 2939</a>
                              <br />
                          Tel: <a href="tel:+6562362932">+65 6236 2932</a>
                          </div>
                          <div class="right">
                              Nazim graduated from the University of London with an LL.B Hons in June 1989. He was admitted as a Barrister to the Bar in England & Wales in July 1990 and was admitted as an Advocate & Solicitor in Singapore in January 1992.
                          <br /><br />
                          Nazim specialises in high value Commercial Litigation and undertakes advisory and advocacy work in the Singapore Courts and in Domestic and International Arbitrations. As of 2018, he has 26 years of experience in very complex and intricate issues in the corporate/commercial arena. He brings his passion for the business world into perceiving and processing facts such as to create out of the box answers within the legal framework. Whilst he has wide experience in Court advocacy, Appellate advocacy and Arbitration, he considers cases as "problem solving" opportunities which need not necessarily lead to trial or arbitration. He also views settlements through Alternative Dispute Resolution or other alternatives to be a much needed and more viable approach in the 21st century. An efficient, systematic and opportunistic solving of problems is key. Every case has its waxes and wanes, ebbs and flows. The timing of a settlement is also critical.
                          <br /><br />
                          Nazim has experience in the following areas, namely:-
                          <ul>
                                  <li >Matters relating to Companies & Corporations including derivative actions, minority oppression, breach of director's duties, financial assistance, breaches of various provisions under the Act, Insolvency, Judicial Management, Corporate Receivership and Restructuring</li>
                                  <li >Letters of Credit, Standby Letters of Credit, Guarantees and Performance Bonds</li>
                                  <li >Banking Litigation</li>
                                  <li >Tortious claims and Economic Torts</li>
                                  <li >Defamation</li>
                                  <li >Disputes on assets and matters arising from Probate and Letters of Administration including cross-jurisdictional disputes</li>
                                  <li >Professional Negligence</li >
                                  <li >Construction related disputes and those relating to infrastructure projects and Power Plant Projects(cross - jurisdictional) both in domestic and international arbitration</li >
                                  <li >Personal Debt Restructuring for owners in Corporate Insolvencies including Voluntary Arrangements</li >
                              </ul>
                          Several of the cases he has done has been reported. Nazim also has experience in corporate agreements including mergers and acquisitions, sale and purchase of shares in companies and businesses.
                          <br /><br />
Nazim is able to put together a team from members within UniLegal LLC and practitioners outside depending on the value and size of each case. Nazim is also able to work with lawyers and counsel from other jurisdictions in cross-jurisdictional matters and is able to tap on his network for this. Nazim is able to put together either a large team or a small team as the case may be.
                          <br /><br />
Over the years he has also advised High Net Worth individuals and Entrepreneurs on variety of issues and problems.
                          <br /><br />
A fuller curriculum vitae can be provided upon request
                              </div></div>
                  </div>
              </div>
                      </div>
             
          <div class="open" id="open1">
              <button class="cross" onClick={showoverlay.bind(null, "1")} >
                  &#215;
                  </button>
              <div class="inner">
                  <div class="position">
                      Ranvir Kumar Singh<br />
                  Director<br />
                  </div>
                  <div class="wrapper">
                      <div class="left">
                          Email: <a href="mailto:ranvir.kumar@unilegal.com.sg">ranvir.kumar@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362434">+65 6236 2434</a>
                          <br />
                          Tel: <a href="tel:+6562362436">+65 6236 2436</a>
                          <br />
                          Tel: <a href="tel:+656236 2430">+65 6236 2430</a>

                      </div>
                      <div class="right">
                          Ranvir graduated from National University of Singapore with LL.B (Hons) in 1984. He also graduated from Singapore Institute of Management with Dip F Mgt in 1990. He was admitted to the Singapore Bar in 1985 and has been in private practice ever since.
                          <br /><br />

                          Ranvir is a very practical and pragmatic lawyer and he has gained considerable exposure and experience in a wide spectrum of legal matters. He has been the lead Counsel in a number of large complicated cases. He is an active Advocate who has argued cases in superior Courts in Singapore, the International Court of Arbitration of the International Chamber of Commerce, Singapore International Arbitration Centre and Singapore Mediation Centre.
                          <br /><br />

                          Fluent in English, Hindi and Malay. Conversant in some Chinese dialects. He is active in social and community work and holds key positions in a number of organisations.
                                            </div></div>
                  </div>
          </div>
          <div class="open" id="open2">
              <button class="cross" onClick={showoverlay.bind(null, "2")} >
                  &#215;
                  </button>
              <div class="inner">
                  <div class="position">
                      Lai Swee Fung<br />
                  Director<br />
                  </div>
                  <div class="wrapper">
                      <div class="left">
                          Email: <a href="mailto:lai@unilegal.com.sg">lai@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362949">+65 6236 2949</a>
                          <br />
                          Tel: <a href="tel:+6562362983">+65 6236 2983</a>
                      </div>
                      <div class="right">
                          Swee Fung graduated from the National University of Singapore in 1984. Since then he has been involved in civil & criminal litigation and arbitration. He obtained a Masters of Business Administration (for Asia Pacific Executives) from National University of Singapore in 1999. He is a Founding Director of UniLegal LLC. Prior to that he was a Senior Partner of Chan Ng Aqbal and a Partner of Toh Tan & Partners. He has been involved in numerous litigation cases involving commercial, construction, family, estate, property, conveyancing, criminal and other matters.</div>
                  </div>
              </div>
          </div>
          <div class="open" id="open3">
              <button class="cross" onClick={showoverlay.bind(null, "3")} >
                  &#215;
                  </button>
              <div class="inner">
                  <div class="position">
                      Yoong Nim Chor<br />
                  Director<br />
                  </div>
                  <div class="wrapper">
                      <div class="left">
                          Email: <a href="mailto:yoongnc@unilegal.com.sg">yoongnc@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362432">+65 6236 2432</a>
                          <br />
                          Tel: <a href="tel:+6598180268">+65 9818 0268</a>
                      </div>
                      <div class="right">
                          Nim Chor holds a LL.B. (Hons) (Second Class Upper Division) conferred by the National University of Singapore in 1981. He is admitted to as an Advocate & Solicitor (Supreme Court of Singapore) in 1982, an Advocate & Solicitor (High Court of Malaya, Malaysia) in 1994, and a Solicitor (England & Wales) in 1995. Nim Chor is practises as a Consultant of UniLegal LLC (as an Advocate & Solicitor of Singapore), and contemporaneously as Senior Partner of Malaysian law firm Yoong & Partners (as an Advocate & Solicitor of Malaysia).
                          <br /><br />
                          He has practised with eminent City of London law firm Freshfields (now known as Freshfields Bruckhaus Deringer) in their Singapore and London offices. Nim Chor also co-founded prominent Singapore law firms Wong, Yoong, Tan & Molly Lim and Wong Partnership, and went on to set up Yoong & Partners. He has headed the Corporate & Securities Department of KhattarWong LLP before becoming a Consultant with UniLegal. His experience spans matters and transactions in Singapore, Malaysia as well as cross-border transactions in most ASEAN countries, Hong Kong, China, United Kingdom, United States, India and Switzerland.
                          <br /><br />
                          He practices especially in the areas of Corporate, Securities and Finance laws, both as a solicitor and as an advocate. He advises on and works closely with clients in structuring transactions and deals, drafting of relevant agreements and related documents, and legal aspects of completion and implementation. In addition, in situations of conflict or dispute, he has been closely involved in the dispute management process, advising where appropriate on avenues to avoid litigation as well as litigation in the Courts or via arbitration when necessary. Uniquely for a specialist in the areas of Corporate, Securities and Finance laws, Nim Chor has - in those areas - acted for clients and has appeared for clients in the apex courts of both Singapore (The Court of Appeal, Singapore) and Malaysia (The Federal Court, Malaysia). A number of the Court cases on which he has acted are reported as authorities on points of law in Law Reports.
                          <br /><br />
Nim Chor's vast experience includes having acted and advised on Initial Public Offerings of shares (including being the principal partner in listings in Singapore and in Malaysia), bond and other transferable instruments issues, mergers and acquisitions, company, joint venture and commercial transactions, investments and holdings in securities and specific industries in Singapore, Malaysia and other countries, and acquisitions, disposals and derivatives involving personal assets and real property. An area where he has a particularly long and successful record relates to the calling, agenda, regulatory compliances and processes, and conduct of Extraordinary General Meetings of companies listed in Singapore as well as in Malaysia, not least when there is an element of disagreement or dispute in respect of the outcomes. Of late, Nim Chor has also advised on the legal ramifications of cryptocurrencies and Initial Coin Offerings of cryptocurrencies.</div>

                          </div>
              </div>
          </div>
          <div class="open" id="open4">
              <button class="cross" onClick={showoverlay.bind(null, "4")} >
                  &#215;
                  </button>
              <div class="inner">
                  <div class="position">
                      Ng Puay Joo<br />
                  Director<br />
                  </div>
                  <div class="wrapper">
                      <div class="left">
                          Email: <a href="mailto:ngpuayjoo@unilegal.com.sg">ngpuayjoo@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362931">+65 6236 2931</a>
                          <br />
                          Tel: <a href="tel:+6562362948">+65 6236 2948</a>
                      </div>
                      <div class="right">
                          Puay Joo graduated from the National University of Singapore with LLB. (Hons) in 1988 and was called to the Singapore Bar in 1989. She has been a director of UniLegal LLC since 2006. Prior to that, she practised with the law firms Messrs Rajah & Tann, Messrs Peter Low Tang & Belinda Ang as well as Messrs Toh Tan & Partners. She has also spent a short stint as an in-house legal counsel of one of the major local banks.
                          <br /><br />
                          Puay Joo's areas of practice and specialisation include banking, conveyancing, securities and loan documentation. She has advised banks, financial institutions, local statutory boards, registered societies, corporations and individuals on a variety of banking and finance transactions including development project financing, multi-currency loans, syndicated loans, and in the sale, acquisition and mortgage of industrial, commercial and residential properties. Her other areas of practice include representing and advising landlords and tenants in commercial and residential leasing in Singapore as well as estate and probate matters.
                           </div>

                          </div>
              </div>
          </div>
          <div class="open" id="open5">
              <button class="cross" onClick={showoverlay.bind(null, "5")} >
                  &#215;
                  </button>
              <div class="inner">
                  <div class="position">
                      Nazim Khan<br />
                  Director<br />
                  </div>
                  <div class="wrapper">
                      <div class="left">
                          Email: <a href="mailto:nazim.khan@unilegal.com.sg">nazim.khan@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362939">+65 6236 2939</a>
                          <br />
                          Tel: <a href="tel:+6562362932">+65 6236 2932</a>
                      </div>
                      <div class="right">
                          Nazim graduated from the University of London with an LL.B Hons in June 1989. He was admitted as a Barrister to the Bar in England & Wales in July 1990 and was admitted as an Advocate & Solicitor in Singapore in January 1992.
                          <br /><br />
                          Nazim specialises in high value Commercial Litigation and undertakes advisory and advocacy work in the Singapore Courts and in Domestic and International Arbitrations. As of 2018, he has 26 years of experience in very complex and intricate issues in the corporate/commercial arena. He brings his passion for the business world into perceiving and processing facts such as to create out of the box answers within the legal framework. Whilst he has wide experience in Court advocacy, Appellate advocacy and Arbitration, he considers cases as "problem solving" opportunities which need not necessarily lead to trial or arbitration. He also views settlements through Alternative Dispute Resolution or other alternatives to be a much needed and more viable approach in the 21st century. An efficient, systematic and opportunistic solving of problems is key. Every case has its waxes and wanes, ebbs and flows. The timing of a settlement is also critical.
                          <br /><br />
                          Nazim has experience in the following areas, namely:-
                          <ul>
                              <li >Matters relating to Companies & Corporations including derivative actions, minority oppression, breach of director's duties, financial assistance, breaches of various provisions under the Act, Insolvency, Judicial Management, Corporate Receivership and Restructuring</li>
                              <li >Letters of Credit, Standby Letters of Credit, Guarantees and Performance Bonds</li>
                              <li >Banking Litigation</li>
                              <li >Tortious claims and Economic Torts</li>
                              <li >Defamation</li>
                              <li >Disputes on assets and matters arising from Probate and Letters of Administration including cross-jurisdictional disputes</li>
                              <li >Professional Negligence</li >
                              <li >Construction related disputes and those relating to infrastructure projects and Power Plant Projects(cross - jurisdictional) both in domestic and international arbitration</li >
                              <li >Personal Debt Restructuring for owners in Corporate Insolvencies including Voluntary Arrangements</li >
                          </ul>
                          Several of the cases he has done has been reported. Nazim also has experience in corporate agreements including mergers and acquisitions, sale and purchase of shares in companies and businesses.
                          <br /><br />
Nazim is able to put together a team from members within UniLegal LLC and practitioners outside depending on the value and size of each case. Nazim is also able to work with lawyers and counsel from other jurisdictions in cross-jurisdictional matters and is able to tap on his network for this. Nazim is able to put together either a large team or a small team as the case may be.
                          <br /><br />  
Over the years he has also advised High Net Worth individuals and Entrepreneurs on variety of issues and problems.
                          <br /><br />
A fuller curriculum vitae can be provided upon request
                          </div></div>
                  </div>
          </div>
          <div class="installclass">
              <div class="install">
                  <img class="installimg" id="l6" height="3024" width="3024" src={clarence} alt="portomono installation guide" />
              </div>
              <div class="open" id="open6mob">
                  <div class="inner">
                      <div class="inner11">

                          <div class="position">
                              Clarence Tan<br />
                  Director<br />
                          </div>
                          <div class="btnmob">
                              <button class="crossmob" onClick={showoverlay.bind(null, "8")} >
                                  &#215;
                  </button>
                          </div>
                      </div>

                      <div class="wrapper">
                          <div class="left">
                              Email: <a href="mailto:ckltan@unilegal.com.sg">ckltan@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362950">+65 6236 2950</a>
                          </div>
                          <div class="right">
                              Clarence Tan is Director at UniLegal LLC and specialises in family, civil and commercial litigation, landlord and tenant, insolvency and bankruptcy, Strata Titles Board and Court of Appeal work.
                          <br /><br />
                          Over the years, Clarence has developed a personal approach to practicing law, believing in journeying with his clients and working closely with them to ensure amicable and practical solutions to their cases. His belief in "litigating with humour" has helped him establish strong relationships within the legal fraternity and with his clients, many of whom he still calls friends today.
                          <br /><br />
                          Clarence graduated from the University of Leeds in 1992 and was admitted to Lincoln's Inn in 1995. He was called to the Singapore Bar in 1997 and remains in practice. He is a member of the Law Society of Singapore and Singapore Academy of Law.
                          <br /><br />
Clarence is also a self-professed handyman who loves to tinker with cars, watches, bicycles and anything else he can get his hands on, including his golfing equipment. He loves a game of golf and represents the Law Society in golf in its annual Bar and Bench Games. He currently maintains a single handicap in golf, which he attributes to luck. </div>

                      </div>
                  </div>
              </div>
              <div class="install">
                  <img class="installimg" id="l7" height="3024" width="3024" src={leonard} alt="portomono installation guide" />
              </div>
              <div class="open" id="open7mob">
                  <div class="inner">
                      <div class="inner11">

                          <div class="position">
                              Leonard Hazra<br />
                  Partner<br />
                          </div>
                          <div class="btnmob">
                              <button class="crossmob" onClick={showoverlay.bind(null, "11")} >
                                  &#215;
                  </button>
                          </div>
                      </div>

                      <div class="wrapper">
                          <div class="left">
                              Email: <a href="mailto:leonard@unilegal.com.sg">leonard@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362411">+65 6236 2411</a>
                          </div>
                          <div class="right">
                              Leonard is a litigation and dispute resolution lawyer with main areas of focus in corporate, commercial and civil litigation and arbitration. Leonard has litigated and advised on a wide spectrum of cases, both local and with cross-border elements involving shareholders' disputes, breach of directors' duties, corporate investment and business disputes, loans and securities transactions, individual and corporate insolvencies, local and international commercial transaction disputes, building and construction disputes, tortious claims and matrimonial and family disputes. Leonard has also litigated and represented clients in criminal and regulatory offences proceedings.
                          <br /><br />
                              Leonard has appeared as Lead and Co-Counsel in hearings and trials in all levels of Courts in Singapore and in international arbitrations as well as in appeals before the Court of Appeal.
                          <br /><br />
                          Leonard was called to the Singapore Bar in 1992.
                          </div>
                      </div>
                  </div>
              </div>

              <div class="install">
                  <img class="installimg" id="l8" height="3024" width="3024" src={ernest} alt="portomono installation guide" />
              </div>
              <div class="open" id="open8mob">
                  <div class="inner">
                      <div class="inner11">

                          <div class="position">
                              Ernest Balasubramaniam<br />
                  Director<br />
                          </div>
                          <div class="btnmob">
                              <button class="crossmob" onClick={showoverlay.bind(null, "4")} >
                                  &#215;
                  </button>
                          </div>
                      </div>

                      <div class="wrapper">
                          <div class="left">
                              Email: <a href="mailto:ernest.bala@ernestbala.com.sg">ernest.bala@ernestbala.com.sg</a><br />
                          Tel: <a href="tel:+6563252855">+65 6325 2855</a>
                          </div>
                          <div class="right">
                              Ernest Balasubramaniam graduated from the National University of Singapore in 1987. He was emplaced in the Singapore Legal Service in 1988 where he served for 5 and a half years principally involved in land matters, prosecution and computerization. He was Project Manager of the Singapore Titles Automated Registration System and involved in amendments to legislation involving land. He was also involved in integration and development issues involving various ministries on land issues.
                                                    <br />
                              <br />

                          Ernest was admitted as an Advocate & Solicitor of the Supreme Court of Singapore in 1990. He obtained his Masters in law degree from the National University of Singapore in 1992 where he read advanced Banking Law, International Business Transactions, Insurance and Tax.
                                                    <br />
                              <br />

                          Ernest commenced private practice in June 1993 as a partner with a Singapore firm involved in 3 main areas, conveyancing, civil litigation and corporate work. He joined Arfat Selvam Alliance in 1999 and was head of the Real Estate and Civil Law Practice prior to joining Unilegal LLC in April 2010. Ernest enjoys a broad practice, which include conveyancing, general corporate, banking, project finance, tax and civil litigation and arbitration. He was counsel for a landmark decision on the law of issue estoppel and easements.
                                                    <br />
                              <br />

                          Ernest has extensive experience in practice matters relating to computerization and conveyancing. He has been on the Conveyancing and Ruling Sub-Committee of the Law Society since 1993 and is the Deputy Chairman of the Sub-Committee until 2008. He has worked closely with the Singapore Land Authority, IRAS, Controller of Housing, Building and Construction Authority and Singapore Academy of Law in various working groups and projects. He is a member of LawNet Sub-Committee for Conveyancing.
                                                    <br />
                              <br />

                          Ernest has been at the forefront of many initiatives such as the 1996 Property Tax Stamp Duty review, privatization of HDB transactions, electronic filing of instruments and electronic stamping of documents. He is regularly involved in changes to conveyancing practice and gives lectures and seminars organized by the Law Society for practicing lawyers.
                                                    <br />
                              <br />

                          He frequently advises major institutional clients including the CPF Board, Banks, Real Estate Developers and both private and listed companies.
                                                    <br />
                              <br />

                          Ernest's credentials include:-
                          <ul>
                                  <li>advising Keppel Land in the disposal of certain properties to Ayala Land valued at $170 million</li>
                                  <li>securitization of DBS Tampines Centre valued at $220 million; sale and lease back of 3Com facilities in Singapore</li>
                                  <li>advising Centrepoint Properties Ltd on the acquisition and development of Compass Point Shopping Centre and residential units valued at $380 million</li>
                                  <li> advising Keppel Land on office REIT valued at $1.2 billion</li>
                                  <li>advising Keppel Land on securitization of office buildings valued at $650 million</li>
                                  <li> redevelopment of Centrepoint Shopping Centre valued at $200 million</li>
                                  <li> redevelopment of Tang Plaza retail, hotel/residential valued at $300 million</li>
                                  <li> advising British & Malayan Trustee Limited in the ALLCO-IMF REIT valued at $690 million including office buildings in Perth, Melbourne and Singapore</li>
                                  <li> advising on enbloc sales ranging from 18 units to 172 units</li>
                                  <li> advising a listed company to acquire a Hotel (land and buildings) in Thailan;</li>
                                  <li> acting for both the Manager and Trustee of Cambridge Industrial Trust in acquisitions totalling $80 million</li>
                                  <li> acting for Creative Technology Centre Pte Ltd in the disposal of its corporate office valued at $250 million</li>
                                  <li> appeared before the Court of Appeal in Lee Tat Development Pte Ltd v MCST No. 301 [2008 SG CA 47]</li>
                              </ul>
                          A landmark decision reversing two earlier Court of Appeal decisions and is considered the leading case on the law of easements and issue estoppel. The asset of the property exceeds $550 million.
                          <br />
                          Outside his involvement in law, Ernest is a Board Member and Hon. Treasurer of St Hilda's Kindergarten. He is also an independent director of Vibropower Corporation Limited. He is also a member of the Audit Committee and Chairman of the Nominating Committee.
                                                  </div>

                      </div>
                  </div>
              </div>
              <div class="install">
                  <img class="installimg" id="l9" height="3024" width="3024" src={serena} alt="portomono installation guide" />
              </div>
              <div class="open" id="open9mob">
                  <div class="inner">
                      <div class="inner11">

                          <div class="position">
                              Serena Kent<br />
                  Director<br />
                          </div>
                          <div class="btnmob">
                              <button class="crossmob" onClick={showoverlay.bind(null, "5")} >
                                  &#215;
                  </button>
                          </div>
                      </div>

                      <div class="wrapper">
                          <div class="left">
                              Email: <a href="mailto:serena.kent@ernestbala.com.sg">serena.kent@ernestbala.com.sg</a><br />
                          Tel: <a href="tel:+6563252854">+65 6325 2854</a>
                          </div>
                          <div class="right">
                              Serena graduated from the National University of Singapore with an LLB (Hons) and LL.M and was called to the Singapore Bar in 1988. Prior to joining Arfat Selvam Alliance LLC in 2005, she was Vice President (Legal) at Oversea-Chinese Banking Corporation Limited (OCBC) and also with DBS Bank.
                          <br /><br />

Serena has extensive experience in all types of banking transactions including retail, commercial and private banking sectors. Her areas of practice include commercial leasing, banking and mortgage finance, real estate finance, collective sales and securitization, direct and indirect property acquisitions and regional investments. She also frequently advises major institutional clients in banking matters.                  </div>
                    </div>
                  </div>
              </div>
              <div class="install">
                  <img class="installimg" id="l10" height="3024" width="3024" src={kenneth} alt="portomono installation guide" />
              </div>
              <div class="open" id="open10mob">
                  <div class="inner">
                      <div class="inner11">

                          <div class="position">
                              Kenneth Koh<br />
                  Consultant<br />
                          </div>
                          <div class="btnmob">
                              <button class="crossmob" onClick={showoverlay.bind(null, "2")} >
                                  &#215;
                  </button>
                          </div>
                      </div>
                      <div class="wrapper">
                          <div class="left">
                              Email: <a href="mailto:kenkoh@unilegal.com.sg">kenkoh@unilegal.com.sg</a><br />
                          </div>
                          <div class="right">
                              Kenneth graduated from the National University of Singapore in 1983. He is an Advocate & Solicitor of the Supreme Court of Singapore.
                          <br />
                              <br />

                          He specialises in litigation, arbitration and mediation, with a particular focus on infrastructure, civil engineering and building construction disputes.
                          <br />
                              <br />

                          He also acts for clients in real estate and property financing matters. He was legal advisor to the Singapore Contractors Association and authored the Singapore chapters in 2 international publications:
                          <ul>
                                  <li>
                                      Transnational Litigation - A Practitioner's Guide by Oceana Publications</li>
                                  <li>The Handbook on Cross-Border Contracting by AIJA</li></ul>  </div>
                      </div>

                  </div>
              </div>
          </div>
          <div class="open" id="open6">
              <button class="cross" onClick={showoverlay.bind(null, "6")} >
                  &#215;
                  </button>
              <div class="inner">
                  <div class="position">
                      Clarence Tan<br />
                  Director<br />
                  </div>
                  <div class="wrapper">
                      <div class="left">
                          Email: <a href="mailto:ckltan@unilegal.com.sg">ckltan@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362950">+65 6236 2950</a>
                      </div>
                      <div class="right">
                          Clarence Tan is Director at UniLegal LLC and specialises in family, civil and commercial litigation, landlord and tenant, insolvency and bankruptcy, Strata Titles Board and Court of Appeal work.
                          <br /><br />
                          Over the years, Clarence has developed a personal approach to practicing law, believing in journeying with his clients and working closely with them to ensure amicable and practical solutions to their cases. His belief in "litigating with humour" has helped him establish strong relationships within the legal fraternity and with his clients, many of whom he still calls friends today.
                          <br /><br />
                          Clarence graduated from the University of Leeds in 1992 and was admitted to Lincoln's Inn in 1995. He was called to the Singapore Bar in 1997 and remains in practice. He is a member of the Law Society of Singapore and Singapore Academy of Law.
                          <br /><br />
Clarence is also a self-professed handyman who loves to tinker with cars, watches, bicycles and anything else he can get his hands on, including his golfing equipment. He loves a game of golf and represents the Law Society in golf in its annual Bar and Bench Games. He currently maintains a single handicap in golf, which he attributes to luck.</div>
                      </div>
              </div>
          </div>
          <div class="open" id="open7">
              <button class="cross" onClick={showoverlay.bind(null, "7")} >
                  &#215;
                  </button>
              <div class="inner">
                  <div class="position">
                      Leonard Hazra<br />
                  Partner<br />
                  </div>
                  <div class="wrapper">
                      <div class="left">
                          Email: <a href="mailto:leonard@unilegal.com.sg">leonard@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362411">+65 6236 2411</a>
                      </div>
                      <div class="right">
                          Leonard is a litigation and dispute resolution lawyer with main areas of focus in corporate, commercial and civil litigation and arbitration. Leonard has litigated and advised on a wide spectrum of cases, both local and with cross-border elements involving shareholders' disputes, breach of directors' duties, corporate investment and business disputes, loans and securities transactions, individual and corporate insolvencies, local and international commercial transaction disputes, building and construction disputes, tortious claims and matrimonial and family disputes. Leonard has also litigated and represented clients in criminal and regulatory offences proceedings.
                          <br /><br />
                              Leonard has appeared as Lead and Co-Counsel in hearings and trials in all levels of Courts in Singapore and in international arbitrations as well as in appeals before the Court of Appeal.
                          <br /><br />
                          Leonard was called to the Singapore Bar in 1992.
                          </div>
              </div>
              </div>
              </div>
          <div class="open" id="open8">
              <button class="cross" onClick={showoverlay.bind(null, "8")} >
                  &#215;
                  </button>
              <div class="inner">
                  <div class="position">
                      Ernest Balasubramaniam<br />
                  Director<br />
                  </div>
                  <div class="wrapper">
                      <div class="left">
                          Email: <a href="mailto:ernest.bala@ernestbala.com.sg">ernest.bala@ernestbala.com.sg</a><br />
                          Tel: <a href="tel:+6563252855">+65 6325 2855</a>
                      </div>
                      <div class="right">
                          Ernest Balasubramaniam graduated from the National University of Singapore in 1987. He was emplaced in the Singapore Legal Service in 1988 where he served for 5 and a half years principally involved in land matters, prosecution and computerization. He was Project Manager of the Singapore Titles Automated Registration System and involved in amendments to legislation involving land. He was also involved in integration and development issues involving various ministries on land issues.
                                                    <br />
                          <br />

                          Ernest was admitted as an Advocate & Solicitor of the Supreme Court of Singapore in 1990. He obtained his Masters in law degree from the National University of Singapore in 1992 where he read advanced Banking Law, International Business Transactions, Insurance and Tax.
                                                    <br />
                          <br />

                          Ernest commenced private practice in June 1993 as a partner with a Singapore firm involved in 3 main areas, conveyancing, civil litigation and corporate work. He joined Arfat Selvam Alliance in 1999 and was head of the Real Estate and Civil Law Practice prior to joining Unilegal LLC in April 2010. Ernest enjoys a broad practice, which include conveyancing, general corporate, banking, project finance, tax and civil litigation and arbitration. He was counsel for a landmark decision on the law of issue estoppel and easements.
                                                    <br />
                          <br />

                          Ernest has extensive experience in practice matters relating to computerization and conveyancing. He has been on the Conveyancing and Ruling Sub-Committee of the Law Society since 1993 and is the Deputy Chairman of the Sub-Committee until 2008. He has worked closely with the Singapore Land Authority, IRAS, Controller of Housing, Building and Construction Authority and Singapore Academy of Law in various working groups and projects. He is a member of LawNet Sub-Committee for Conveyancing.
                                                    <br />
                          <br />

                          Ernest has been at the forefront of many initiatives such as the 1996 Property Tax Stamp Duty review, privatization of HDB transactions, electronic filing of instruments and electronic stamping of documents. He is regularly involved in changes to conveyancing practice and gives lectures and seminars organized by the Law Society for practicing lawyers.
                                                    <br />
                          <br />

                          He frequently advises major institutional clients including the CPF Board, Banks, Real Estate Developers and both private and listed companies.
                                                    <br />
                          <br />

                          Ernest's credentials include:-
                          <ul>
                              <li>advising Keppel Land in the disposal of certain properties to Ayala Land valued at $170 million</li>
                              <li>securitization of DBS Tampines Centre valued at $220 million; sale and lease back of 3Com facilities in Singapore</li>
                              <li>advising Centrepoint Properties Ltd on the acquisition and development of Compass Point Shopping Centre and residential units valued at $380 million</li>
                              <li> advising Keppel Land on office REIT valued at $1.2 billion</li>
                              <li>advising Keppel Land on securitization of office buildings valued at $650 million</li>
                              <li> redevelopment of Centrepoint Shopping Centre valued at $200 million</li>
                              <li> redevelopment of Tang Plaza retail, hotel/residential valued at $300 million</li>
                              <li> advising British & Malayan Trustee Limited in the ALLCO-IMF REIT valued at $690 million including office buildings in Perth, Melbourne and Singapore</li>
                              <li> advising on enbloc sales ranging from 18 units to 172 units</li>
                              <li> advising a listed company to acquire a Hotel (land and buildings) in Thailan;</li>
                              <li> acting for both the Manager and Trustee of Cambridge Industrial Trust in acquisitions totalling $80 million</li>
                              <li> acting for Creative Technology Centre Pte Ltd in the disposal of its corporate office valued at $250 million</li>
                              <li> appeared before the Court of Appeal in Lee Tat Development Pte Ltd v MCST No. 301 [2008 SG CA 47]</li>
                          </ul>
                          A landmark decision reversing two earlier Court of Appeal decisions and is considered the leading case on the law of easements and issue estoppel. The asset of the property exceeds $550 million.
                          <br />
                          Outside his involvement in law, Ernest is a Board Member and Hon. Treasurer of St Hilda's Kindergarten. He is also an independent director of Vibropower Corporation Limited. He is also a member of the Audit Committee and Chairman of the Nominating Committee.
                                              </div>
                  </div>
              </div>
              </div>
          <div class="open" id="open9">
              <button class="cross" onClick={showoverlay.bind(null, "9")} >
                  &#215;
                  </button>
              <div class="inner">
                  <div class="position">
                      Serena Kent<br />
                  Director<br />
                  </div>
                  <div class="wrapper">
                      <div class="left">
                          Email: <a href="mailto:serena.kent@ernestbala.com.sg">serena.kent@ernestbala.com.sg</a><br />
                          Tel: <a href="tel:+6563252854">+65 6325 2854</a>
                      </div>
                      <div class="right">
                          Serena graduated from the National University of Singapore with an LLB (Hons) and LL.M and was called to the Singapore Bar in 1988. Prior to joining Arfat Selvam Alliance LLC in 2005, she was Vice President (Legal) at Oversea-Chinese Banking Corporation Limited (OCBC) and also with DBS Bank.
                          <br /><br />

Serena has extensive experience in all types of banking transactions including retail, commercial and private banking sectors. Her areas of practice include commercial leasing, banking and mortgage finance, real estate finance, collective sales and securitization, direct and indirect property acquisitions and regional investments. She also frequently advises major institutional clients in banking matters.
                          </div></div>
                  </div>
          </div>
          <div class="open" id="open10">
              <button class="cross" onClick={showoverlay.bind(null, "10")} >
                  &#215;
                  </button>
              <div class="inner">
                  <div class="position">
                     Kenneth Koh<br />
                  Consultant<br />
                  </div>
                  <div class="wrapper">
                      <div class="left">
                                         Email: <a href="mailto:kenkoh@unilegal.com.sg">kenkoh@unilegal.com.sg</a><br />
                      </div>
                      <div class="right">
                          Kenneth graduated from the National University of Singapore in 1983. He is an Advocate & Solicitor of the Supreme Court of Singapore.
                          <br />
                          <br />

                          He specialises in litigation, arbitration and mediation, with a particular focus on infrastructure, civil engineering and building construction disputes.
                          <br />
                          <br />

                          He also acts for clients in real estate and property financing matters. He was legal advisor to the Singapore Contractors Association and authored the Singapore chapters in 2 international publications:
                          <ul>
                              <li>
                          Transnational Litigation - A Practitioner's Guide by Oceana Publications</li>
<li>The Handbook on Cross-Border Contracting by AIJA</li></ul> </div>
                  </div>

              </div>
          </div>
          <div class="installclass">
              <div class="installone">
                  <img class="installimg" id="l11" height="3024" width="3024" src={eric} alt="portomono installation guide" />

              </div>
              <div class="open" id="open11mob">
                  <div class="inner">
                      <div class="inner11">

                          <div class="position">
                              Eric Low Eng Wan<br />
                  Director<br />
                          </div>
                          <div class="btnmob">
                              <button class="crossmob" onClick={showoverlay.bind(null, "10")} >
                                  &#215;
                  </button>
                          </div>
                      </div>

                      <div class="wrapper">
                          <div class="left">
                              Email: <a href="mailto:eric@unilegal.com.sg">eric@unilegal.com.sg</a>
                          </div>
                          <div class="right">
                              Eric graduated with the degree of LL.B (Hons) from the University of London in 1981. He was awarded the degree of Barrister-at-Law (Gray's Inn) in 1983 and was called to the English Bar that year.
                          <br /><br />
                          He was called to the Singapore Bar in 1984 and commenced private practice in Messrs Wee Swee Teow & Co.
                          <br /><br />
                          From 1986 to 1991, he was in the Singapore Legal Service and held the concurrent appointments of Magistrate, Deputy Registrar of the Subordinate Courts, Coroner, Referee of the Small Claims Tribunal and Assistant Registrar of the Supreme Court.
                          <br /><br />
                          He left Legal Service in 1991 to join Messrs Khattar Wong & Partners and was a litigation partner when he left in September 2000 for other law firms before joining Messrs UniLegal LLC as a Director from March 2003 onwards until he became a Consultant from April 2010.
                          <br /><br />
                          In 1997 Eric attended the International Symposium on Civil and Commercial Law in Osaka, Japan, at which he presented a paper on Bankruptcy Law in the Singapore Legal System as the delegate from Singapore. Delegates from Australia, Malaysia, Thailand, Vietnam, the People's Republic of China, South Korea and Japan represented their respective jurisdictions.
                          <br /><br />
                          In 1994 he was attached for 3 months full time in the office of Messrs Minter Ellison in Sydney, Australia, to observe and learn from their practice.
                          <br /><br />
                          Over the years, Eric has represented parties in a number of significant cases (including several landmark cases) such as:-
                                                      <ul>

                                  <li>Rai Bahadur & Anor v Bank of India [1993] 1 SLR 634, HC : which was the first case to determine the age of majority in Singapore</li>
                                  <li>UCO Bank v Ringler Pte Ltd [1995] 1 SLR 713, CA : which involved the liability of carriers of goods for conversion by releasing goods without a bill of lading but covered by a banker's guarantee</li>
                                  <li>Central Provident Fund Board v Lau Eng Mui [1995] 3 SLR 109, CA : a case of considerable consequences which involved the division of matrimonial assets following divorce where the Court of Appeal decided that an ex-spouse may have an interest in the monies in a member's CPF account and that such interest may be protected by a Court Order</li>
                                  <li>McConnell Dowell Southeast Asia Pte Ltd v Tan Hee Seng Construction Pte Ltd & Ors, unreported, HC : a case involving very complicated facts and issues arising from the construction of a jetty where the disputes centred on marine piling, land surveying and engineering</li>
                                  <li>The Committee of Inquiry into the collapse of Nicoll Highway in 2004, a hearing which was conducted over an aggregate of 88 days - the longest in Singapore's history - wherein Eric acted for one of the sub-contractors who was involved in the project's geotechnical and instrumentation works.</li>
                              </ul>
                          Eric's areas of practice include arbitration, building and construction law, civil and commercial litigation, employment law, hire purchase and leasing, banking, landlord and tenant, insolvency, companies and partnerships.
                   
                          </div>
                      </div>

                  </div>
              </div>
              <div class="installone">
                  <img class="installimg" id="l12" height="3024" width="3024" src={chia} alt="portomono installation guide" />

              </div>
              <div class="open" id="open12mob">
                  <div class="inner">
                      <div class="inner11">

                          <div class="position">
                              Chia Cheok Sien<br />
                  Partner<br />
                          </div>
                          <div class="btnmob">
                              <button class="crossmob" onClick={showoverlay.bind(null, "10")} >
                                  &#215;
                  </button>
                          </div>
                      </div>

                      <div class="wrapper">
                          <div class="left">
                              Email: <a href="mailto:chia@unilegal.com.sg">chia@unilegal.com.sg</a><br />
                          </div>
                          <div class="right">
                              Cheok Sien obtained his degree in Bachelor of Laws (Honours) from the National University of Singapore. He was admitted as an Advocate & Solicitor of the Supreme Court of Singapore in 1984.
                              <br /><br />
With extensive experience in litigation and dispute resolution, in addition to being legal counsel in transactional and corporate work, he is well placed to help you in legal matters.
                              <br /><br />
Besides being in private practice, he headed the legal department of SMIT SINGAPORE, an internationally renowned maritime services company as well as the Singapore Institute of Technology, one of the autonomous universities in Singapore.
                              <br /><br />
His current areas of focus include:
                              <ul><li>Dispute resolution (including civil & commercial litigation)</li>
                                  <li>	Estate & trusts (including wills, probate, succession & wealth planning) matters</li>
                                  <li>	Company & business law</li>
                                  <li>	Insolvency work</li>
                                  <li>	Personal injury & property damage </li>
                                  <li>Real estate transactions & financing</li>
                                  <li>Family & matrimonial matters</li>
                              </ul>
                          </div>
                      </div>

                  </div>
              </div></div>
          <div class="open" id="open11">
              <button class="cross" onClick={showoverlay.bind(null, "11")} >
                  &#215;
                  </button>
              <div class="inner">
                  <div class="position">
                      Eric Low Eng Wan<br />
                  Director<br />
                  </div>
                  <div class="wrapper">
                      <div class="left">
                          Email: <a href="mailto:eric@unilegal.com.sg">eric@unilegal.com.sg</a></div>
                      <div class="right">
                          Eric graduated with the degree of LL.B (Hons) from the University of London in 1981. He was awarded the degree of Barrister-at-Law (Gray's Inn) in 1983 and was called to the English Bar that year.
                          <br /><br />
                          He was called to the Singapore Bar in 1984 and commenced private practice in Messrs Wee Swee Teow & Co.
                          <br /><br />
                          From 1986 to 1991, he was in the Singapore Legal Service and held the concurrent appointments of Magistrate, Deputy Registrar of the Subordinate Courts, Coroner, Referee of the Small Claims Tribunal and Assistant Registrar of the Supreme Court.
                          <br /><br />
                          He left Legal Service in 1991 to join Messrs Khattar Wong & Partners and was a litigation partner when he left in September 2000 for other law firms before joining Messrs UniLegal LLC as a Director from March 2003 onwards until he became a Consultant from April 2010.
                          <br /><br />
                          In 1997 Eric attended the International Symposium on Civil and Commercial Law in Osaka, Japan, at which he presented a paper on Bankruptcy Law in the Singapore Legal System as the delegate from Singapore. Delegates from Australia, Malaysia, Thailand, Vietnam, the People's Republic of China, South Korea and Japan represented their respective jurisdictions.
                          <br /><br />
                          In 1994 he was attached for 3 months full time in the office of Messrs Minter Ellison in Sydney, Australia, to observe and learn from their practice.
                          <br /><br />
                          Over the years, Eric has represented parties in a number of significant cases (including several landmark cases) such as:-
                                                      <ul>

                              <li>Rai Bahadur & Anor v Bank of India [1993] 1 SLR 634, HC : which was the first case to determine the age of majority in Singapore</li>
                              <li>UCO Bank v Ringler Pte Ltd [1995] 1 SLR 713, CA : which involved the liability of carriers of goods for conversion by releasing goods without a bill of lading but covered by a banker's guarantee</li>
                              <li>Central Provident Fund Board v Lau Eng Mui [1995] 3 SLR 109, CA : a case of considerable consequences which involved the division of matrimonial assets following divorce where the Court of Appeal decided that an ex-spouse may have an interest in the monies in a member's CPF account and that such interest may be protected by a Court Order</li>
                              <li>McConnell Dowell Southeast Asia Pte Ltd v Tan Hee Seng Construction Pte Ltd & Ors, unreported, HC : a case involving very complicated facts and issues arising from the construction of a jetty where the disputes centred on marine piling, land surveying and engineering</li>
                              <li>The Committee of Inquiry into the collapse of Nicoll Highway in 2004, a hearing which was conducted over an aggregate of 88 days - the longest in Singapore's history - wherein Eric acted for one of the sub-contractors who was involved in the project's geotechnical and instrumentation works.</li>
                          </ul>
                          Eric's areas of practice include arbitration, building and construction law, civil and commercial litigation, employment law, hire purchase and leasing, banking, landlord and tenant, insolvency, companies and partnerships.
                          </div>
                  </div>

              </div>
          </div>
          <div class="open" id="open12">
              <button class="cross" onClick={showoverlay.bind(null, "12")} >
                  &#215;
                  </button>
              <div class="inner">
                  <div class="position">
                      Chia Cheok Sien<br />
                  Partner<br />
                  </div>
                  <div class="wrapper">
                      <div class="left">
                          Email: <a href="mailto:chia@unilegal.com.sg">chia@unilegal.com.sg</a><br />
                      </div>
                      <div class="right">
                          Cheok Sien obtained his degree in Bachelor of Laws (Honours) from the National University of Singapore. He was admitted as an Advocate & Solicitor of the Supreme Court of Singapore in 1984.
                              <br /><br />
With extensive experience in litigation and dispute resolution, in addition to being legal counsel in transactional and corporate work, he is well placed to help you in legal matters.
                              <br /><br />
Besides being in private practice, he headed the legal department of SMIT SINGAPORE, an internationally renowned maritime services company as well as the Singapore Institute of Technology, one of the autonomous universities in Singapore.
                              <br /><br />
His current areas of focus include:
                              <ul><li>Dispute resolution (including civil & commercial litigation)</li>
                              <li>	Estate & trusts (including wills, probate, succession & wealth planning) matters</li>
                              <li>	Company & business law</li>
                              <li>	Insolvency work</li>
                              <li>	Personal injury & property damage </li>
                              <li>Real estate transactions & financing</li>
                              <li>Family & matrimonial matters</li>
                          </ul>
                      </div>
                  </div>

              </div>
          </div>
    </Layout>
  )
}

export default warrantyRequestPage
