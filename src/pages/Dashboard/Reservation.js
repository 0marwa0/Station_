import React from "react";
import { Widget } from "./index";
import { ReservationsData } from "../../fakeData";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { monthNames } from "../shared/assets";

import { ReservationLoading } from "../shared/SharedComponents";
import { useState } from "react/cjs/react.development";
const ReservationItem = styled.div`
  display: grid;
  grid-template-columns: 15% max-content auto;
  width: 100%;
  padding-bottom: 9px;
  align-items: center;
  gap: 7px;

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
function Index(props) {
  let Data = [];
  // props.Reservations.map((item, i) =>
  //   Data.push({
  //     key: i,
  //     id: item.id,
  //     place: item.space.title,
  //     name: item.title,
  //     time: "a week ago",
  //     doc: item.organizer,
  //     date:
  //       item.createdAt.slice(0, 2) +
  //       " " +
  //       monthNames[
  //         item.createdAt.split("-")[1] === 0
  //           ? item.createdAt.split("-")[1].slice(1) - 1
  //           : item.createdAt.split("-")[1] - 1
  //       ] +
  //       " " +
  //       item.createdAt.split("-")[0],
  //   })
  // );

  const WidgetInner = styled.div`
    overflow: hidden;
    transition: 2s ease;
    max-height: ${(props) => (props.showall ? "auto" : "300px")};
  `;
  const [show, setshow] = useState(false);
  const ShowAll = () => {
    setshow(!show);
  };

  return (
    <Widget reservation>
      <WidgetInner showall={show}>
        <ItemHeader>
          <span style={{ fontWeight: "bold", fontSize: "1.2vw" }}>
            Pending Reservations
          </span>
          <NumBtn>{Data.length}</NumBtn>
        </ItemHeader>
        <div className="items">
          {/* {props.Loading ? (
            <ReservationLoading />
          ) : (
            [1, 2, 3].map((item, i) => {
              let place = item.place;

              return (
                <div key={i}>
                  <Link
                    to={{
                      pathname: "/bookingDetalis",
                      state: {
                        id: item.id,
                      },
                    }}
                  >
                    <ReservationItem>
                      {place === "Event Hall" ? (
                        <ReservIcon> Hall</ReservIcon>
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
            })
          )} */}
        </div>
      </WidgetInner>
      <SeeAll>
        <GrayText onClick={ShowAll}>
          {show ? "Show less " : " Show All"}
        </GrayText>
      </SeeAll>
    </Widget>
  );
}

export default Index;
