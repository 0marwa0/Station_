import React from "react";
import SideBar from "../Sidebar";

import { BiExport, BiDollar } from "react-icons/bi";
import Reservation from "./Reservation";
import Statistic from "./Statistic";
import { AiOutlinePlus } from "react-icons/ai";
import { Col, Row, Input, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CustomButton } from "../shared/SharedComponents";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

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
  padding: 5px 15px;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Clander = styled.div`
  background-color: white;
  border-radius: 7px;
  width: 100%;
  height: 100%;
  border: 1px solid var(--lighterGray);
`;

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        Id: 2,
        Subject: "Paris",
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 12, 30),
      },
    ];
    this.state = {};
  }
  render() {
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
                  <a className="ant-dropdown-link">
                    This Month <DownOutlined />
                  </a>
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
                <CustomButton Main lable={`New Booking`}>
                  <AiOutlinePlus />
                </CustomButton>
              </ButtonGroup>
            </PageBtn>
          </Row>

          <Row style={{ display: "flex", gap: "35px" }}>
            <Col
              style={{
                width: "75%",

                height: "560px",
              }}
            >
              <Clander>
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                />
              </Clander>
            </Col>
            <Col style={{ width: "22%", height: "500px" }}>
              <Reservation />
              <Statistic />
            </Col>
          </Row>
        </PageContent>
      </CustomPageWrapper>
    );
  }
}

export default Booking;
