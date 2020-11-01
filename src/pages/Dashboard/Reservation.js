import React from "react";
import { Widget } from "./index";
import { ReservationsData } from "../../fakeData";
import styled from "styled-components";
const ReservationItem = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 30px max-content auto;
  gap: 9px;
  padding-bottom: 9px;

  padding-top: 9px;
  font-size: 1vw;
`;
const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  align-items: center;
`;
const ReservIcon = styled.div`
  width: 31px;
  height: 33px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: center;
  background-color: var(--lightBlue);
`;

const SubA = styled.div`
  width: 31px;
  height: 33px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: center;
  background-color: var(--lightRed);
`;
const SubB = styled.div`
  width: 31px;
  height: 33px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: center;
  background-color: var(--lightOrange);
`;
const SubC = styled.div`
  width: 31px;
  height: 33px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: 12px;
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
              <GrayText>{item.time}</GrayText>
            </ReservationItem>
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
