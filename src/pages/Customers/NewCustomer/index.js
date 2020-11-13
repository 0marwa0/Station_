import React, { useState } from "react";
import { Input, InputNumber } from "antd";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Mesg, FailedMesg, SuccessMesg } from "../../../API/APIMessage";

import {
  InputLable,
  ModleFooter,
  ModleHeader,
  Space,
} from "../../shared/SharedStyle";
import styled from "styled-components";
import { ReactComponent as DropIcon } from "../../../public/images/dropdown.svg";
import { ReactComponent as Close } from "../../../public/images/close.svg";
import { addData } from "../../../API";

import { GiNorthStarShuriken } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { CustomModleButton } from "../../shared/SharedComponents";
import { CustomInput, CustomInputArea } from "../../shared/SharedStyle";

const { TextArea } = Input;

const optionData = (
  <Menu>
    <Menu.Item key="1" isSelected={true}>
      all
    </Menu.Item>
    {/* <Menu.Item key="2">100</Menu.Item>
    <Menu.Item key="3">50</Menu.Item> */}
  </Menu>
);

const PageWrapper = styled.div`
  width: 400px;
  padding: 40px;
`;

function Index(props) {
  const [title, setTitle] = useState("");
  const [mesg, setMesg] = useState("");
  const [Loading, setLoading] = useState(false);

  const handleInput = (e, key) => {
    let value = e.target.value;
    if (key === "title") {
      setTitle(value);
    }
    if (key === "mesg") {
      setMesg(value);
    }
  };
  const handleSubmit = () => {
    let data = {
      title: title,
      to: "all",
      contents: mesg,
      lang: "ar",
      // userId: props.id,
    };
    console.log(data, "send notifi");

    if (title != "" && mesg != "") {
      setLoading(true);
      addData(
        "send/notification",
        data,
        (mesg,
        (Data) => {
          // if (!Data.status) {
          //   Mesg(mesg);
          // }
          SuccessMesg("Customers notified successfully");

          setLoading(false);
          props.Close();
          setTitle("");
          setMesg("");
        }),
        (err) => {
          props.Close();
          setLoading(false);
          setTitle("");
          setMesg("");
          FailedMesg(err);
        }
      );
    } else {
      FailedMesg("Cant send an empty notification");

      // props.Close();
    }
  };
  return (
    <div>
      {" "}
      <ModleHeader>
        Send notification
        <Close onClick={props.Close} cursor="pointer" />
        {/* <AiOutlineClose /> */}
      </ModleHeader>
      <PageWrapper>
        <InputLable>
          <span>
            Title <GiNorthStarShuriken color="red" size={8} />
          </span>
          <CustomInput
            onChange={(e) => handleInput(e, "title")}
            placeholder="Write notification title"
          />
        </InputLable>
        <Space />
        <InputLable>
          <span>
            {" "}
            Message <GiNorthStarShuriken color="red" size={8} />
          </span>

          <CustomInputArea
            rows={4}
            onChange={(e) => handleInput(e, "mesg")}
            placeholder="Write notification message ..."
          />
        </InputLable>{" "}
        <Space />
        <InputLable>
          User filter
          <Dropdown overlay={optionData}>
            <Button
              style={{
                borderRadius: "7px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "var(--darkGray)" }}>All users</div>
              <DropIcon />
            </Button>
          </Dropdown>
        </InputLable>
      </PageWrapper>{" "}
      <ModleFooter>
        <CustomModleButton fun={props.Close}>Cancel</CustomModleButton>
        <CustomModleButton Main fun={handleSubmit}>
          Send
        </CustomModleButton>
      </ModleFooter>
    </div>
  );
}

export default Index;
