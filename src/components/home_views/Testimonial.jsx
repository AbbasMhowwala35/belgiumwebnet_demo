import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Col, Container, Row } from "react-bootstrap";
export const Testimonial = () => {
  return (
    <div className="bj_testimonial">
      <Container className="custom-container">
        <Row>
          <Col md={12} className="mb-3">
            <div className="justify-content-center text-center mt-50 mt-4">
              <h1 className="text-center text-uppercase">WHAT PEOPLE SAY</h1>
              <img
                src="https://baladna.belgiumwebnet.com/assets/images/line.svg"
                class="line-black"
                alt="line-black"
              ></img>
            </div>
          </Col>
          <Col md={4}>
              <div class="test_item text-center">
                <div class="goog_reviews address_heading">
                  <h2>Chicago IL Store</h2>
                  <a href="#" target="_blank">
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/google-reviews.jpg"
                      alt="goog-reviews"
                    ></img>
                  </a>
                </div>
                <OwlCarousel className="owl-theme" items={1} loop>
                <div class="item-testimo2 text-center">
                  <p class="desc">
                    I had such an amazing experience at this shop. It made me
                    feel in some arabic country with the ambiance and jewelry
                    variety. The owner was very nice and sweet.{" "}
                    <a
                      href="https://www.google.com/search?q=baladna%20jewelry&amp;oq=baladna&amp;aqs=chrome.2.69i57j46i199i465i512j35i39j69i61j69i60l4.9737j0j7&amp;sourceid=chrome&amp;ie=UTF-8&amp;tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10&amp;tbm=lcl&amp;sxsrf=AOaemvL07EiodLu6hoMoxdBy-naAwQlL9w:1639685465128&amp;rflfq=1&amp;num=10&amp;rldimm=4962127784443052624&amp;lqi=Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA&amp;phdesc=k37oRBp6WEc&amp;ved=2ahUKEwiQxcStkOn0AhW9w4sBHQEfAg0QvS56BAgEEDg&amp;rlst=f#lrd=0x880fcde4c32c3c71:0x44dd04edf1d30250,1,,,&amp;rlfi=hd:;si:4962127784443052624,l,Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA,y,k37oRBp6WEc;mv:[[42.0146739,-87.7063153],[41.9669222,-87.7389469]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10"
                      target="_blank"
                      class="review_read_more"
                    >
                      Read more...
                    </a>
                  </p>
                  <ul class="reviews_icon">
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                  </ul>
                  <h3 class="title18">
                    <a href="#" class="txt-black">
                      Narmin Nasirzada
                    </a>
                  </h3>
                </div>
                <div class="item-testimo2 text-center">
                  <p class="desc">
                    I had such an amazing experience at this shop. It made me
                    feel in some arabic country with the ambiance and jewelry
                    variety. The owner was very nice and sweet.{" "}
                    <a
                      href="https://www.google.com/search?q=baladna%20jewelry&amp;oq=baladna&amp;aqs=chrome.2.69i57j46i199i465i512j35i39j69i61j69i60l4.9737j0j7&amp;sourceid=chrome&amp;ie=UTF-8&amp;tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10&amp;tbm=lcl&amp;sxsrf=AOaemvL07EiodLu6hoMoxdBy-naAwQlL9w:1639685465128&amp;rflfq=1&amp;num=10&amp;rldimm=4962127784443052624&amp;lqi=Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA&amp;phdesc=k37oRBp6WEc&amp;ved=2ahUKEwiQxcStkOn0AhW9w4sBHQEfAg0QvS56BAgEEDg&amp;rlst=f#lrd=0x880fcde4c32c3c71:0x44dd04edf1d30250,1,,,&amp;rlfi=hd:;si:4962127784443052624,l,Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA,y,k37oRBp6WEc;mv:[[42.0146739,-87.7063153],[41.9669222,-87.7389469]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10"
                      target="_blank"
                      class="review_read_more"
                    >
                      Read more...
                    </a>
                  </p>
                  <ul class="reviews_icon">
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                  </ul>
                  <h3 class="title18">
                    <a href="#" class="txt-black">
                      John
                    </a>
                  </h3>
                </div>
                <div class="item-testimo2 text-center">
                  <p class="desc">
                    I had such an amazing experience at this shop. It made me
                    feel in some arabic country with the ambiance and jewelry
                    variety. The owner was very nice and sweet.{" "}
                    <a
                      href="https://www.google.com/search?q=baladna%20jewelry&amp;oq=baladna&amp;aqs=chrome.2.69i57j46i199i465i512j35i39j69i61j69i60l4.9737j0j7&amp;sourceid=chrome&amp;ie=UTF-8&amp;tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10&amp;tbm=lcl&amp;sxsrf=AOaemvL07EiodLu6hoMoxdBy-naAwQlL9w:1639685465128&amp;rflfq=1&amp;num=10&amp;rldimm=4962127784443052624&amp;lqi=Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA&amp;phdesc=k37oRBp6WEc&amp;ved=2ahUKEwiQxcStkOn0AhW9w4sBHQEfAg0QvS56BAgEEDg&amp;rlst=f#lrd=0x880fcde4c32c3c71:0x44dd04edf1d30250,1,,,&amp;rlfi=hd:;si:4962127784443052624,l,Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA,y,k37oRBp6WEc;mv:[[42.0146739,-87.7063153],[41.9669222,-87.7389469]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10"
                      target="_blank"
                      class="review_read_more"
                    >
                      Read more...
                    </a>
                  </p>
                  <ul class="reviews_icon">
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                  </ul>
                  <h3 class="title18">
                    <a href="#" class="txt-black">
                      Abbas Mhowwala
                    </a>
                  </h3>
                </div>
                </OwlCarousel>                
              </div>
          </Col>
          <Col md={4}>
          <div class="test_item text-center">
                <div class="goog_reviews address_heading">
                  <h2>Chicago IL Store</h2>
                  <a href="#" target="_blank">
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/google-reviews.jpg"
                      alt="goog-reviews"
                    ></img>
                  </a>
                </div>
                <OwlCarousel className="owl-theme" items={1} loop>
                <div class="item-testimo2 text-center">
                  <p class="desc">
                    I had such an amazing experience at this shop. It made me
                    feel in some arabic country with the ambiance and jewelry
                    variety. The owner was very nice and sweet.{" "}
                    <a
                      href="https://www.google.com/search?q=baladna%20jewelry&amp;oq=baladna&amp;aqs=chrome.2.69i57j46i199i465i512j35i39j69i61j69i60l4.9737j0j7&amp;sourceid=chrome&amp;ie=UTF-8&amp;tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10&amp;tbm=lcl&amp;sxsrf=AOaemvL07EiodLu6hoMoxdBy-naAwQlL9w:1639685465128&amp;rflfq=1&amp;num=10&amp;rldimm=4962127784443052624&amp;lqi=Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA&amp;phdesc=k37oRBp6WEc&amp;ved=2ahUKEwiQxcStkOn0AhW9w4sBHQEfAg0QvS56BAgEEDg&amp;rlst=f#lrd=0x880fcde4c32c3c71:0x44dd04edf1d30250,1,,,&amp;rlfi=hd:;si:4962127784443052624,l,Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA,y,k37oRBp6WEc;mv:[[42.0146739,-87.7063153],[41.9669222,-87.7389469]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10"
                      target="_blank"
                      class="review_read_more"
                    >
                      Read more...
                    </a>
                  </p>
                  <ul class="reviews_icon">
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                  </ul>
                  <h3 class="title18">
                    <a href="#" class="txt-black">
                      Narmin Nasirzada
                    </a>
                  </h3>
                </div>
                <div class="item-testimo2 text-center">
                  <p class="desc">
                    I had such an amazing experience at this shop. It made me
                    feel in some arabic country with the ambiance and jewelry
                    variety. The owner was very nice and sweet.{" "}
                    <a
                      href="https://www.google.com/search?q=baladna%20jewelry&amp;oq=baladna&amp;aqs=chrome.2.69i57j46i199i465i512j35i39j69i61j69i60l4.9737j0j7&amp;sourceid=chrome&amp;ie=UTF-8&amp;tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10&amp;tbm=lcl&amp;sxsrf=AOaemvL07EiodLu6hoMoxdBy-naAwQlL9w:1639685465128&amp;rflfq=1&amp;num=10&amp;rldimm=4962127784443052624&amp;lqi=Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA&amp;phdesc=k37oRBp6WEc&amp;ved=2ahUKEwiQxcStkOn0AhW9w4sBHQEfAg0QvS56BAgEEDg&amp;rlst=f#lrd=0x880fcde4c32c3c71:0x44dd04edf1d30250,1,,,&amp;rlfi=hd:;si:4962127784443052624,l,Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA,y,k37oRBp6WEc;mv:[[42.0146739,-87.7063153],[41.9669222,-87.7389469]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10"
                      target="_blank"
                      class="review_read_more"
                    >
                      Read more...
                    </a>
                  </p>
                  <ul class="reviews_icon">
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                  </ul>
                  <h3 class="title18">
                    <a href="#" class="txt-black">
                      John
                    </a>
                  </h3>
                </div>
                <div class="item-testimo2 text-center">
                  <p class="desc">
                    I had such an amazing experience at this shop. It made me
                    feel in some arabic country with the ambiance and jewelry
                    variety. The owner was very nice and sweet.{" "}
                    <a
                      href="https://www.google.com/search?q=baladna%20jewelry&amp;oq=baladna&amp;aqs=chrome.2.69i57j46i199i465i512j35i39j69i61j69i60l4.9737j0j7&amp;sourceid=chrome&amp;ie=UTF-8&amp;tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10&amp;tbm=lcl&amp;sxsrf=AOaemvL07EiodLu6hoMoxdBy-naAwQlL9w:1639685465128&amp;rflfq=1&amp;num=10&amp;rldimm=4962127784443052624&amp;lqi=Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA&amp;phdesc=k37oRBp6WEc&amp;ved=2ahUKEwiQxcStkOn0AhW9w4sBHQEfAg0QvS56BAgEEDg&amp;rlst=f#lrd=0x880fcde4c32c3c71:0x44dd04edf1d30250,1,,,&amp;rlfi=hd:;si:4962127784443052624,l,Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA,y,k37oRBp6WEc;mv:[[42.0146739,-87.7063153],[41.9669222,-87.7389469]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10"
                      target="_blank"
                      class="review_read_more"
                    >
                      Read more...
                    </a>
                  </p>
                  <ul class="reviews_icon">
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                  </ul>
                  <h3 class="title18">
                    <a href="#" class="txt-black">
                      Abbas Mhowwala
                    </a>
                  </h3>
                </div>
                </OwlCarousel>                
              </div>
          </Col>
          <Col md={4}>
          <div class="test_item text-center">
                <div class="goog_reviews address_heading">
                  <h2>Chicago IL Store</h2>
                  <a href="#" target="_blank">
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/yelp-reviews.jpg"
                      alt="goog-reviews"
                    ></img>
                  </a>
                </div>
                <OwlCarousel className="owl-theme" items={1} loop>
                <div class="item-testimo2 text-center">
                  <p class="desc">
                    I had such an amazing experience at this shop. It made me
                    feel in some arabic country with the ambiance and jewelry
                    variety. The owner was very nice and sweet.{" "}
                    <a
                      href="https://www.google.com/search?q=baladna%20jewelry&amp;oq=baladna&amp;aqs=chrome.2.69i57j46i199i465i512j35i39j69i61j69i60l4.9737j0j7&amp;sourceid=chrome&amp;ie=UTF-8&amp;tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10&amp;tbm=lcl&amp;sxsrf=AOaemvL07EiodLu6hoMoxdBy-naAwQlL9w:1639685465128&amp;rflfq=1&amp;num=10&amp;rldimm=4962127784443052624&amp;lqi=Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA&amp;phdesc=k37oRBp6WEc&amp;ved=2ahUKEwiQxcStkOn0AhW9w4sBHQEfAg0QvS56BAgEEDg&amp;rlst=f#lrd=0x880fcde4c32c3c71:0x44dd04edf1d30250,1,,,&amp;rlfi=hd:;si:4962127784443052624,l,Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA,y,k37oRBp6WEc;mv:[[42.0146739,-87.7063153],[41.9669222,-87.7389469]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10"
                      target="_blank"
                      class="review_read_more"
                    >
                      Read more...
                    </a>
                  </p>
                  <ul class="reviews_icon">
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                  </ul>
                  <h3 class="title18">
                    <a href="#" class="txt-black">
                      Narmin Nasirzada
                    </a>
                  </h3>
                </div>
                <div class="item-testimo2 text-center">
                  <p class="desc">
                    I had such an amazing experience at this shop. It made me
                    feel in some arabic country with the ambiance and jewelry
                    variety. The owner was very nice and sweet.{" "}
                    <a
                      href="https://www.google.com/search?q=baladna%20jewelry&amp;oq=baladna&amp;aqs=chrome.2.69i57j46i199i465i512j35i39j69i61j69i60l4.9737j0j7&amp;sourceid=chrome&amp;ie=UTF-8&amp;tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10&amp;tbm=lcl&amp;sxsrf=AOaemvL07EiodLu6hoMoxdBy-naAwQlL9w:1639685465128&amp;rflfq=1&amp;num=10&amp;rldimm=4962127784443052624&amp;lqi=Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA&amp;phdesc=k37oRBp6WEc&amp;ved=2ahUKEwiQxcStkOn0AhW9w4sBHQEfAg0QvS56BAgEEDg&amp;rlst=f#lrd=0x880fcde4c32c3c71:0x44dd04edf1d30250,1,,,&amp;rlfi=hd:;si:4962127784443052624,l,Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA,y,k37oRBp6WEc;mv:[[42.0146739,-87.7063153],[41.9669222,-87.7389469]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10"
                      target="_blank"
                      class="review_read_more"
                    >
                      Read more...
                    </a>
                  </p>
                  <ul class="reviews_icon">
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                  </ul>
                  <h3 class="title18">
                    <a href="#" class="txt-black">
                      John
                    </a>
                  </h3>
                </div>
                <div class="item-testimo2 text-center">
                  <p class="desc">
                    I had such an amazing experience at this shop. It made me
                    feel in some arabic country with the ambiance and jewelry
                    variety. The owner was very nice and sweet.{" "}
                    <a
                      href="https://www.google.com/search?q=baladna%20jewelry&amp;oq=baladna&amp;aqs=chrome.2.69i57j46i199i465i512j35i39j69i61j69i60l4.9737j0j7&amp;sourceid=chrome&amp;ie=UTF-8&amp;tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10&amp;tbm=lcl&amp;sxsrf=AOaemvL07EiodLu6hoMoxdBy-naAwQlL9w:1639685465128&amp;rflfq=1&amp;num=10&amp;rldimm=4962127784443052624&amp;lqi=Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA&amp;phdesc=k37oRBp6WEc&amp;ved=2ahUKEwiQxcStkOn0AhW9w4sBHQEfAg0QvS56BAgEEDg&amp;rlst=f#lrd=0x880fcde4c32c3c71:0x44dd04edf1d30250,1,,,&amp;rlfi=hd:;si:4962127784443052624,l,Cg9iYWxhZG5hIGpld2VscnlIh-378-WAgIAIWhkQABABGAAYASIPYmFsYWRuYSBqZXdlbHJ5kgENamV3ZWxyeV9zdG9yZaoBFxABKhMiD2JhbGFkbmEgamV3ZWxyeSgA,y,k37oRBp6WEc;mv:[[42.0146739,-87.7063153],[41.9669222,-87.7389469]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10"
                      target="_blank"
                      class="review_read_more"
                    >
                      Read more...
                    </a>
                  </p>
                  <ul class="reviews_icon">
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>                      
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                    <li>
                      <img
                        src="https://baladna.belgiumwebnet.com/assets/images/str.svg"
                        alt="Star Rating"
                      ></img>
                    </li>
                  </ul>
                  <h3 class="title18">
                    <a href="#" class="txt-black">
                      Abbas Mhowwala
                    </a>
                  </h3>
                </div>
                </OwlCarousel>                
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
