import React from "react";
import styled from "styled-components";
import { Widget } from "./index";
import { MdShowChart } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { StatisticData } from "../../fakeData";
import { BiDollar } from "react-icons/bi";
import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
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
const GrayText = styled.div`
  color: var(--lighterGray);
  font-size: 0.7vw;
`;
const menu2 = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
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

function Index() {
  return (
    <Widget main>
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

              <div>
                {item.name}
                <GrayText>{item.doc}</GrayText>
              </div>
              {item.time}
            </ReservationItem>
          );
        })}
      </div>
    </Widget>
  );
}

export default Index;
