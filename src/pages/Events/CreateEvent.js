import React, { useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import Editor from "@stfy/react-editor.js";
import { Tabs } from "antd";
import { StickyContainer, Sticky } from "react-sticky";
import { useParams } from "react-router-dom";
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
    console.log(e, "whatttttttt");
  };
  const [allowToChange, setallowToChange] = useState(false);

  const createEvent = () => {
    let File = new FormData();
    File.append("file", Image);
    addFile(
      "upload/file",
      File,
      (data) => {
        if (data.errMsg) {
          Mesg(data.errMsg);
        } else {
          let event = {
            id: id,
            image: data.data.link,
            title,
            description,
            lang: "ar",
            ticketPrice: price,
          };
          console.log(event);

          addData(
            "toevent",
            event,
            (mesg, Data) => {
              SuccessMesg("Create Event Done!");
              setLoading(false);
            },
            (err) => {
              setLoading(false);

              FailedMesg(err);
            }
          );
        }
      },
      (err) => {
        FailedMesg(err.toString());
      }
    );
  };
  const [t, sett] = useState("");
  const handletext = (e, key) => {
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
        props.handlesiz(file.size);
        props.handleFile(file.response.data.link);

        console.log(file, "don");
        setimageName(data);
      }
    },
  };

  const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
      {({ style }) => (
        <DefaultTabBar
          {...props}
          className="site-custom-tab-bar"
          style={{ ...style }}
        />
      )}
    </Sticky>
  );

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
                <PageTitle> create Event from Booking </PageTitle>
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
              <TabsWrappedLabel />
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
                  <div
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
                  </div>

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
