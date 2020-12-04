import React, { useState, useEffect } from "react";
import { IoMdRefresh } from "react-icons/io";
import Editor from "@stfy/react-editor.js";
import { useParams } from "react-router-dom";
import { LoadData, addData, addFile } from "../../API";
import { SuccessMesg, FailedMesg, Mesg } from "../../API/APIMessage";
import { ReactComponent as RefreshIcon } from "../../public/images/solid undo-right.svg";
import { ReactComponent as RefreshIconLeft } from "../../public/images/solid undo.svg";
import { ReactComponent as DropIcon } from "../../public/images/dropdown.svg";
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
import { Button, Row, Col, Input, Select, Upload } from "antd";
import { GlobalStyle } from "../Dashboard";
import styled from "styled-components";
import { ImAttachment } from "react-icons/im";
import { FaTrashAlt } from "react-icons/fa";

import { CustomButton } from "../shared/SharedComponents";
const { Option } = Select;

export const TextNote = styled.div`
  color: var(--darkGray);
  font-size: 13px;
`;

const EventContent = styled(Col)`
  width: 75%;
  height: 80vh;
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
const Divider = styled.div`
  width: 20px;
  background-color: red;
  height: 10px;
`;
const EventHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  justify-content: space-between;

  padding-bottom: 30px;
  border-bottom: 1px solid var(--lighterGray);
`;
const UploadContenter = styled.div`
  background-color: white;
  padding: 10px 20px;
  border-radius: 7px;
  margin-bottom: 5%;
  width: 100%;
`;

const LanguageWidget = styled.div`
  height: 35%;
  background-color: white;
  padding: 10px 20px;
  border-radius: 7px;
`;
const InputTitle = styled(Input)`
  width: 60%;
  height: 60px;
  font-size: 20px;

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

const GrayText = styled.div`
  color: var(--darkGray);
  font-size: 1vw;
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
    let File = new FormData();
    File.append("file", Image);
    addFile(
      "upload/file",
      File,
      (data) => {
        if (data.errMsg) {
          Mesg(data.errMsg);
        } else {
          let artilce = {
            title: title,
            description: description,
            platform: "web",
            publish: true,
            image: data.data.link,
            lang: "ar",
            gov: "baghdad",
          };

          addData(
            "article/add",
            artilce,
            (mesg, Data) => {
              SuccessMesg("Create Article Done!");
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
  console.log("its heare", articles);
  let item = articles;
  return (
    <CustomPageWrapper>
      <GlobalStyle />

      <SideBar />
      <PageContent>
        <Row>
          <Link to="/articles">
            <PageBack>
              <BsArrowLeft />
              <div>Article</div>
            </PageBack>
          </Link>
          <MainLayout>
            <PageTitle> Create New Article</PageTitle>

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
              <CustomButton main onOpen={createEvent}>
                Publish Article
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
            <EventHeader>
              <InputTitle
                value={item.title}
                placeholder="Add Article title .."
                onChange={(e) => handleselect(e, "title")}
              />{" "}
              <div>
                {/* <Select
                  suffixIcon={<DropIcon />}
                  placeholder="branch"
                  // onChange={(e) => handleselect(e, "end")}
                >
                  <Option key="baghdad">Baghdad</Option>
                  <Option key="musol">Musol</Option>
                </Select>{" "} */}
                <Select
                  suffixIcon={<DropIcon />}
                  placeholder="Platform"
                  // onChange={(e) => handleselect(e, "end")}
                >
                  <Option key="web">web</Option>
                  <Option key="app">app</Option>
                  <Option key="both">both</Option>
                </Select>
              </div>
            </EventHeader>

            <div
              style={{
                padding: "20px 0",
                fontSize: "17px",
              }}>
              <p>Start writing or tap here to add images or videos ..</p>
              {t}
              <Editor
                onData={(e) => handletext(e.blocks)}
                // instanceRef={(instance) => (instanceRef.current = instance)}
                // tools={EDITOR_JS_TOOLS}
                // data={data}
              />
            </div>
          </EventContent>
          <Col
            style={{
              width: "22%",
            }}>
            <UploadContenter>
              <div style={{ padding: "10px 0" }}>Header Photo</div>

              <div className="upload_modal_event">
                <Upload {...Props}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                    }}>
                    <img
                      src={require("../../public/images/default2.png")}
                      className="img"
                    />
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
              </div>
            </UploadContenter>
            <LanguageWidget>
              <LanguageSide>Language</LanguageSide>
              <div>
                <LanguageOption>
                  <GrayText> Main Language</GrayText>

                  <Select
                    suffixIcon={<DropIcon />}
                    value="English"
                    className="stylecss"
                    // style={{ backgroundColor: "var(--lighterGray)" }}
                    // onChange={(e) => handleselect(e, "end")}
                  >
                    <Option key="English">English</Option>
                    <Option key="Arabic">Arabic</Option>
                  </Select>
                </LanguageOption>
                <LanguageOption>
                  <GrayText> Translate to</GrayText>
                  <Select
                    suffixIcon={<DropIcon />}
                    value="Arabic"
                    className="stylecss"
                    // onChange={(e) => handleselect(e, "end")}
                  >
                    <Option key="English" def>
                      English
                    </Option>
                    <Option key="Arabic">Arabic</Option>
                  </Select>
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
