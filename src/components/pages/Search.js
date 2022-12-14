import React, { useState } from 'react';
import Layout from '../sections/Layout';
import { Col, Row, Divider } from 'antd';
import { MultiSelect } from 'react-multi-select-component';
import { Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Box from '../sections/modules/Box';
import SearchingBox from '../sections/modules/SearchingBox';
import './Search.scss';

const options = [
   { label: 'Administrative', value: 'administrative' },
   { label: 'Art & Design', value: 'artDesign' },
   { label: 'Business', value: 'business' },
   { label: 'Consulting', value: 'consulting' },
   { label: 'Customer Services & Support', value: 'customerServicesSupport' },
];

const menu = (
   <Menu
      items={[
         {
            label: (
               <span>
                  Only domain <input type="checkbox" />
               </span>
            ),
            key: '0',
         },
         {
            label: (
               <span>
                  Other options <input type="checkbox" />
               </span>
            ),
            key: '1',
         },
      ]}
   />
);

const DomainFinder = () => {
   const [selected, setSelected] = useState([]);

   return (
      <Layout>
         <Row justify="center">
            <Col span={19}>
               <div className="shadowbox">
                  <SearchingBox />
               </div>
            </Col>
         </Row>

         {/* Body */}
         <Row justify="center">
            <Col span={19}>
               <div className="searchPage">
                  <Row>
                     {/* Filters */}
                     <Col span={6}>
                        <div className="filters">
                           Filters:
                           <div className="multiselect">
                              <span>Company Sectors</span>
                              <MultiSelect
                                 options={options}
                                 value={selected}
                                 onChange={setSelected}
                              />
                           </div>
                           <Divider />
                           <div className="multiselect">
                              <span>Country</span>
                              <MultiSelect
                                 options={options}
                                 value={selected}
                                 onChange={setSelected}
                              />
                           </div>
                           <Divider />
                           <div className="multiselect">
                              <span>Metatags</span>
                              <MultiSelect
                                 options={options}
                                 value={selected}
                                 onChange={setSelected}
                              />
                           </div>
                           <Divider />
                           <div className="multiselect">
                              <span>Alexa Points</span>
                              <MultiSelect
                                 options={options}
                                 value={selected}
                                 onChange={setSelected}
                              />
                           </div>
                           <Divider />
                           <div className="multiselect">
                              <span>Colors</span>
                              <MultiSelect
                                 options={options}
                                 value={selected}
                                 onChange={setSelected}
                              />
                           </div>
                           <Divider />
                        </div>
                     </Col>

                     {/* Showing */}
                     <Col span={17} offset={1}>
                        <div className="showing">
                           <div>
                              <span>Showing: 599 filtered domains</span>
                              <div>
                                 <span>Sort by:</span>
                                 <div>
                                    <Dropdown
                                       overlay={menu}
                                       trigger={['click']}
                                    >
                                       <a
                                          href="htt"
                                          onClick={(e) => e.preventDefault()}
                                       >
                                          <Space>
                                             <b
                                                style={{
                                                   textDecoration: 'underline',
                                                }}
                                             >
                                                Relevance
                                             </b>
                                             <DownOutlined />
                                          </Space>
                                       </a>
                                    </Dropdown>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Box */}
                        <div className="boxes">
                           <Box />
                        </div>

                        {/* Box */}
                        <div className="boxes">
                           <Box />
                        </div>
                     </Col>
                  </Row>
               </div>
            </Col>
         </Row>
      </Layout>
   );
};

export default DomainFinder;
