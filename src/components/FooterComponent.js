import React from "react";
import { Row, Col, Layout, Divider, Button } from "antd";
import logo from "../resources/logo.png";
import discordBtn from "../resources/join-us-on-discord-button.png";
const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer className="w-full">
      <Divider className="divider-black" />
      <Row type="flex" justify="center" className="items-center">
        <Col sm={24} md={8} className="text-lg font-medium">
          <Row className="items-center">
            <Col span={12} className="w-auto p-0 m-0">
              <img
                src={logo}
                className="h-40"
                alt="Programming Buddies Logo"
              ></img>
            </Col>
            <Col span={12}>
              A place for people to group up to learn and teach programming to
              each other.
            </Col>
          </Row>
        </Col>
        <Col sm={24} md={8}></Col>
        <Col sm={24} md={8} className="text-center">
          <Button className="discord-btn" type="image">
            <img className="w-full" img={discordBtn} />
          </Button>
        </Col>
      </Row>
      <Divider className="divider-black" />
      <div className="text-center font-bold">
        Made by members of the Programming Buddies Community
      </div>
    </Footer>
  );
};

export default FooterComponent;
