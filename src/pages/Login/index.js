import styled from "styled-components";
import React from "react";
import { Input, Button, Checkbox } from "antd";
import { ReactComponent as LogoIcon } from "../../public/images/LogoIcon.svg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "antd";
const PageWrapper = styled.div`
  display: flex;
  height: 100vh;

  width: 100%;
`;
const LoginForm = styled.div`
  width: 35%;

  position: relative;

  @media (max-width: 900px) {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
    background-color: white;
  }
`;
const LoginContent = styled.div`
  position: absolute;
  left: 50%;
  font-siz: 18px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 450px;
`;
const Logo = styled.div`
  width: 100%;
  text-align: center;
`;
const ShortCat = styled.div`
  background-color: var(--lightGray);

  width: 65%;

  color: var(--darkGray);
`;
const BoldText = styled.h3`
  font-weight: 700;
  color: black;
`;
const CopyRights = styled.div`
  font-size: 16px;
  color: var(--yellow);
  position: absolute;
  width: 100%;
  padding: 20px;
  text-align: center;
  bottom: 0;
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
const Space = styled.div`
  height: 15px;
`;
const Label = styled.div`
  color: var(--darkGray);
  font-size: 18px;
  height: 22px;
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
    const SlideItem = () => {
      return (
        <Slide>
          <img
            src={require("../../public/images/Browser.png")}
            style={{ width: "100%", marginBottom: "70px" }}
          />
          <BoldText>Trusted & certificated Dashboard System </BoldText>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ width: "60%" }}>
              Turn your smartphone or tablet into powerful POS Manage sales
              inventory and employees with ease; engage custommers increase your
              revenue
            </p>{" "}
          </div>
        </Slide>
      );
    };
    return (
      <PageWrapper>
        <LoginForm>
          <LoginContent>
            <Logo>
              <LogoIcon />
            </Logo>
            <Space />
            <div>
              <Label> User Name</Label>

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
            <Space />
            <div>
              <Label>Password</Label>

              <Input.Password
                placeholder="Enter you passwrd"
                style={{
                  height: "60px",
                  borderRadius: "6px",
                  marginTop: "5px",
                  padding: "20px",
                }}
              />
            </div>
            <Space />
            <div>
              <Link to="/Dashboard">
                <Button
                  style={{
                    backgroundColor: "var(--yellow)",
                    borderRadius: "5px",
                    border: "none",
                    display: "flex",
                    gap: "5px",

                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    height: "60px",
                  }}
                >
                  Login
                </Button>
              </Link>
            </div>
            <Space />
            <LoginInfo>
              <div>
                <Checkbox /> Remember me
              </div>
              <u>Forgot Password?</u>
            </LoginInfo>
          </LoginContent>{" "}
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
            <SlideItem />
            <SlideItem />
            <SlideItem />
          </Slider>
        </ShortCat>
      </PageWrapper>
    );
  }
}
