import React, { useEffect, useState, useContext, useRef } from "react";
import { InputLable } from "../shared/SharedStyle";
import { CustomModleButton } from "../shared/SharedComponents";
import { Menu, Dropdown, Button, Input } from "antd";
import { ReactComponent as DropIcon } from "../../public/images/dropdown.svg";
import { ReactComponent as Close } from "../../public/images/close.svg";
import styled from "styled-components";
import { ProfileImage } from "../Profile";
import { Upload } from "antd";
import "../../App.css";
import { Values } from "./index";
import Select, { components } from "react-select";

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
// position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
export const SideModal = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: white;
  display: flex;
  gap: 20vh;
  justify-content: space-between;
  width: 540px;
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
export const Space = styled.div``;
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
    if (node.contains(e.target)) {
      return;
    }
    props.fun(false);
  };
  let role = "";

  if (Values.type === 2) {
    role = "Meadia Admin";
  } else if (Values.type === 3) {
    role = "Book Admin";
  }

  const Placeholder = (props) => {
    return <components.Placeholder {...props} />;
  };
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <DropIcon />
      </components.DropdownIndicator>
    );
  };
  const style = {
    control: (base) => ({
      ...base,
      borderRadius: "7px",
    }),
  };
  const branchs = [
    { value: "baghdad", label: "baghdad" },
    { value: "mosul", label: "mosul" },
  ];
  const roles = [
    { value: 1, label: "Admin" },

    { value: 2, label: "Meadia Admin" },
    { value: 3, label: "Book Admin" },
  ];
  let node;
  return (
    // <div>{admin.name}</div>
    <div className="Overlay" onClick={(e) => handleClose(e)}>
      <div
        className="Modal"
        ref={(nods) => {
          node = nods;
        }}>
        <SideModal>
          {" "}
          <Values.Consumer>
            {({ username, phone, email, type, branch, image }) => (
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
                <Space />
                <InputLable>
                  Full Name
                  <CustomInput
                    value={name}
                    onChange={(e) => onname(e)}
                    placeholder="Write admin name"
                  />
                </InputLable>
                <Space />
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
                    <Space />
                    <InputLable>
                      Password
                      <CustomInput
                        placeholder="Write admin password"
                        onChange={(e) => props.handleInput(e, "password")}
                      />
                    </InputLable>
                  </div>
                ) : null}
                <Space />
                <InputLable>
                  Email
                  <CustomInput
                    placeholder="Write admin Email"
                    defaultValue={email}
                    onChange={(e) => props.handleInput(e, "email")}
                  />
                </InputLable>
                <Space />
                <InputLable>
                  Phone
                  <CustomInput
                    placeholder="Write admin phone number"
                    defaultValue={phone}
                    onChange={(e) => props.handleInput(e, "phone")}
                  />
                </InputLable>
                <Space />
                <InputLable>
                  Branch
                  <Select
                    onChange={(e) => props.handleSelect(e, "branch")}
                    components={{
                      Placeholder,
                      DropdownIndicator,
                      IndicatorSeparator: () => null,
                    }}
                    className="costumSelect"
                    styles={style}
                    value={branchs.filter((option) => option.label === branch)}
                    options={branchs}
                  />
                </InputLable>
                <Space />
                <InputLable>
                  Role
                  <Select
                    onChange={(e) => props.handleRole(e, "type")}
                    components={{
                      Placeholder,
                      DropdownIndicator,
                      IndicatorSeparator: () => null,
                    }}
                    className="costumSelect"
                    styles={style}
                    value={roles.filter((option) => option.value === type)}
                    options={roles}
                  />
                </InputLable>
                <Space />
              </div>
            )}
          </Values.Consumer>
          <ModalFooter>
            <div style={{ float: "right" }}>
              {" "}
              <CustomModleButton main extra fun={props.handleSubmit}>
                {props.type === "create" ? "Create" : "Save"}
              </CustomModleButton>
            </div>
          </ModalFooter>
        </SideModal>
      </div>
    </div>
  );
}

export default Index;
