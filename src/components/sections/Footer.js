import { Col, Row, Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../assets/pictures/Images.js";
import "./Footer.scss";

function Footer() {
   return (
      <Row>
         <Divider />

         <Col span={24}>
            <Row justify="center">
               <Col span={19}>
                  <Row className="footer">
                     {/* Social */}
                     <Col span={20}>
                        <Row>
                           <Col className="social" span={3}>
                              <div>
                                 <Link to="https://www.twitter.com/">
                                    <img src={Images.TwitterLogo} alt="" />
                                 </Link>
                              </div>
                              <div>
                                 <Link to="https://www.facebook.com/">
                                    <img src={Images.FacebookLogo} alt="" />
                                 </Link>
                              </div>
                              <div>
                                 <Link to="https://www.linkedin.com/">
                                    <img src={Images.LinkedinLogo} alt="" />
                                 </Link>
                              </div>
                           </Col>

                           <Col span={9}>
                              <Link to="#">Terms of Service</Link>
                              <Link to="#">Privacy Policy</Link>
                              <Link to="#">Trust &amp; Safety</Link>
                           </Col>
                        </Row>
                     </Col>

                     {/* Language Bar */}
                     <Col span={4} className="languagebar">
                        <div>
                           <span>Language: </span>
                           <select>
                              <option value="EN">EN</option>
                              <option value="AZ">AZ</option>
                              <option value="RU">RU</option>
                           </select>
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Col>
      </Row>
   );
}

export default Footer;
