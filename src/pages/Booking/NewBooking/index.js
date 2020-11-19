// create new booking  modle
import { CustomModleButton } from "../../shared/SharedComponents";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../../public/images/close.svg";
import { FirstPage, SecondPage, ThirdPage, ForthPage } from "./Modal";
const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const Dot = styled.span``;
const CurrentDot = styled.span``;

const ModleTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 40px;
`;

const ModleFooter = styled.div`
  display: flex;
  transition: all 0.3s ease;
  align-items: center;
  padding: 40px;
  justify-content: space-between;
`;
function Index(props) {
  const [currentPage, setcurrentPage] = useState(1);
  const [pagePerOnce, setpagePerOnce] = useState(1);
  const [pageNumber, setpageNumber] = useState(0);
  const prevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    const totalPge = Math.ceil(data.length / pagePerOnce);
    if (currentPage != totalPge) {
      setcurrentPage(currentPage + 1);
    }
  };

  const indexOfLastPage = currentPage * pagePerOnce;
  const indexOfFirstPage = indexOfLastPage - pagePerOnce;
  const pages = data.slice(indexOfFirstPage, indexOfLastPage);
  console.log(currentPage);

  return (
    <div>
      <ModleTitle>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          New Booking
          <Close onClick={props.Close} cursor="pointer" />
          {/* <AiOutlineClose  /> */}
        </div>
        <div style={{ color: "#8F8F8F" }}>
          Create a booking for a costumer directly from reception
        </div>
      </ModleTitle>
      {pages.map((i) => {
        return (
          <div>
            {i.id === 1 ? (
              <FirstPage handleInput={props.handleInput} />
            ) : i.id === 2 ? (
              <SecondPage handleInput={props.handleInput} />
            ) : i.id === 3 ? (
              <ThirdPage handleInput={props.handleInput} />
            ) : i.id === 4 ? (
              <ForthPage handleInput={props.handleInput} />
            ) : (
              ""
            )}
          </div>
        );
      })}
      <ModleFooter>
        <div>
          {data.map((i) => (
            <span
              style={{
                width: "200px",
              }}
            >
              {i.id === currentPage ? (
                <span className="cDot"></span>
              ) : (
                <span className="dot"></span>
              )}
            </span>
          ))}
        </div>
        <span style={{ display: "flex", gap: "5px" }}>
          {currentPage === 1 ? null : (
            <CustomModleButton fun={prevPage} extra>
              Back
            </CustomModleButton>
          )}
          {currentPage === 4 ? (
            <Link to="/BookingDetalis">
              <CustomModleButton main extra>
                finsh
              </CustomModleButton>
            </Link>
          ) : (
            <CustomModleButton main extra fun={nextPage}>
              Next
            </CustomModleButton>
          )}
        </span>
      </ModleFooter>
    </div>
  );
}

export default Index;
