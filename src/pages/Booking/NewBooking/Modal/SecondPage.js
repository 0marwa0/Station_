import React, { useState, useEffect, useContext } from "react";
import { DatePicker, Button } from "antd";

import { Values } from "../../index";
import Moment from "react-moment";
import { ReactComponent as DatePickerIcon } from "../../../../public/images/solid calendar-alt.svg";
import "react-datepicker/dist/react-datepicker.css";
import { Select } from "antd";
import { ReactComponent as DropIcon } from "../../../../public/images/dropdown.svg";
import { FaTrashAlt } from "react-icons/fa";
import { DateName, getTime } from "../../../Dashboard";

import { Space, GrayBoldText, SecondPageInput, BookedItem } from "./index";
import { InputLable } from "../../../shared/SharedStyle";
import { Day } from "@syncfusion/ej2-react-schedule";
const { Option } = Select;
export default function SecondPage(props) {
  // dayValues.DateValues
  const [Days, setsDays] = useState([]);
  const dayValues = useContext(Values);

  const [Privew, setPrivew] = useState(dayValues.days);
  const [Dayshow, setsDayshow] = useState([]);
  const [date, setdate] = useState([]);
  const [Editeddate, setEditeddate] = useState("");
  const [Datevalue, setdatevalue] = useState("");
  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [count, setcount] = useState(0);
  const add = () => {
    setcount(count + 1);
    Dayshow.push({ id: count, data: Editeddate, StTime: start, EnTime: end });
    setsDayshow(Dayshow);
    let Days = [];

    for (let i = 0; i < Dayshow.length; i++) {
      Days.push({
        start: {
          dateTime: Dayshow[i].data + "T" + Dayshow[i].StTime + ":00+03:00",
        },
        end: {
          dateTime: Dayshow[i].data + "T" + Dayshow[i].EnTime + ":00+03:00",
        },
      });
    }

    setsDays(Days);
    let d = [];
    d = Days;
    let privew = [];
    for (let i = 0; i < Days.length; i++) {
      privew.push({ start: Days[i].start.dateTime, end: Days[i].end.dateTime });
    }
    setPrivew(privew);
    props.handleselect(Days, "days", privew);

    console.log(Dayshow, Days, Privew);
  };
  const onDelete = (id) => {
    let data = Privew.filter((item, i) => i != id);
    let Day = Days.filter((item, i) => i != id);

    props.handleselect(Day, "days", data);
    setPrivew(data);
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
    setEditeddate(date);
    setdatevalue(e);
    setdate(date);
  };
  useEffect(() => {}, []);
  return (
    <Values.Consumer>
      {({ DateValues }) => (
        <div className="modleWrapper">
          {/* {console.log(days, "context days")} */}
          <SecondPageInput>
            <InputLable>
              Choose Date
              <div style={{ display: "flex", position: "relative" }}>
                <DatePicker
                  value={Datevalue}
                  placeholder="DD / MM / YYYY"
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
                placeholder="00:00Am">
                <Option key="10:00">10:00Am</Option>
                <Option key="12:00">12:00Am</Option>
                <Option key="03:00">03:00Am</Option>
              </Select>
            </InputLable>
            <InputLable>
              End
              <Select
                suffixIcon={<DropIcon />}
                onChange={(e) => handleselect(e, "end")}
                placeholder="00:00Am">
                <Option key="10:00">10:00Am</Option>
                <Option key="12:00">12:00Am</Option>
                <Option key="03:00">03:00Am</Option>
              </Select>
            </InputLable>
            <InputLable>
              <div style={{ color: "transparent" }}>*</div>
              <Button
                onClick={add}
                style={{
                  borderRadius: "7px",
                  backgroundColor: "var(--lightGray)",
                }}>
                <GrayBoldText> +</GrayBoldText>
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
            {/* //  <Scrollbars style={{ height: "90px",width:"420px" }}> */}
            <div style={{ width: "100%", height: "90px" }}>
              {Privew.map((item, i) => {
                return (
                  <BookedItem key={i}>
                    <div>
                      <Moment format="DD-MMM-yyy">{item.start}</Moment>
                    </div>
                    <GrayBoldText>
                      <Moment format="HH-mm">{item.start}</Moment>
                    </GrayBoldText>
                    <GrayBoldText>
                      <Moment format="HH-mm">{item.end}</Moment>
                    </GrayBoldText>
                    <div>
                      <FaTrashAlt
                        color="var(--lighterGray)"
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={() => onDelete(i)}
                      />
                    </div>
                  </BookedItem>
                );
              })}
            </div>
            {/* </Scrollbars> */}
          </div>
        </div>
      )}
    </Values.Consumer>
  );
}
