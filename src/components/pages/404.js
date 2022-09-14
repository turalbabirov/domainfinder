import React from 'react';
import Footer from '../sections/Footer';
import GreenHeader from '../modules/GreenHeader';
import { Col, Row } from 'antd';

function NotFound() {
  return (
    <div className="404NotFound">
      <>
        <GreenHeader />

        <Row justify="center">
          <Col span={19}>
            <h2 style={{ textAlign: 'center', margin: '70px' }}>
              404 Not Found
            </h2>
          </Col>
        </Row>

        <Footer />
      </>
    </div>
  );
}

export default NotFound;
