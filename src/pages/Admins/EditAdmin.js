import React, { useEffect, useState, useContext, useRef } from "react";
import { InputLable } from "../shared/SharedStyle";
import { CustomModleButton } from "../shared/SharedComponents";
import { Menu, Dropdown, Button, Input } from "antd";
import { ReactComponent as DropIcon } from "../../public/images/dropdown.svg";
import { ReactComponent as Close } from "../../public/images/close.svg";
import styled from "styled-components";
import { ProfileImage } from "../Profile";
import { Upload, Select } from "antd";
import "../../App.css";
import { Values } from "./index";
import { CustomInput } from "../shared/SharedStyle";
export const option = (
  <Menu>
    <Menu.Item key="1">200</Menu.Item>
    <Menu.Item key="2">100</Menu.Item>
    <Menu.Item key="3">50</Menu.Item>
  </Menu>
);
export const data = (
  <Menu>
    <Menu.Item key="1">200</Menu.Item>
    <Menu.Item key="2">100</Menu.Item>
    <Menu.Item key="3">50</Menu.Item>
  </Menu>
);
const { Option } = Select;
export const SideOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999999;
  background: rgba(0, 0, 0, 0.3);
`;
export const ModalFooter = styled.div`
  height: 5%;
`;
export const SideModal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  animation: listFade 0.6s;
  right: 0;
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: white;
  overflow: hidden;

  width: 540px;
  backgorund-color: red;
  padding: 30px 50px;
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 40px;
  align-items: center;
`;
export const Space = styled.div`
  height: 8px;
`;
const Imageholder = styled.div``;
function Index(props) {
  const [Loading, setLoading] = useState(false);
  const [imageName, setimageName] = useState();
  const [file, setfile] = useState("");
  const [ImageUrl, setImageUrl] = useState(props.admins.image);
  console.log(Values.image, "immmmmmmmmmmmmage");
  const Image = (e) => {
    setfile(e);
  };
  const Props = {
    //multiple: false,
    name: "image",
    action: "https://station-solo.herokuapp.com/dash/v1/upload",
    headers: { token: localStorage.getItem("station_token") },
    showUploadList: false,
    transformFile(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const canvas = document.createElement("canvas");
          const img = document.createElement("img");
          img.src = reader.result;

          img.onload = () => {
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "yellow";
            ctx.textBaseline = "middle";
            setImageUrl(img.src);
            ctx.fillText("Ant Design", 20, 20);
            canvas.toBlob(resolve);
          };
        };
      });
    },
  };
  const handleImage = (info, fileList) => {
    Image(info.originFileObj);
    if (info.file.status === "done") {
      let data = {
        uid: info.file.uid,
        name: info.file.name,
        url: info.file.response.url,
      };
      setimageName(data);
      props.handleSelect(info.file.response.url, "image");
    }
  };

  let admin = props.admins;

  const infoContext = useContext(Values);
  const [name, setname] = useState(infoContext.name);
  console.log(props.id, "i got it");
  const onname = (e) => {
    setname(e.target.value);
  };
  const model = React.createRef();
  const handleClose = (e) => {
    if (model.contains(e.target)) {
      return;
    }
    props.fun(false);
    console.log(e);
    // console.log(this.nods, "out overlay");
  };
  let role = "";

  if (Values.type === 2) {
    role = "Meadia Admin";
  } else if (Values.type === 3) {
    role = "Book Admin";
  }
  return (
    // <div>{admin.name}</div>
    <div
      className="Overlay"
      //  onClick={(e) => handleClose(e)}
    >
      <div className="Modal" ref={model}>
        <Values.Consumer>
          {({ username, phone, email, type, branch, image }) => (
            <SideModal>
              <div style={{ height: "95%" }}>
                <Title>
                  <div>Update Admin</div>
                  <Close
                    onClick={() => {
                      props.fun(false);
                    }}
                    cursor="pointer"
                  />
                  {/* <AiOutlineClose /> */}
                </Title>
                <InputLable>
                  {" "}
                  <div style={{ fontSize: "17px" }}>Admin Info</div>
                </InputLable>{" "}
                <Space />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}>
                  <div>
                    <ProfileImage src={ImageUrl}>
                      {/* {ImageUrl === "" ? name : ""} */}
                    </ProfileImage>
                    <Space style={{ cursor: "pointer" }}>
                      <Upload
                        {...Props}
                        onChange={(e) => handleImage(e)}
                        defaultFileList={imageName && [imageName]}>
                        Upload Photo
                      </Upload>
                    </Space>
                  </div>
                </div>
                <Space /> <Space />
                <InputLable>
                  Full Name
                  <CustomInput
                    value={name}
                    onChange={(e) => onname(e)}
                    placeholder="Write admin name"
                  />
                </InputLable>
                <Space /> <Space />
                <InputLable>
                  Username
                  <CustomInput
                    defaultValue={username}
                    onChange={(e) => props.handleInput(e, "username")}
                    placeholder="Write admin username"
                  />
                </InputLable>
                {props.type === "create" ? (
                  <div>
                    {props.type}
                    <Space /> <Space />{" "}
                    <InputLable>
                      Password
                      <CustomInput
                        placeholder="Write admin password"
                        onChange={(e) => props.handleInput(e, "password")}
                      />
                    </InputLable>
                  </div>
                ) : null}
                <Space /> <Space />
                <InputLable>
                  Email
                  <CustomInput
                    placeholder="Write admin Email"
                    defaultValue={email}
                    onChange={(e) => props.handleInput(e, "email")}
                  />
                </InputLable>
                <Space /> <Space />
                <InputLable>
                  Phone
                  <CustomInput
                    placeholder="Write admin phone number"
                    defaultValue={phone}
                    onChange={(e) => props.handleInput(e, "phone")}
                  />
                </InputLable>
                <Space /> <Space />
                <InputLable>
                  Branch
                  <Select
                    suffixIcon={<DropIcon />}
                    placeholder=" Choose admin branch loaction"
                    defaultValue={branch}
                    onChange={(e) => props.handleSelect(e, "branch")}>
                    <Option key="baghadad">Baghadad</Option>
                    <Option key="mosul">Mosul</Option>
                  </Select>
                </InputLable>
                <Space /> <Space />
                <InputLable>
                  Role
                  <Select
                    suffixIcon={<DropIcon />}
                    placeholder="Choose admin role"
                    defaultValue={role}
                    onChange={(e) => props.handleRole(e, "type")}>
                    <Option value="Meadia Admin">{/* Meadia Admin */}</Option>
                    <Option value="Book Admin">{/* Book Admin */}</Option>
                  </Select>
                </InputLable>
              </div>
              <Space />
              <ModalFooter>
                <div style={{ float: "right" }}>
                  {" "}
                  <CustomModleButton main extra fun={props.handleSubmit}>
                    {props.type === "create" ? "Create" : "Save"}
                  </CustomModleButton>
                </div>
              </ModalFooter>
            </SideModal>
          )}
        </Values.Consumer>
      </div>
    </div>
  );
}

export default Index;
