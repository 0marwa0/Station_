import React, { useState } from "react";
import SideBar from "../Sidebar";
import { BiExport, BiDollar } from "react-icons/bi";
import Reservation from "./Reservation";
import Statistic from "./Statistic";
import { AiOutlinePlus } from "react-icons/ai";
import { Col, Row, Input, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CustomButton } from "../shared/SharedComponents";
import FullCalendar from "@fullcalendar/react";
import { Modal } from "react-responsive-modal";

import NewBooking from "../Booking/NewBooking";
import dayGridPlugin from "@fullcalendar/daygrid";
import { RiArrowDropDownLine } from "react-icons/ri";
import Tooltip from "react-tooltip";
import {
  CustomPageWrapper,
  PageContent,
  PageTitle,
  PageBtn,
  ButtonGroup,
} from "../shared/CustomPage";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
  background-color:var(--lightGray)
}

`;
const colors = {
  color1: "var(--darkGreen)",
  color2: "var(--orange)",
  color3: "var(--blue)",
  color4: "var(--red)",
  color5: "var(--purple)",
};
const Data = [
  {
    title: "Fikra Space",
    start: "2020-11-01",
    end: "2020-11-1",
    data: [
      {
        title: "Fikra Space",
        day: "Sunday",
        date: "1 November 2020",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Fikra Space",
    start: "2020-11-07",
    end: "2020-11-06",
    data: [
      {
        title: "Fikra Space",
        day: " Wensday",
        date: "7 November 2020 ",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Fikra Space",
    start: "2020-11-13",
    end: "2020-11-13",
    data: [
      {
        title: "Fikra Space",
        day: "Tuesday",
        date: "13 November 2020",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Fikra Space",
    start: "2020-11-31",
    end: "2020-11-31",
    data: [
      {
        title: "Fikra Space",
        day: "Saturday",
        date: "31 November 2020",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Fikra Space",
    start: "2020-11-30",
    end: "2020-11-30",
    data: [
      {
        title: "Fikra Space",
        day: "Friday",
        date: "30 November 2020",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Fikra Space",
    start: "2020-11-18",
    end: "2020-11-21",
    data: [
      {
        title: "Fikra Space",
        day: "Sundey - Wednsday",
        date: "18 November 2020 -18 November 2020",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Fikra Space",
    start: "2020-11-19",
    end: "2020-11-21",
    data: [
      {
        title: "Fikra Space",
        day: "Monday - Tuesday",
        date: "18 November 2020 -20 November 2020",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Fikra Space",
    start: "2020-11-04",
    end: "2020-11-08",
    data: [
      {
        title: "Fikra Space",
        day: "Sundey - Wednsday",
        date: "4 November 2020 - 8 November 2020",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Fikra Space",
    start: "2020-11-04",
    end: "2020-11-06",
    data: [
      {
        title: "Fikra Space",
        day: "Sundey - Wednsday",
        date: "4 November 2020 - 6 November 2020",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
];

const menu = (
  <Menu>
    <Menu.Item>
      <a>Next month</a>
    </Menu.Item>
    <Menu.Item>
      <a>Previous month</a>
    </Menu.Item>
  </Menu>
);

export const Widget = styled.div`
  background-color: white;
  border-radius: 7px;
  border: 1px solid var(--lighterGray);
  display: flex;
  min-width: 200px;
  padding: 10px 7%;
  flex-direction: column;
  margin-bottom: ${(props) => (props.main ? "0" : "20px")};
`;
const Clander = styled.div`
  background-color: white;
  border-radius: 7px;
  padding: 15px 25px;
  height: 100%;
  border: 1px solid var(--lighterGray);
`;
const List = styled.div`
  color: #3b86ff;
  display: flex;
  align-items: cneter;
  margin-top: 4px;
`;
function Booking() {
  const onEnter = (item) => {
    let data;
    let color = item.event._def.ui.backgroundColor.replace(/^"(.*)"$/, "$1");

    item.event._def.extendedProps.data.map((item) => (data = item));
    let node = document.createElement("div");
    let DayWrap = document.createElement("div");
    let TimeWrap = document.createElement("div");
    let TitleWrap = document.createElement("div");
    DayWrap.setAttribute("id", "flex-col");
    TimeWrap.setAttribute("id", "flex-col");
    TitleWrap.setAttribute("id", "flex-col");
    let day = document.createElement("div");
    let date = document.createElement("div");
    let titleLable = document.createElement("div");
    let title = document.createElement("div");
    let timeLable = document.createElement("div");
    let time = document.createElement("div");
    title.style.color = `${color}`;
    node.setAttribute("id", "pupup");
    item.el.setAttribute("id", "holder");

    if (item.el.id === "holder") {
      node.style.border = `1px solid ${color}`;

      day.innerHTML = `${data.day}`;
      date.innerHTML = `${data.date}`;
      title.innerHTML = `${data.title}`;
      titleLable.innerHTML = `Event Title`;
      time.innerHTML = `${data.time}`;
      timeLable.innerHTML = `Time`;
      DayWrap.appendChild(day);
      DayWrap.appendChild(date);
      TitleWrap.appendChild(titleLable);
      TitleWrap.appendChild(title);
      TimeWrap.appendChild(timeLable);
      TimeWrap.appendChild(time);
      node.appendChild(DayWrap);
      node.appendChild(TitleWrap);
      node.appendChild(TimeWrap);

      item.el.appendChild(node);
      console.log(item.el);
    }
  };
  const onLeave = (item) => {
    if (document.getElementById("pupup")) {
      item.el.removeChild(document.getElementById("pupup"));
    } else {
    }
    return item;
  };
  const [open, setOpen] = useState(false);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  return (
    <CustomPageWrapper>
      <GlobalStyle />
      <SideBar />
      <PageContent>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70px",
          }}
        >
          <PageTitle>Dashboard</PageTitle>
          <span style={{ marginTop: "20px", color: "var(--darkGray)" }}>
            Welcome Back, <h8 style={{ color: "black" }}>Marwa!</h8>
          </span>
        </Row>
        <Row>
          <PageBtn>
            <ButtonGroup>
              <Dropdown overlay={menu}>
                <List>
                  This Month{" "}
                  <RiArrowDropDownLine
                    size="25px"
                    style={{
                      height: "23px",
                    }}
                  />
                </List>
              </Dropdown>
              <Input
                style={{
                  borderRadius: "6px",
                  border: "1px solid var(--lighterGray)",
                  height: "30px",
                  color: "var(--lighterGray)",
                  width: "300px",
                }}
                placeholder="Advanced Search"
              />
            </ButtonGroup>
            <ButtonGroup>
              <CustomButton lable="Print">
                <BiExport />
              </CustomButton>
              <CustomButton Main onOpen={onOpenModal} lable="New Booking">
                <AiOutlinePlus />
              </CustomButton>
            </ButtonGroup>
          </PageBtn>
        </Row>

        <Row style={{ display: "flex" }}>
          <Col
            style={{
              width: "71%",
              marginRight: "2%",
              height: "50rem",
              marginBottom: "10%",
            }}
          >
            <Clander>
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                eventMouseEnter={(item) => onEnter(item)}
                eventMouseLeave={(item) => onLeave(item)}
                events={Data}
              />
            </Clander>
          </Col>
          <Col style={{ width: "27%", height: "100%" }}>
            <Reservation />
            <Statistic />
          </Col>
        </Row>
      </PageContent>
      <Modal
        closeOnOverlayClick={false}
        open={open}
        onClose={() => onOpenModal(false)}
        center
        showCloseIcon={false}
        classNames={{
          modal: "customModal",
        }}
      >
        <NewBooking from="Dashboard" Close={() => onOpenModal(false)} />
      </Modal>
    </CustomPageWrapper>
  );
}

export default Booking;
