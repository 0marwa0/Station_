import React, { useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import Editor from "@stfy/react-editor.js";
import { ReactComponent as RefreshIcon } from "../../public/images/solid undo-right.svg";
import { ReactComponent as RefreshIconLeft } from "../../public/images/solid undo.svg";

import { CustomPageWrapper, PageContent } from "../shared/CustomPage";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { PageBack } from "../Profile";
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
  width: 70%;
  height: 560px;
  padding: 40px 50px;
  background-color: white;
  border: 1px solid var(--lighterGray);
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

const EventHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--lighterGray);
`;
const UploadContenter = styled.div`
  background-color: white;
  padding: 10px 20px;
  border-radius: 7px;
  margin-bottom: 5%;
`;

const LanguageWidget = styled.div`
  height: 35%;
  background-color: white;
  padding: 10px 20px;
  border-radius: 7px;
`;
const InputTitle = styled(Input)`
  width: 80%;
  height: 60px;
  font-size: 20px;
  color: var(--lighterGray);
  font-weight: 500;
`;
const PageTitle = styled.span`
  fontsize: 20px;
  font-weight: bold;
`;
const MainLayout = styled(Col)`
  width: 99%;
  display: flex;
  height: 70px;
  align-items: center;

  justify-content: space-between;
`;
const Mainoption = (
  <Menu>
    <Menu.Item key="1">English</Menu.Item>
    <Menu.Item key="2">Arabic</Menu.Item>
  </Menu>
);
const GrayText = styled.div`
  color: var(--darkGray);
  font-size: 1vw;
`;
const Index = () => {
  const [Active, setActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const [Image, setImage] = useState(
    require("../FileUploader/NewFileUploader/default2.png")
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
    setImage(require("../FileUploader/NewFileUploader/default2.png"));
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

  const UplaodWdiget = () => {
    return (
      <UploadContenter>
        <div style={{ padding: "10px 0" }}>Header Photo</div>

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
              color: "#808D93",
              fontSize: "1.2vw",
            }}
          >
            Choose any file form computer or
            <span style={{ color: "black" }}> Drag & Drop</span> it here
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
      </UploadContenter>
    );
  };

  return (
    <CustomPageWrapper>
      <GlobalStyle />
      <SideBar />
      <PageContent>
        <Row>
          <Link to="/Events">
            <PageBack>
              <BsArrowLeft />
              <div>Events</div>
            </PageBack>
          </Link>
          <MainLayout>
            <PageTitle> Create New Event</PageTitle>

            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <span style={{ color: "var(--textGray)", marginRight: "8px" }}>
                Save as draft
              </span>
              <CustomButton undo>
                <RefreshIconLeft />
              </CustomButton>
              <CustomButton undo>
                <RefreshIcon />
              </CustomButton>
              <CustomButton>Preview</CustomButton>{" "}
              <CustomButton Main>Publish Event </CustomButton>
            </div>
          </MainLayout>
        </Row>
        <Row style={{ display: "flex", gap: "2%" }}>
          <EventContent>
            <EventHeader>
              <div>
                <InputTitle placeholder="Add event title .." />
              </div>
              <div>
                {" "}
                <Input
                  placeholder="Add event Price"
                  style={{ width: "200px" }}
                />
              </div>{" "}
            </EventHeader>

            <div
              style={{
                padding: "20px 0",
                fontSize: "17px",
              }}
            >
              <p>Start writing or tap here to add images or videos ..</p>
              <Editor

              // instanceRef={(instance) => (instanceRef.current = instance)}
              // tools={EDITOR_JS_TOOLS}
              // data={data}
              />
            </div>
          </EventContent>
          <Col
            style={{
              width: "27%",
            }}
          >
            <UplaodWdiget />
            <LanguageWidget>
              <LanguageSide>Language</LanguageSide>
              <div>
                <LanguageOption>
                  <GrayText> Main Language</GrayText>

                  <Dropdown overlay={Mainoption}>
                    <Button
                      style={{
                        borderRadius: "7px",
                        backgroundColor: "var(--lightGray)",
                      }}
                    >
                      English <DownOutlined />
                    </Button>
                  </Dropdown>
                </LanguageOption>
                <LanguageOption>
                  <GrayText> Translate to</GrayText>
                  <Dropdown overlay={Mainoption}>
                    <Button
                      style={{
                        borderRadius: "7px",
                        backgroundColor: "var(--lightGray)",
                      }}
                    >
                      Arabic
                      <DownOutlined />
                    </Button>
                  </Dropdown>{" "}
                </LanguageOption>
              </div>
            </LanguageWidget>
          </Col>
        </Row>
      </PageContent>
    </CustomPageWrapper>
  );
};

export default Index;
