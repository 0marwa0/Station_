import React, { useState, useEffect, useContext } from "react";
import { IoMdRefresh } from "react-icons/io";
import Editor from "@stfy/react-editor.js";
import { Tabs } from "antd";
import { StickyContainer, Sticky } from "react-sticky";
import { useParams } from "react-router-dom";
import { EventContext } from "./editEvent";
import { LoadData, addData, addFile } from "../../API";
import { SuccessMesg, FailedMesg, Mesg } from "../../API/APIMessage";
import { ReactComponent as RefreshIcon } from "../../public/images/solid undo-right.svg";
import { ReactComponent as RefreshIconLeft } from "../../public/images/solid undo.svg";
import { ReactComponent as DropIcon } from "../../public/images/dropdown.svg";
import { CustomPageWrapper, PageContent } from "../shared/CustomPage";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { toole } from "../Article/toole";
import List from "@editorjs/list";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { PageBack } from "../Profile";
import { Menu, Dropdown, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import SideBar from "../Sidebar";
import { Button, Row, Col, Input, Select, Upload } from "antd";
import { GlobalStyle } from "../Dashboard";
import styled from "styled-components";
import { ImAttachment } from "react-icons/im";
import { FaTrashAlt } from "react-icons/fa";
import { CustomButton } from "../shared/SharedComponents";
import TabsWrappedLabel from "./tap";
import { CustomInput } from "../shared/SharedStyle";
// import {  EventsData } from "../../fakeData";
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
  width: 68%;
  height: 800px;
  background-color: white;
  border: 1px solid var(--lightGray);
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
  border-bottom: 1px solid var(--lightGray);
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
  border-bottom: 1px solid var(--lightGray);

  justify-content: space-between;
`;

const GrayText = styled.div`
  color: var(--darkGray);
  font-size: 18px;
`;

const Index = (props) => {
  let { id } = useParams();
  let EventInfo = useContext(EventContext);

  const [Active, setActive] = useState(false);
  const [price, setprice] = useState("");
  const [title, settitle] = useState("");

  const [description, setdescription] = useState("");
  const [platform, setplatform] = useState("");
  const [titleAr, settitleAr] = useState("");
  const [descriptionAr, setdescriptionAr] = useState("");
  const [Loading, setLoading] = useState(false);
  const [file, setfile] = useState("");

  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const [Image, setImage] = useState();

  const HandleFile = (e) => {
    setImage(e);
  };
  const [allowToChange, setallowToChange] = useState(false);

  const createEvent = () => {
    let event = {
      id: id,
      image: Image,
      title,
      // titleAr: titleAr,
      // descriptionAr: JSON.stringify(descriptionAr),
      description: JSON.stringify(description),
      lang: "ar",
      ticketPrice: price,
      // platform: platform,
    };
    console.log(event, "hi");
    addData(
      "toevent",
      event,
      (msg, Data) => {
        if (msg) {
          Mesg(msg);
        } else {
          SuccessMesg("Event Created Successfully!");
          setLoading(false);
          // console.log(Data);
        }
      },
      (err) => {
        setLoading(false);

        FailedMesg(err);
      }
    );
  };

  const updateEvent = () => {
    let event = {
      id: id,
      image: Image,
      title,
      // titleAr: titleAr,
      // descriptionAr: JSON.stringify(descriptionAr),
      description: JSON.stringify(description),
      lang: "ar",
      ticketPrice: price,
      // platform: platform,
    };
    // addData(
    //   "event/edit/",
    //   event,
    //   (mesg, Data) => {
    //     SuccessMesg("Event Updated Successfully!");
    //     setLoading(false);
    //     console.log(Data);
    //   },
    //   (err) => {
    //     setLoading(false);

    //     FailedMesg(err);
    //   }
    // );
  };
  // let {id}=useParams()

  useEffect(() => {}, []);
  const handletext = (e) => {
    setdescription(e);
  };
  const handletextAr = (e) => {
    setdescriptionAr(e);
  };
  const handletextPlat = (e) => {
    setplatform(e);
  };
  const handleselect = (e, key) => {
    let value = e.target.value;
    switch (key) {
      case "title":
        settitle(value);
        break;
      case "titleAr":
        settitleAr(value);
        break;
      case "price":
        setprice(value);

        break;
      default:
        break;
    }
  };
  const [imageName, setimageName] = useState();

  const Props = {
    multiple: false,
    name: "file",
    action: "https://station-solo.herokuapp.com/dash/v1/upload/file",
    headers: { token: localStorage.getItem("station_token") },

    onChange({ file, fileList }) {
      if (file.status === "done") {
        let data = {
          uid: file.uid,
          name: file.name,
          url: file.response.data.link,
        };

        HandleFile(file.response.data.link);

        setimageName(data);
      }
    },
  };

  // const renderTabBar = (props, DefaultTabBar) => (
  //   <Sticky bottomOffset={80}>
  //     {({ style }) => (
  //       <DefaultTabBar
  //         {...props}
  //         className="site-custom-tab-bar"
  //         style={{ ...style }}
  //       />
  //     )}
  //   </Sticky>
  // );

  let data = props.edit ? props.data : {};

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
                <Link to="/events">
                  <PageBack>
                    <BsArrowLeft />
                    <div>Events</div>
                  </PageBack>
                </Link>
                <PageTitle>
                  {props.edit ? "Update Event" : " Create Event from Booking"}
                </PageTitle>
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

                <CustomButton
                  main
                  onOpen={props.edit ? updateEvent : createEvent}
                  loading={Loading}>
                  {props.edit ? "Save" : "Publish Event"}
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
                      {/* <EventContext.Consumer>
                        {({ title }) => <div>{title}</div>}
                      </EventContext.Consumer> */}
                      <InputTitle
                        style={{
                          marginLeft: "10px",
                          marginBottom: "10px",
                          // textAlign: "right",
                        }}
                        // defaultValue={title}
                        placeholder="Event Title Goes Here .."
                        onChange={(e) => handleselect(e, "titleAr")}
                      />
                    </EventHeader>
                    <Editor
                      style={{
                        marginLeft: "10px",
                        marginBottom: "10px",
                        textAlign: "right",
                      }}
                      placeholder="Start writing or tap here to add images or videos .."
                      onData={(e) => handletextAr(e)}
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
                        onChange={(e) => handleselect(e, "title")}
                      />
                    </EventHeader>

                    <Editor
                      placeholder="Start writing or tap here to add images or videos .."
                      onData={(e) => handletext(e)}
                      tools={toole}
                      // data={data}
                    />
                  </TabPane>
                </Tabs>
              </div>
              ,{/* <TabsWrappedLabel /> */}
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
                  <LanguageOption>
                    <GrayText>Price</GrayText>
                    <CustomInput
                      placeholder="0"
                      onChange={(e) => handleselect(e, "price")}
                      style={{ width: "100px" }}
                    />
                  </LanguageOption>

                  <LanguageOption>
                    <GrayText> Platform</GrayText>
                    <Select
                      suffixIcon={<DropIcon />}
                      className="stylecss"
                      defaultValue="both"
                      onChange={(e) => handletextPlat(e)}>
                      <Option key="both" def>
                        both
                      </Option>
                      <Option key="web">web</Option>
                      <Option key="app">app</Option>
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
