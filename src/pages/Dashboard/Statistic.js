import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Widget } from "./index";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ReactComponent as DropIcon } from "../../public/images/dropdown.svg";
import { Mesg, FailedMesg } from "../../API/APIMessage";
import { LoadData } from "../../API";
import ContentLoader from "react-content-loader";

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
  padding: 7px 0;
  align-items: center;
  color: var(--darkBlue);
  font-size: 1vw;
`;
const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  align-items: center;
`;
const GrayText = styled.div`
  color: var(--textGray);
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
  width: 2.6vw;
  height: 2.5vw;
  border-radius: 45%;
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  background-color: var(--LightGreen);
`;
const TotlaEvents = styled.div`
  width: 2.6vw;
  height: 2.5vw;
  border-radius: 45%;
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  background-color: var(--lightOrange);
`;
const TotlaBooked = styled.div`
  width: 2.6vw;
  height: 2.5vw;

  border-radius: 45%;
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  background-color: var(--lightRed);
`;
const TotlaCost = styled.div`
  width: 2.6vw;
  height: 2.5vw;
  border-radius: 45%;
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  background-color: var(--LightGreen);
`;
const BoldText = styled.div`
  color: black;
  font-weight: 600;
  font-size: 0.9vw;
`;
const DropBtn = styled.div`
  padding: 6px 8px;
  borderradius: 10px;
  height: 23px;
  font-size: 12px;
  display: flex;
  align-items: center;
  width: 65px;
  justify-content: space-between;
`;
function Index(props) {
  const [Loading, setLoading] = useState(false);
  const [statistics, setstatistics] = useState({});
  useEffect(() => {
    setLoading(true);
    LoadData(
      "statistics",
      (err, data) => {
        setLoading(false);

        setstatistics(data);

        //   console.log(data, "statices");
        if (err) {
          Mesg(err);
        }
      },
      (err) => {
        setLoading(false);
        FailedMesg(err, "Something worng happend !");
        console.log(err, "failed");
      }
    );
  }, []);

  const Lable = (name) => {
    let Lable = "";
    switch (name) {
      case "income":
        Lable = "";
        break;
      case "resevation":
        Lable = "Total Reservations";
        break;

      case "timeTotal":
        Lable = "";
        break;

      default:
        break;
    }
  };

  return (
    <Widget main>
      <ItemHeader>
        <span style={{ fontWeight: "bold", fontSize: "1.2vw" }}>
          Statistics
        </span>
        <Dropdown overlay={menu2}>
          <DropBtn>
            Oct
            <DropIcon />
          </DropBtn>
        </Dropdown>
      </ItemHeader>{" "}
      <div>
        {Loading ? (
          [1, 2, 3].map((i) => {
            return (
              <div>
                <ContentLoader
                  speed={1.5}
                  width="100%"
                  height="55px"
                  viewBox="0 0 600 80"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  {...props}
                >
                  <circle cx="40" cy="40" r="40" />
                  <rect x="520" y="8" rx="3" ry="90" width="88" height="15" />
                </ContentLoader>
              </div>
            );
          })
        ) : (
          <div>
            <ReservationItem>
              <TotleReservationsIcon>
                <GiElectric color="var(--blue)" size={15} />
              </TotleReservationsIcon>
              <div>
                Total Reservations
                <GrayText></GrayText>
              </div>
              <BoldText>{statistics.resevation}</BoldText>
            </ReservationItem>

            <ReservationItem>
              <TotlaEvents>
                <MdShowChart color="var(--orange)" size={20} />{" "}
              </TotlaEvents>
              <div>
                Total Time
                <GrayText></GrayText>
              </div>
              <BoldText>{statistics.timeTotal}</BoldText>
            </ReservationItem>

            <ReservationItem>
              <TotlaCost>
                <BiDollar color="var(--darkGreen)" size={17} />
              </TotlaCost>
              <div>
                Income
                <GrayText></GrayText>
              </div>
              <BoldText>{statistics.income}</BoldText>
            </ReservationItem>
          </div>
        )}
        {/* ) : name === "Total Events" ? (
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
          )} */}

        {/* );
        })} */}
      </div>
    </Widget>
  );
}

export default Index;
