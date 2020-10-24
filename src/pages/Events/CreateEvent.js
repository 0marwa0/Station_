import React from "react";
import { IoMdRefresh } from "react-icons/io";
import {
  CustomPageWrapper,
  PageContent,
  PageTitle,
} from "../shared/CustomPage";
import { Menu, Dropdown, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import SideBar from "../Sidebar";
import { Button, Row, Col, Input } from "antd";
import { GlobalStyle } from "../Dashboard";
import styled from "styled-components";
import { CustomButton } from "../shared/SharedComponents";

const EventContent = styled(Col)`
  background-color: white;

  border-radius: 7px;
`;
const WidgetCol = styled(Col)`
  background-color: white;
  padding: 30px;
  height: auto;

  border-radius: 7px;
`;
const Widget = styled(Col)`
  background-color: white;

  margint-bottom: 10%;
`;
const Layout = styled(Row)`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

const LanguageOption = styled.div`
  display: flex;
  padding: 10px 0;
  gap: 5px;

  justify-content: space-between;
  background-color: white;
`;
const LanguageSide = styled.div`
  padding: 10px 0;
  background-color: white;

  border-bottom: 1px solid var(--lighterGray);
`;
const ImageHolder = styled.div`
  padding: 20px;
  background-color: var(--lightBlue);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 7px;
  border-radius: 7px;
  margin: 5px 0;
`;
const FileImage = styled.img`
  width: 120px;
  height: 100px;
`;
const Mainoption = (
  <Menu>
    <Menu.Item key="1">English</Menu.Item>
    <Menu.Item key="2">Arabic</Menu.Item>
  </Menu>
);

const Index = () => {
  return (
    <CustomPageWrapper>
      <GlobalStyle />
      <SideBar />
      <PageContent>
        <Row>
          <Col
            style={{
              width: "99%",
              display: "flex",
              height: "70px",
              alignItems: "center",

              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              {" "}
              Create New Event
            </span>

            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <span style={{ color: "gray" }}>Save as draft</span>
              <CustomButton>
                <IoMdRefresh />
              </CustomButton>
              <CustomButton>
                <IoMdRefresh />
              </CustomButton>
              <CustomButton>Preview</CustomButton>{" "}
              <CustomButton Main>Publish Event </CustomButton>
            </div>
          </Col>
        </Row>
        <Row style={{ display: "flex", gap: "2%", fontSize: "1vw" }}>
          <Col
            style={{
              width: "67%",
              height: "560px",
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "7px",
            }}
          >
            {/* <Input placeholder="Add event title .." />
            <Input placeholder="Price" /> */}
          </Col>
          <Col
            style={{
              width: "30%",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "10px 20px",
                borderRadius: "7px",
                marginBottom: "5%",
              }}
            >
              <div>Header Photo</div>
              <ImageHolder>
                <FileImage src={require("../../public/images/default.png")} />

                <span>
                  Choose any file from computer or Drag & Drop it here
                </span>
                <Button>Choose File</Button>
              </ImageHolder>
              <div> file name </div>
            </div>
            <div
              style={{
                height: "35%",
                backgroundColor: "white",
                padding: "10px 20px",
                borderRadius: "7px",
              }}
            >
              <LanguageSide>Language</LanguageSide>
              <div>
                <LanguageOption>
                  Main Language
                  <Dropdown overlay={Mainoption}>
                    <Button style={{ borderRadius: "7px" }}>
                      English <DownOutlined />
                    </Button>
                  </Dropdown>
                </LanguageOption>
                <LanguageOption>
                  Translate to
                  <Dropdown overlay={Mainoption}>
                    <Button style={{ borderRadius: "7px" }}>
                      Arabic
                      <DownOutlined />
                    </Button>
                  </Dropdown>{" "}
                </LanguageOption>
              </div>
            </div>
          </Col>
        </Row>
      </PageContent>
    </CustomPageWrapper>
  );
};

export default Index;
