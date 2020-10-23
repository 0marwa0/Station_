import React from "react";
import { Widget } from "./index";
import { ReservationsData } from "../../fakeData";
import styled from "styled-components";
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
const SeeAll = styled.div`
  text-align: center;

  cursor: pointer;
`;
function Index() {
  return (
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
                {item.name}
                <GrayText>{item.doc}</GrayText>
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