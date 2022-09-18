import React from 'react';
import { Col, Row, Divider } from 'antd';
import Tags from './Tags';
import { Images } from '../../../assets/pictures/Images.js';
import './Box.scss';

function Box() {
   return (
      <a href="/detail">
         <div className="filteredDomains">
            <div>
               <Row>
                  <Col span={23} offset={1}>
                     <div className="domainRank">
                        {/* Domain Name, Logo..: */}
                        <div className="domain">
                           <div>
                              <img src={Images.AdobeReader} alt="" />
                              <span>Adobe</span>
                           </div>
                           <div>
                              <a href="https://www.adobe.com/">
                                 https://www.adobe.com
                              </a>
                           </div>
                        </div>

                        {/* Alexa Rank */}
                        <div className="alexarank">
                           <div>
                              <img src={Images.Alexa} alt="" />
                           </div>
                           <div>
                              <div className="scor">3.5</div>
                              <div>Local rating</div>
                           </div>
                           <div>
                              <div className="scor">5.0</div>
                              <div>Global rating</div>
                           </div>
                        </div>
                     </div>

                     <Divider />

                     {/* Domain tags etc.... */}
                     <div className="domandescript">
                        <div>
                           <h2>
                              Adobe: Creative, marketing and document
                              management...
                           </h2>
                           <p>
                              Adobe is changing the world through digital
                              expreiences. We help our customers create, deliver
                              and optimize content and applications.
                           </p>
                        </div>
                        <div>
                           <Tags />
                        </div>
                     </div>
                  </Col>
               </Row>
            </div>
         </div>
      </a>
   );
}

export default Box;
