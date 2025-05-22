import React, { useRef } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBScrollspy,
  MDBScrollspyLink,
  MDBScrollspySubList,
} from "mdb-react-ui-kit";

export default function SpyScrollComponent() {
  const collapseSection1 = useRef(null);
  const collapseSection2 = useRef(null);
  const collapseSection3 = useRef(null);
  const collapseSection4 = useRef(null);
  const collapseSectionA = useRef(null);
  const collapseSectionB = useRef(null);

  const collapseContainerRef = useRef(null);

  const collapseSubsections = [collapseSectionA, collapseSectionB];

  return (
    <div className="spy-scroll" id="spy-scroll">
      <br />
      <div className="w3-center w3-margin-top">
        <h1 className="">SCROLL SPY EXAMPLE</h1>
        <p className="">Scroll spy example with content <span><i>content coming soon!</i></span></p>
      </div>
      <MDBContainer className="shadow bg-white text-black">
        <MDBRow className="row d-flex border-top">
          <MDBCol
            md="4"
            className="w3-padding-16 justify-content-center align-items-center "
          >
            <MDBScrollspy
              container={collapseContainerRef}
              className=" p-4 "
            >
              <MDBScrollspyLink
                targetRef={collapseSection1}
                className="py-2 "
                style={{ fontSize: "1rem" }}
              >
                01.Database
              </MDBScrollspyLink>

              <MDBScrollspySubList
                className="ps-3 "
                collapsible={collapseSubsections}
              >
                <MDBScrollspyLink
                  targetRef={collapseSectionA}
                  className="py-2 "
                  style={{ fontSize: "1rem" }}
                >
                  SubA.
                </MDBScrollspyLink>
                <MDBScrollspyLink
                  targetRef={collapseSectionB}
                  className="py-2 "
                  style={{ fontSize: "1rem" }}
                >
                  Subsection B.
                </MDBScrollspyLink>
              </MDBScrollspySubList>

              <MDBScrollspyLink
                targetRef={collapseSection2}
                className="py-2 "
                style={{ fontSize: "1rem" }}
              >
                02.Authenticated
              </MDBScrollspyLink>
              <MDBScrollspySubList
                className="ps-3 "
                collapsible={collapseSubsections}
              >
                <MDBScrollspyLink
                  targetRef={collapseSectionA}
                  className="py-2 "
                  style={{ fontSize: "1rem" }}
                >
                  SubA.
                </MDBScrollspyLink>
                <MDBScrollspyLink
                  targetRef={collapseSectionB}
                  className="py-2 "
                  style={{ fontSize: "1rem" }}
                >
                  Subsection B.
                </MDBScrollspyLink>
              </MDBScrollspySubList>
              <MDBScrollspyLink
                collapsible
                subsections={collapseSubsections}
                targetRef={collapseSection3}
                className="py-2 "
                style={{ fontSize: "1rem" }}
              >
                03.
              </MDBScrollspyLink>
              <MDBScrollspySubList
                className="ps-3 "
                collapsible={collapseSubsections}
              >
                <MDBScrollspyLink
                  targetRef={collapseSectionA}
                  className="py-2 "
                  style={{ fontSize: "1rem" }}
                >
                  SubA.
                </MDBScrollspyLink>
                <MDBScrollspyLink
                  targetRef={collapseSectionB}
                  className="py-2 "
                  style={{ fontSize: "1rem" }}
                >
                  Subsection B.
                </MDBScrollspyLink>
              </MDBScrollspySubList>
              <MDBScrollspyLink
                targetRef={collapseSection4}
                className="py-2 "
                style={{ fontSize: "1rem" }}
              >
                Section 04.
              </MDBScrollspyLink>
            </MDBScrollspy>
          </MDBCol>

          <MDBCol md="8" className="w3-padding-16">
            <div
              id="collapse"
              ref={collapseContainerRef}
              className="scrollspy-example"
              style={{
                height: "500px",
                overflowY: "auto",
                borderLeft: "5px solid lightGray",
              }}
            >
              <div className="container p-4">
                <section ref={collapseSection1} id="section-collapse-1 ">
                  <h3>01.Intro</h3>
                  <h3 style={{ fontFamily: "belotta text" }}>
                    <b>DATABASE & AUTH SERVICES</b>
                  </h3>
                  <p>
                    <u>
                      THE BENEFITS & IMPACT OF DATABASE INTEGRATION &
                      AUTHORIZATION SERVICES
                    </u>
                  </p>
                  <br></br>
                  <p>
                    "How To Turn A Visual Site Into One That Actually works on
                    your behalf..."
                  </p>
                  <h5>DEFINING A WELL DEVELOPED WEBSITE</h5>
                  <p>
                    In the business world, the heartbeat of success resonates
                    with productivity, and at its very core lies the
                    indispensable concept of <b>efficiency</b>.<br></br>
                    <b>Efficiency</b> -
                    <i>"making the most of our time & resources"</i> , is
                    crucial in any type of success, right? A website is no
                    different- An{" "}
                    <i>
                      efficient” site will allow you to “make the most of your
                      time & resources
                    </i>
                    ”. A well developed website will quite literally replace
                    administrative need, eliminate repetition, keep you
                    organized, conduct analysis, and generate “passive income”.
                  </p>
                  <br></br>
                  <p>
                    Sound too good to be true? <b>IT'S NOT</b>!{" "}
                  </p>
                  <br></br>
                  <div className="bg-secondary-subtle p-3 text-center">
                    <p className="mb-1">
                      Continue reading to discover more, or reach out to us by
                      visiting our <a href="/contact">contact</a> page to
                      connect with a skilled and knowledgeable designer who can
                      offer a personalized experience tailored to your
                      individual needs and preferences."{" "}
                    </p>
                  </div>
                  <br></br>
                  <br></br>
                  <p>
                    "Two Foundational Components Needed To Maximize
                    Efficiency..."
                  </p>
                  <h5>DATABASE & AUTH SERVICES WORKING TOGETHER</h5>
                  <p>
                    Database and Authentication (auth) services work together,
                    and are the most important components to incorporate when
                    developing an efficient website or web application. Playing
                    a foundational role in ensuring security, organization, and
                    reliability of your site, and extention of your business.{" "}
                  </p>
                </section>
                <section ref={collapseSection2} id="section-collapse-2">
                  <h3>02. Auth</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore earum natus vel minima quod error maxime, molestias
                    ut. Fuga dignissimos nisi nemo necessitatibus quisquam
                    obcaecati et reiciendis quaerat accusamus numquam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore earum natus vel minima quod error maxime, molestias
                    ut. Fuga dignissimos nisi nemo necessitatibus quisquam
                    obcaecati et reiciendis quaerat accusamus numquam.
                  </p>
                </section>
                <section ref={collapseSection3} id="section-collapse-3">
                  <h3>Section 03.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore earum natus vel minima quod error maxime, molestias
                    ut. Fuga dignissimos nisi nemo necessitatibus quisquam
                    obcaecati et reiciendis quaerat accusamus numquam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore earum natus vel minima quod error maxime, molestias
                    ut. Fuga dignissimos nisi nemo necessitatibus quisquam
                    obcaecati et reiciendis quaerat accusamus numquam.
                  </p>
                  <section ref={collapseSectionA} id="subsection-collapse-a">
                    <h3>Subsection A.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Labore earum natus vel minima quod error maxime, molestias
                      ut. Fuga dignissimos nisi nemo necessitatibus quisquam
                      obcaecati et reiciendis quaerat accusamus numquam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Labore earum natus vel minima quod error maxime, molestias
                      ut. Fuga dignissimos nisi nemo necessitatibus quisquam
                      obcaecati et reiciendis quaerat accusamus numquam.
                    </p>
                  </section>
                  <section ref={collapseSectionB} id="subsection-collapse-b">
                    <h3>Subsection B.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Labore earum natus vel minima quod error maxime, molestias
                      ut. Fuga dignissimos nisi nemo necessitatibus quisquam
                      obcaecati et reiciendis quaerat accusamus numquam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Labore earum natus vel minima quod error maxime, molestias
                      ut. Fuga dignissimos nisi nemo necessitatibus quisquam
                      obcaecati et reiciendis quaerat accusamus numquam.
                    </p>
                  </section>
                </section>
                <section ref={collapseSection4} id="section-collapse-4">
                  <h3>Section 04.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore earum natus vel minima quod error maxime, molestias
                    ut. Fuga dignissimos nisi nemo necessitatibus quisquam
                    obcaecati et reiciendis quaerat accusamus numquam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore earum natus vel minima quod error maxime, molestias
                    ut. Fuga dignissimos nisi nemo necessitatibus quisquam
                    obcaecati et reiciendis quaerat accusamus numquam.
                  </p>
                </section>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
