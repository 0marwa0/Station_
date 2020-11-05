import React from "react";
import { Widget } from "./index";
import { ReservationsData } from "../../fakeData";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ReservationItem = styled.div`
  display: grid;
  grid-template-columns: 15% max-content auto;
  width: 100%;
  padding-bottom: 9px;
  align-items: center;
  gap: 3%;
  cursor: pointer;
  padding-top: 9px;
`;
const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`;
// padding: 10px 7% 10px 7%;
const ReservIcon = styled.div`
  width: 2.8vw;
  height: 2.8vw;
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: 1vw;
  justify-content: center;
  background-color: var(--lightBlue);
`;

const SubA = styled.div`
  width: 2.8vw;
  height: 2.8vw;
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: 1vw;
  justify-content: center;
  background-color: var(--lightRed);
`;
const SubB = styled.div`
  width: 2.8vw;
  height: 2.8vw;
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: 1vw;
  justify-content: center;
  background-color: var(--lightOrange);
`;
const SubC = styled.div`
  width: 2.8vw;
  height: 2.8vw;
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: 1vw;
  justify-content: center;
  background-color: var(--LightGreen);
`;
const GrayText = styled.span`
  color: var(--textGray);
  display: flex;
  font-size: 0.7vw;
`;
const NumBtn = styled.div`
  background-color: var(--yellow);
  padding-top: 2px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  font-size: 0.8vw;
`;
const SeeAll = styled.div`
  text-align: center;
  padding-top: 5px;
  display: flex;
  algin-items: center;
  justify-content: center;

  cursor: pointer;
`;
function Index() {
  return (
    <Widget reservation>
      <ItemHeader>
        <span style={{ fontWeight: "bold", fontSize: "1.2vw" }}>
          Pending Reservations
        </span>
        <NumBtn>12</NumBtn>
      </ItemHeader>{" "}
      <div className="items">
        {ReservationsData.map((item, i) => {
          let place = item.place;

          return (
            <div>
              <Link to="/BookingDetalis">
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

                  <div>
                    <span> {item.name}</span>
                    <div style={{ marginTop: "-4px" }}>
                      <GrayText>
                        <span>{item.doc} </span>
                        <span
                          style={{
                            width: "7px",

                            textAlign: "center",
                          }}
                        >
                          |
                        </span>
                        <span> {item.date}</span>
                      </GrayText>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: "0.8vw",
                      color: "var(--textGray)",

                      paddingRight: "2px",
                      justifyContent: "flex-end",
                      textAlign: "right",
                      backgroundColor: "white",
                    }}
                  >
                    {item.time}
                  </div>
                </ReservationItem>
              </Link>
            </div>
          );
        })}
      </div>
      <SeeAll>
        <GrayText>Show All</GrayText>
      </SeeAll>
    </Widget>
  );
}

export default Index;
