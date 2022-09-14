import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
   return (
      <Row justify="center">
         <Col span={19}>
            <Row className="header">
               <Col span={12} className="logo">
                  <Link to="/">DomainFinder</Link>
               </Col>

               <Col span={12} className="signin">
                  <Link to="#">About us</Link>
                  <Link to="#">For Developers</Link>
               </Col>
            </Row>
         </Col>
      </Row>
   );
}

export default Header;
