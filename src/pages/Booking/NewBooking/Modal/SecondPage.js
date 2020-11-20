import React, { useState, useEffect } from "react";
import { Input, InputNumber, DatePicker } from "antd";
import { Mesg, FailedMesg } from "../../../../API/APIMessage";
import { BookItemLoading } from "../../../shared/Loading";
import moment from "moment";
import { Scrollbars } from "react-custom-scrollbars";

import { ReactComponent as DatePickerIcon } from "../../../../public/images/solid calendar-alt.svg";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { Select } from "antd";
import { DownCircleTwoTone } from "@ant-design/icons";

import { LoadData } from "../../../../API";
import { ReactComponent as DropIcon } from "../../../../public/images/dropdown.svg";
import Slider from "react-slick";
import { FaTrashAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  CardItem,
  CardWrapper,
  PageWrapper,
  SlidHolder,
  Space,
  Size,
  GrayBoldText,
  GrayText,
  SecondPageInput,
  BookedItem,
  Page1Item,
} from "./index";

import { CustomInput, CustomInputArea } from "../../../shared/SharedStyle";
import { InputLable } from "../../../shared/SharedStyle";
const { Option } = Select;

const StartDate = (
  <Menu>
    <Menu.Item key="1">10:00Am</Menu.Item>
    <Menu.Item key="2">12:00Am</Menu.Item>
    <Menu.Item key="3">03:00Am</Menu.Item>
  </Menu>
);
export default function SecondPage() {
  let ex = [
    {
      start: {
        dateTime: "2020-11-29T02:30:00+03:00",
      },
      end: {
        dateTime: "2020-11-30T02:30:00+03:00",
      },
    },
  ];
  const [Days, setsDays] = useState([]);
  const [Dayshow, setsDayshow] = useState([]);
  const [date, setdate] = useState("");
  const [Editeddate, setEditeddate] = useState("");

  const [Datevalue, setdatevalue] = useState("");

  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [count, setcount] = useState(0);

  const add = () => {
    setcount(count + 1);
    Dayshow.push({ id: count, data: Editeddate, StTime: start, EnTime: end });
    // Days.push({
    //   start: { dateTime: date + "T" + start + "+" + end },
    //   end: { dateTime: "" },
    // });
    // console.log(Days);
  };
  const handleselect = (e, key) => {
    if (key === "start") {
      setstart(e);
    } else if (key === "end") {
      setend(e);
    }
  };
  const handleDate = (e) => {
    let date = e.format("YYYY-MM-DD");
    let edited = e.format("D-MMM-yyyy");
    setEditeddate(edited);
    setdatevalue(e);
    setdate(date);
  };
  return (
    <div className="modleWrapper">
      <SecondPageInput>
        <InputLable>
          Choose Date
          <div style={{ display: "flex", position: "relative" }}>
            <DatePicker
              value={Datevalue}
              style={{ width: "100%" }}
              onChange={(e) => handleDate(e)}
            />
            <span className="datePickerIcon">
              <DatePickerIcon />
            </span>
          </div>
        </InputLable>
        <InputLable>
          Start
          <Select
            suffixIcon={<DropIcon />}
            onChange={(e) => handleselect(e, "start")}
            placeholder="00:00Am"
          >
            <Option key="10:00Am">10:00Am</Option>
            <Option key="12:00Am">12:00Am</Option>
            <Option key="03:00Am">03:00Am</Option>
          </Select>
        </InputLable>
        <InputLable>
          End
          <Select
            suffixIcon={<DropIcon />}
            onChange={(e) => handleselect(e, "end")}
            placeholder="00:00Am"
          >
            <Option key="10:00Am">10:00Am</Option>
            <Option key="12:00Am">12:00Am</Option>
            <Option key="03:00Am">03:00Am</Option>
          </Select>
        </InputLable>
        <InputLable>
          <div style={{ color: "transparent" }}>*</div>
          <Button
            style={{
              borderRadius: "7px",

              backgroundColor: "var(--lightGray)",
            }}
          >
            <GrayBoldText onClick={add}> +</GrayBoldText>
          </Button>
        </InputLable>
      </SecondPageInput>
      <div style={{ marginTop: "30px", marginBottom: "70px" }}>
        <BookedItem head>
          <div>Dates</div>
          <div>Start</div>
          <div>End</div>
        </BookedItem>
        <Space />
        <Scrollbars style={{ height: "90px" }}>
          <div style={{ width: "100%" }}>
            {Dayshow.map((item, i) => {
              return (
                <BookedItem key={i}>
                  <div>{item.data.replace("-", " ").replace("-", " ")}</div>
                  <GrayBoldText>{item.StTime}</GrayBoldText>
                  <GrayBoldText>{item.EnTime}</GrayBoldText>
                  <div>
                    <FaTrashAlt
                      color="var(--lighterGray)"
                      style={{ float: "right" }}
                    />
                  </div>
                </BookedItem>
              );
            })}
          </div>
        </Scrollbars>
        {/* <BookedItem>
          <div>15 Oct 2020</div>
          <GrayBoldText>09:00 Am</GrayBoldText>
          <GrayBoldText>06:00 Am</GrayBoldText>
          <div>
            <FaTrashAlt color="var(--lighterGray)" style={{ float: "right" }} />
          </div>
        </BookedItem> */}
      </div>
    </div>
  );
}
