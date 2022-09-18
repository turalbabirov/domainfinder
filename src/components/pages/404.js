import React from 'react';
import Layout from '../sections/Layout';
import { Col, Row } from 'antd';

const NotFound = () => {
   return (
      <Layout>
         <div className="404NotFound">
            <Row justify="center">
               <Col span={19}>
                  <h2 style={{ textAlign: 'center', margin: '70px' }}>
                     404 Not Found
                  </h2>
               </Col>
            </Row>
         </div>
      </Layout>
   );
};

export default NotFound;
