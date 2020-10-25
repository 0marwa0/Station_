import React, { useState } from "react";
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
import { ImAttachment } from "react-icons/im";
import { FaTrashAlt } from "react-icons/fa";
import { CustomButton } from "../shared/SharedComponents";
export const TextNote = styled.div`
  color: var(--darkGray);
  font-size: 13px;
`;

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
  const [Active, setActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const [Image, setImage] = useState(
    require("../FileUploader/NewFileUploader/default.png")
  );

  const [allowToChange, setallowToChange] = useState(false);

  const getFileSize = (e) => {
    let fileSize = e;
    var Uints = new Array("Bytes", "KB", "MB", "GB"),
      i = 0;
    while (fileSize > 900) {
      fileSize /= 1024;
      i++;
    }
    var exactSize = Math.round(fileSize * 100) / 100 + " " + Uints[i];
    console.log("FILE SIZE = ", exactSize);
    console.log(fileSize, "sizzzzzz");
    setFileSize(exactSize);
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    let value;
    setallowToChange(true);
    setActive(true);
    let type = e.target.files[0].type;
    if (type.substring(0, 5) === "image") {
      value = URL.createObjectURL(e.target.files[0]);
      setImage(value);
    } else {
      setImage(require("../FileUploader/NewFileUploader/file2.webp"));
    }
    setFileName(e.target.files[0].name);
    getFileSize(e.target.files[0].size);
  };
  const removeImage = () => {
    setActive(false);
    setImage(require("../FileUploader/NewFileUploader/default.png"));
    setallowToChange(false);
    setFileName("");
    setFileSize("");
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };
  const dragLeave = (e) => {
    e.preventDefault();
    setActive(false);
  };
  const dragOver = (e) => {
    setActive(true);
    e.preventDefault();
  };
  const fileDrop = (e) => {
    e.preventDefault();
    console.log("doregedd");
    let value;
    let type = e.dataTransfer.files[0].type;
    if (type.substring(0, 5) === "image") {
      value = URL.createObjectURL(e.dataTransfer.files[0]);
      setImage(value);
    } else {
      setImage(require("../FileUploader/NewFileUploader/file2.webp"));
    }
    setallowToChange(true);
    setFileName(e.dataTransfer.files[0].name);
    getFileSize(e.dataTransfer.files[0].size);
  };
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
              Header Photo
              <div
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
                className={
                  Active ? "upload_modal event active" : "upload_modal event"
                }
              >
                <div className="upload_img_close">
                  <img src={Image} className="img" />
                </div>
                <span
                  style={{
                    color: "var(--darkGray)",
                  }}
                >
                  Choose any file form computer or Drag & Drop it here Drop file
                  here
                </span>
                <span style={{ margin: "20px 0" }}>
                  <input type="file" id="file" onChange={handleImageChange} />
                  <label for="file"> ChooseFile</label>
                </span>
              </div>
              <span>
                {fileName ? (
                  <span style={{ display: "flex", gap: "5px" }}>
                    <TextNote>
                      <ImAttachment />
                    </TextNote>

                    {fileName}
                    <TextNote>{fileSize}</TextNote>
                    {allowToChange ? (
                      <FaTrashAlt
                        size="14px"
                        style={{
                          cursor: "pointer",
                          color: "var(--lighterGray)",
                          marginLeft: "8px",
                        }}
                        onClick={removeImage}
                      />
                    ) : null}
                  </span>
                ) : (
                  ""
                )}
              </span>
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
