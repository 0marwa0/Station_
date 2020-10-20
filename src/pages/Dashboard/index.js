import React from "react";
import SideBar from "../Sidebar";
import Sidebar from "../Sidebar";
import { BiImport, BiExport, BiDollar } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { Col, Row, Input, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { MdEventNote, MdShowChart } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import {
  CustomPageWrapper,
  PageContent,
  PageTitle,
  PageBtn,
  ButtonGroup,
  CustomButton,
} from "../shared/CustomPage";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body{
  background-color:var(--lightGray)
}

`;
const menu2 = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
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
const StatisticData = [
  {
    name: "Total Reservations",
    time: "3,254",
    doc: "245k New Products",
  },
  {
    name: "Total Events",
    time: "63",
    doc: "12,5k New Products",
  },
  {
    name: "Total Booked Hours",
    time: "3,254",
    doc: "245k New Products",
  },
  {
    name: "Total Cost",
    time: "63",
    doc: "12,5k New Products",
  },
  {
    name: "Total Income",
    time: "63",
    doc: "12,5k New Products",
  },
];
const ReservationsData = [
  {
    place: "Hall",
    name: "Fikra Space",
    time: "4 week ago",
    doc: "Dr.Ahmed Hameed|20April2020",
  },
  {
    place: "A",
    name: "Fikra Space",
    time: "4 week ago",
    doc: "Dr.Ahmed Hameed|20April2020",
  },
  {
    place: "B",
    name: "Fikra Space",
    time: "4 week ago",
    doc: "Dr.Ahmed Hameed|20April2020",
  },
  {
    place: "C",
    name: "Fikra Space",
    time: "4 week ago",
    doc: "Dr.Ahmed Hameed|20April2020",
  },
];
const Widget = styled.div`
  background-color: white;
  border-radius: 7px;
  border: 1px solid var(--lighterGray);
  display: flex;
  padding: 5px 15px;
  flex-direction: column;
  margin-bottom: 5px;
`;
const ReservationItem = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 7px;
  padding: 5px 0;
  font-size: 1vw;
`;
const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  align-items: center;
`;
const ReservIcon = styled.div`
  width: 30px;
  height: 32px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  background-color: var(--lightBlue);
`;

const SubA = styled.div`
  width: 30px;
  height: 32px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  background-color: var(--lightRed);
`;
const SubB = styled.div`
  width: 30px;
  height: 32px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  background-color: var(--lightOrange);
`;
const SubC = styled.div`
  width: 30px;
  height: 32px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  background-color: var(--LightGreen);
`;
const GrayText = styled.div`
  color: var(--lighterGray);
  font-size: 0.7vw;
`;
const NumBtn = styled.div`
  background-color: var(--yellow);
  padding: 3.5px 6px;
  border-radius: 5px;
  font-size: 1vw;
`;
const Clander = styled.div`
  background-color: white;
  border-radius: 7px;
  width: 100%;
  height: 100%;
  border: 1px solid var(--lighterGray);
`;
const SeeAll = styled.div`
  text-align: center;

  cursor: pointer;
`;
const TotleReservationsIcon = styled.div`
  width: 30px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  background-color: var(--LightGreen);
`;
const TotlaEvents = styled.div`
  width: 30px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  background-color: var(--lightOrange);
`;
const TotlaBooked = styled.div`
  width: 30px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  background-color: var(--lightRed);
`;
const TotlaCost = styled.div`
  width: 30px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  background-color: var(--LightGreen);
`;
const ItemText = styled.div``;
class Booking extends React.Component {
  constructor(props) {
    super(props);
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

          <Row style={{ display: "flex", gap: "3%" }}>
            <Col
              style={{
                width: "75%",

                height: "560px",
              }}
            >
              <Clander></Clander>
            </Col>
            <Col style={{ width: "22%", height: "500px" }}>
              <Widget>
                <ItemHeader>
                  <span style={{ fontWeight: "bold", fontSize: "1.2vw" }}>
                    Pending Reservations
                  </span>
                  <NumBtn>12</NumBtn>
                </ItemHeader>{" "}
                <div className="items">
                  {ReservationsData.map((item, i) => {
                    let place = item.place;
                    // i===ReservationsData.length?:

                    return (
                      <ReservationItem>
                        {place === "Hall" ? (
                          <ReservIcon>{item.place}</ReservIcon>
                        ) : place === "A" ? (
                          <SubA>{item.place}</SubA>
                        ) : place === "B" ? (
                          <SubB>{item.place}</SubB>
                        ) : place === "C" ? (
                          <SubC>{item.place}</SubC>
                        ) : (
                          ""
                        )}

                        <ItemText>
                          {item.name}
                          <GrayText>{item.doc}</GrayText>
                        </ItemText>
                        <GrayText>{item.time}</GrayText>
                      </ReservationItem>
                    );
                  })}
                </div>
                <SeeAll>
                  <GrayText>Show All</GrayText>
                </SeeAll>
              </Widget>
              <Widget>
                <ItemHeader>
                  <span style={{ fontWeight: "bold", fontSize: "1.2vw" }}>
                    Statistics
                  </span>
                  <Dropdown overlay={menu2}>
                    <Button
                      style={{
                        padding: " 5px 10px",
                        borderRadius: "10px",
                      }}
                    >
                      Oct <DownOutlined />
                    </Button>
                  </Dropdown>
                </ItemHeader>{" "}
                <div className="items">
                  {StatisticData.map((item, i) => {
                    let name = item.name;
                    return (
                      <ReservationItem>
                        {name === "Total Reservations" ? (
                          <TotleReservationsIcon>
                            <GiElectric color="var(--blue)" size={15} />
                          </TotleReservationsIcon>
                        ) : name === "Total Events" ? (
                          <TotlaEvents>
                            {" "}
                            <MdShowChart color="var(--orange)" size={20} />
                          </TotlaEvents>
                        ) : name === "Total Booked Hours" ? (
                          <TotlaBooked>
                            <MdShowChart color="var(--red)" size={20} />
                          </TotlaBooked>
                        ) : name === "Total Cost" ? (
                          <TotlaCost>
                            <BiDollar color="var(--darkGreen)" size={17} />
                          </TotlaCost>
                        ) : (
                          <TotleReservationsIcon>
                            <GiElectric color="var(--blue)" size={15} />
                          </TotleReservationsIcon>
                        )}

                        <ItemText>
                          {item.name}
                          <GrayText>{item.doc}</GrayText>
                        </ItemText>
                        {item.time}
                      </ReservationItem>
                    );
                  })}
                </div>
              </Widget>
            </Col>
          </Row>
        </PageContent>
      </CustomPageWrapper>
    );
  }
}

export default Booking;
