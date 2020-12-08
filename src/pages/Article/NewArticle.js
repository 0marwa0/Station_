import React, { useState, useEffect } from "react";
import { IoMdRefresh } from "react-icons/io";
import EditorJs from "react-editor-js";
import Editor from "@stfy/react-editor.js";

import { useLocation } from "react-router-dom";
import { LoadData, addData, addFile } from "../../API";
import { toole } from "./toole";
import { SuccessMesg, FailedMesg, Mesg } from "../../API/APIMessage";
import { ReactComponent as RefreshIcon } from "../../public/images/solid undo-right.svg";
import { ReactComponent as RefreshIconLeft } from "../../public/images/solid undo.svg";
import { ReactComponent as DropIcon } from "../../public/images/dropdown.svg";
import { CustomPageWrapper, PageContent } from "../shared/CustomPage";
import EditorJS from "@editorjs/editorjs";
import TabsWrappedLabel from "../Events/tap";

import Header from "@editorjs/header";
import List from "@editorjs/list";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { PageBack } from "../Profile";
import { Menu, Dropdown, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import SideBar from "../Sidebar";
import { Button, Row, Col, Input, Select, Upload, Tabs } from "antd";
import { GlobalStyle } from "../Dashboard";
import styled from "styled-components";
import { ImAttachment } from "react-icons/im";
import { FaTrashAlt } from "react-icons/fa";
import { CustomInput } from "../shared/SharedStyle";
// import { Space, HeadText } from "../Events/CreateEvent";

import { CustomButton } from "../shared/SharedComponents";
// const { Option } = Select;

export const HeadText = styled.div`
  padding: 10px 0;
  font-size: 16px;
  font-weight: bold;
`;
export const Space = styled.div`
  width: 17px;
`;
const { Option } = Select;
const { TabPane } = Tabs;

export const TextNote = styled.div`
  color: var(--darkGray);
  font-size: 13px;
`;

const EventContent = styled(Col)`
  width: 72%;
  height: 800px;

  background-color: white;
  border: 1px solid var(--lighterGray);
  border-top: none;

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
  font-weight: bold;
`;

export const EventHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top:
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
export const InputTitle = styled(Input)`
  width: 80%;
  height: 60px;
  font-size: 20px;
  border: none;
  font-weight: 500;
`;
const PageTitle = styled.span`
  font-size: 27px;
  font-weight: bold;
`;
const MainLayout = styled(Col)`
  width: 100%;
  display: flex;
  height: 100px;
  align-items: center;
  border-bottom: 1px solid var(--lighterGray);

  justify-content: space-between;
`;

const GrayText = styled.div`
  color: var(--darkGray);
  font-size: 0.7vw;
`;
const Index = (props) => {
  let { id } = useParams();
  let location = useLocation();
  const [Active, setActive] = useState(false);
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [Loading, setLoading] = useState(false);
  const [file, setfile] = useState("");

  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const [Image, setImage] = useState();

  const HandleFile = (e) => {
    setImage(e);
  };
  const onEdit = (id) => {
    setLoading(true);

    let data = {
      title: "test",
      description: "test",
      platform: "web",
      publish: true,
      image: "file",
      lang: "ar",
      gov: "baghdad",
    };
    addData(
      `article/edit/${id}`,
      data,
      (mesg, Data) => {
        SuccessMesg("Edit Article Done!");
        setLoading(false);
      },
      (err) => {
        setLoading(false);

        FailedMesg(err);
      }
    );
  };
  const createEvent = () => {
    // let File = new FormData();
    // File.append("file", Image);
    // addFile(
    //   "upload/file",
    //   File,
    //   (data) => {
    //     if (data.errMsg) {
    //       Mesg(data.errMsg);
    //     } else {
    //       let artilce = {
    //         title: title,
    //         description: description,
    //         platform: "web",
    //         publish: true,
    //         image: data.data.link,
    //         lang: "ar",
    //         gov: "baghdad",
    //       };
    //   addData(
    //     "article/add",
    //     artilce,
    //     (mesg, Data) => {
    //       SuccessMesg("Create Article Done!");
    //       setLoading(false);
    //     },
    //     (err) => {
    //       setLoading(false);
    //       FailedMesg(err);
    //     }
    //   );
    // }
    //   },
    //   (err) => {
    //     FailedMesg(err.toString());
    //   }
    // );
  };
  const [t, sett] = useState("");
  const handletext = (e, key) => {
    console.log(e, "editer data");

    setdescription(e);
  };
  const handleselect = (e, key) => {
    let value = e.target.value;
    switch (key) {
      case "title":
        settitle(value);
        break;

      case "price":
        setprice(value);
        break;
      default:
        break;
    }
  };

  const [articles, setartiles] = useState({});
  useEffect(() => {
    // console.log(id, "article id");
    setdescription(props.description);
    LoadData(
      "articles",
      (err, data) => {
        if (err) {
          Mesg(err);
          setLoading(false);
        } else {
          setLoading(false);
          let article = data.data.rows.filter((item) => Number(id) === item.id);
          //settitle(article[0].title);
          setartiles(article[0]);
        }
      },
      (err) => {
        setLoading(false);
        FailedMesg(err, "Something worng happend !");
      }
    );
  }, []);
  const Props = {
    multiple: false,

    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

    onChange({ file, fileList }) {
      HandleFile(file.originFileObj);
    },
  };
  // console.log("its ", articles);
  let item = articles;
  console.log(props.description, "what now");
  return (
    <CustomPageWrapper>
      {/* <GlobalStyle /> */}
      <SideBar />

      <PageContent>
        {" "}
        <div style={{ margin: "20px" }}>
          <Row>
            <MainLayout>
              <div
                style={{
                  height: "110px",
                  margin: "60px 0",
                }}>
                <Link to="/booking">
                  <PageBack>
                    <BsArrowLeft />
                    <div>Booking</div>
                  </PageBack>
                </Link>
                <PageTitle>New Article </PageTitle>
              </div>

              <div
                style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <span style={{ color: "var(--textGray)", marginRight: "8px" }}>
                  Save as draft
                </span>
                <CustomButton undo>
                  <RefreshIconLeft />
                </CustomButton>
                <CustomButton undo>
                  <RefreshIcon />
                </CustomButton>
                <CustomButton>Preview</CustomButton>
                <Space />

                <CustomButton main onOpen={createEvent}>
                  Publish Event{" "}
                </CustomButton>
              </div>
            </MainLayout>
          </Row>
          <Row
            style={{
              display: "flex",
              gap: "2%",
            }}>
            <EventContent>
              <div className="card-container">
                <Tabs type="card">
                  <TabPane tab="Arabic" key="1">
                    <EventHeader>
                      <InputTitle
                        style={{ marginLeft: "10px", marginBottom: "10px" }}
                        placeholder="Event Title Goes Here .."
                        //  onChange={(e) => handleselect(e, "title")}
                      />
                    </EventHeader>
                    <Editor
                      style={{ marginLeft: "10px", marginBottom: "10px" }}
                      placeholder="Start writing or tap here to add images or videos .."
                      // onData={(e) => handletext(e.blocks)}
                      tools={toole}
                      // data={data}
                    />
                  </TabPane>
                  <TabPane tab="English" key="2">
                    <EventHeader>
                      {" "}
                      <InputTitle
                        style={{ marginLeft: "10px", marginBottom: "10px" }}
                        placeholder="Event Title Goes Here .."
                        //  onChange={(e) => handleselect(e, "title")}
                      />
                    </EventHeader>

                    <Editor
                      placeholder="Start writing or tap here to add images or videos .."
                      // onData={(e) => handletext(e.blocks)}
                      tools={toole}
                      // data={data}
                    />
                  </TabPane>
                </Tabs>
              </div>
            </EventContent>
            <Col
              style={{
                width: "25%",
              }}>
              <UploadContenter>
                <HeadText>Header Photo</HeadText>

                <Upload {...Props}>
                  <div className="upload_modal_event">
                    <img src={require("./default2.png")} className="img" />

                    <span
                      style={{
                        color: "var(--darkGray)",
                      }}>
                      Choose any file form computer or Drag & Drop it here
                    </span>
                    <span style={{ margin: "20px 0" }}>
                      <Button>Choose File</Button>
                    </span>
                  </div>
                </Upload>
              </UploadContenter>
              <LanguageWidget>
                <HeadText>Settings</HeadText>
                <div>
                  {/* <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <GrayText>Price</GrayText>
                    <CustomInput
                      placeholder="0"
                      onChange={(e) => handleselect(e, "price")}
                      style={{ width: "100px" }}
                    />
                  </div> */}

                  <LanguageOption>
                    <GrayText> Platform</GrayText>
                    <Select
                      suffixIcon={<DropIcon />}
                      value="Arabic"
                      className="stylecss"
                      // onChange={(e) => handleselect(e, "end")}
                    >
                      <Option key="English" def>
                        both
                      </Option>
                      <Option key="Arabic">web</Option>
                      <Option key="Arabic">app</Option>
                    </Select>
                  </LanguageOption>
                </div>
              </LanguageWidget>
            </Col>
          </Row>
        </div>
      </PageContent>
    </CustomPageWrapper>
  );
};

export default Index;
