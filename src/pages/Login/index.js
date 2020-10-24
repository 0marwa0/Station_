import styled from "styled-components";
import React from "react";
import { Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "antd";
const PageWrapper = styled.span`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LoginForm = styled.div`
  width: 35%;
  padding: 40px;
  display: flex;
  gap: 14px;
  margin-top: 6%;
  font-size: 18px;
  color: var(--darkGray);
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;
const Logo = styled.img`
  width: 100px;
  margin: 0 auto;
`;
const ShortCat = styled.div`
  background-color: var(--lightGray);

  height: 100vh;

  width: 65%;

  color: var(--darkGray);
  @media (max-width: 768px) {
    display: none;
  }
`;
const BoldText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;
const CopyRights = styled.div`
  font-size: 16px;
  color: var(--yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  gap: 5px;
`;
const LoginInfo = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: space-between;
`;
const Slide = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 60px;
  padding-left: 15%;
  padding-right: 15%;
`;
const StyledPassword = styled(Input.Password)`
  Input {
    background-color: transparent;
    border-color: red;
    color: white;
    padding: 10px;
    height: auto;
    border-radius: 3px;
  }
`;
export default class AutoPlayMethods extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    const contentStyle = {};
    return (
      <div>
        <PageWrapper>
          <LoginForm>
            <Logo src={require("../../public/images/Logo.png")} />
            <div>
              User Name{" "}
              <Input
                placeholder="Enter you user name"
                style={{
                  height: "60px",
                  borderRadius: "6px",
                  marginTop: "5px",
                  padding: "20px",
                }}
              />
            </div>
            <div>
              Password
              <StyledPassword
                placeholder="Enter you passwrd"
                style={{
                  height: "60px",
                  borderRadius: "6px",
                  marginTop: "5px",
                  padding: "20px",
                }}
              />
            </div>
            <div>
              <Link to="/Dashboard">
                <Button
                  style={{
                    backgroundColor: "var(--yellow)",
                    borderRadius: "5px",
                    border: "none",
                    display: "flex",
                    gap: "5px",
                    padding: "0 40%",
                    width: "100%",
                    alignItems: "center",
                    fontSize: "18px",
                    height: "60px",
                  }}
                >
                  Login
                </Button>
              </Link>
            </div>
            <LoginInfo>
              <div>
                <Checkbox /> Remember me
              </div>
              <u>Forgot Password?</u>
            </LoginInfo>
            <CopyRights>
              <span style={{ color: "var(--darkGray)", fontSize: "13px" }}>
                A system by {"  "}
              </span>
              Solo Creative Studio
            </CopyRights>
          </LoginForm>
          <ShortCat>
            <Slider
              arrows={false}
              ref={(slider) => (this.slider = slider)}
              {...settings}
            >
              <div>
                <Slide>
                  <img
                    src={require("../../public/images/Browser.png")}
                    style={{ width: "100%", marginBottom: "70px" }}
                  />
                  <BoldText>Trusted & certificated Dashboard System </BoldText>
                  <p>
                    Turn your smartphone or tablet into powerful POS Manage
                    sales inventory and employees with ease; engage custommers
                    increase your revenue
                  </p>{" "}
                </Slide>
              </div>
              <div>
                <Slide>
                  <img
                    src={require("../../public/images/Browser.png")}
                    style={{ width: "100%", marginBottom: "70px" }}
                  />
                  <BoldText>Trusted & certificated Dashboard System </BoldText>
                  <p>
                    Turn your smartphone or tablet into powerful POS Manage
                    sales inventory and employees with ease; engage custommers
                    increase your revenue
                  </p>{" "}
                </Slide>
              </div>
            </Slider>
          </ShortCat>
        </PageWrapper>
      </div>
    );
  }
}
