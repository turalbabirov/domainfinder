import React from "react";
import { Col, Row } from "antd";
import { Images } from "../../../assets/pictures/Images.js";
import "./DomainDescription.scss";

function DomainDescription() {
   return (
      <Row justify="center">
         <Col span={19}>
            <Row className="domainDescription">
               <Col span={13} className="description">
                  <div>
                     <h2>
                        Use Domain Finder to find <br /> unique domains!
                     </h2>
                     <span>
                        Millions of people are searching for companies, domains,
                        meta tags, company names and etc., on Domain finder. Try
                        today! <b>1 000 000</b> data for your search.
                     </span>
                  </div>

                  {/* 1-2-3 */}
                  <div>
                     <div>
                        <span className="numb">1</span>
                        <span>Type to search</span>
                     </div>
                     <div>
                        <span className="numb">2</span>
                        <span>Find domains</span>
                     </div>
                     <div>
                        <span className="numb">3</span>
                        <span>Filter them</span>
                     </div>
                  </div>
               </Col>

               <Col className="picture" offset={2} span={8}>
                  <img src={Images.Girl} alt="" />
               </Col>
            </Row>
         </Col>
      </Row>
   );
}

export default DomainDescription;
