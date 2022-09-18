import React from 'react';
import Layout from '../sections/Layout';
import { Col, Row } from 'antd';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Box from '../sections/modules/Box';
import SearchingBox from '../sections/modules/SearchingBox';
import Tags from '../sections/modules/Tags';
import 'react-tabs/style/react-tabs.css';
import './Detail.scss';

function Detail() {
   return (
      <Layout>
         <Row justify="center">
            <Col span={10}>
               <div className="detailSearchBar">
                  <SearchingBox />
               </div>
            </Col>
         </Row>

         {/* Sections */}
         <Row justify="center">
            <Col span={19}>
               <div className="detailPage">
                  <Row>
                     {/* Left Side */}
                     <Col span={16}>
                        <Box />

                        <div className="domainRegister">
                           <h2>Domain Registrar</h2>
                           <a href="https://godaddy.com">Godaddy</a>
                        </div>

                        <div className="whois">
                           <h2>Who is</h2>
                           <Tabs>
                              <TabList>
                                 <Tab>Domain Information</Tab>
                                 <Tab>Registrant Contact</Tab>
                                 <Tab>Administrative Contact</Tab>
                                 <Tab>Administrative Contact</Tab>
                              </TabList>

                              <TabPanel>
                                 <div className="tabpanelStyle">
                                    <Row>
                                       <Col span={6}>Domain:</Col>
                                       <Col span={18}>adobe.com</Col>
                                    </Row>
                                 </div>
                                 <div className="tabpanelStyle">
                                    <Row>
                                       <Col span={6}>Registrar:</Col>
                                       <Col span={18}>
                                          Nom-iq Ltd. dba COM LAUDE
                                       </Col>
                                    </Row>
                                 </div>
                                 <div className="tabpanelStyle">
                                    <Row>
                                       <Col span={6}>Registered On:</Col>
                                       <Col span={18}>1986-11-17</Col>
                                    </Row>
                                 </div>
                                 <div className="tabpanelStyle">
                                    <Row>
                                       <Col span={6}>Expires On:</Col>
                                       <Col span={18}>2022-05-17</Col>
                                    </Row>
                                 </div>
                                 <div className="tabpanelStyle">
                                    <Row>
                                       <Col span={6}>Updated On:</Col>
                                       <Col span={18}>2021-04-17</Col>
                                    </Row>
                                 </div>
                                 <div className="tabpanelStyle">
                                    <Row>
                                       <Col span={6}>Status:</Col>
                                       <Col span={18}>
                                          clientUpdateProhibited
                                          <br />
                                          serverDeleteProhibited
                                          <br />
                                          serverTransferProhibited
                                          <br />
                                          serverUpdateProhibited
                                       </Col>
                                    </Row>
                                 </div>
                                 <div className="tabpanelStyle">
                                    <Row>
                                       <Col span={6}>Name Servers:</Col>
                                       <Col span={18}>
                                          a1-217.akam.net <br />
                                          a10-64.akam.net
                                          <br />
                                          a13-65.akam.net
                                          <br />
                                          a26-66.akam.net
                                          <br />
                                          a28-67.akam.net
                                          <br />
                                          a7-64.akam.net
                                          <br />
                                          adobe-dns-01.adobe.com
                                          <br />
                                          adobe-dns-03.adobe.com
                                          <br />
                                          adobe-dns-04.adobe.com
                                          <br />
                                          adobe-dns-05.adobe.com
                                       </Col>
                                    </Row>
                                 </div>
                              </TabPanel>
                           </Tabs>
                        </div>
                     </Col>

                     {/* Right Side */}
                     <Col span={7} offset={1}>
                        <div className="tagsBox">
                           <h2>Tags</h2>
                           <Tags />
                        </div>

                        <div className="tagsBox">
                           <h2>Company Sectors</h2>
                           <Tags />
                        </div>

                        <div className="tagsBox">
                           <h2>Colors</h2>
                           <Tags />
                        </div>
                     </Col>
                  </Row>
               </div>
            </Col>
         </Row>

         {/* Similar */}
         <Row justify="center">
            <Col span={19}>
               <div className="similar">
                  <h2>Similar content</h2>

                  <Row>
                     <Col span={7}>
                        <Box />
                     </Col>
                     <Col span={7} offset={1}>
                        <Box />
                     </Col>
                     <Col span={7} offset={1}>
                        <Box />
                     </Col>
                  </Row>
               </div>
            </Col>
         </Row>
      </Layout>
   );
}

export default Detail;
