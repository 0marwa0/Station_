// create new booking  modle
import { CustomModleButton } from "../../shared/SharedComponents";

import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { FirstPage, SecondPage, ThirdPage, ForthPage } from "./Modle";
const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--lighterGray);
  float: left;
  margin: 0 3px;
  transition: all 10s ease;
`;
const CurrentDot = styled.span`
  width: 50px;
  height: 6px;
  border-radius: 20%;
  float: left;
  margin: 2px 3px;
  transition: all 10s ease;
  background-color: var(--yellow);
`;

const ModleTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px 40px;
`;

const ModleFooter = styled.div`
  display: flex;
  transition: all 0.3s ease;
  align-items: center;
  padding: 20px 40px;
  justify-content: space-between;
`;
class Index extends React.Component {
  state = {
    currentPage: 1,
    pagePerOnce: 1,

    pageNumber: 0,
  };
  prevPage = () => {
    const currentPage = this.state.currentPage;
    if (currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  };

  nextPage = () => {
    const currentPage = this.state.currentPage;
    const totalPge = Math.ceil(data.length / this.state.pagePerOnce);
    if (currentPage != totalPge) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  };

  render() {
    const indexOfLastPage = this.state.currentPage * this.state.pagePerOnce;
    const indexOfFirstPage = indexOfLastPage - this.state.pagePerOnce;
    const pages = data.slice(indexOfFirstPage, indexOfLastPage);
    console.log(this.state.currentPage);
    return (
      <div>
        <ModleTitle>
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>
            New Booking
          </div>
          <div>Create a booking for a costumer directly from reception</div>
        </ModleTitle>
        {pages.map((i) => {
          return (
            <div>
              {i.id === 1 ? (
                <FirstPage />
              ) : i.id === 2 ? (
                <SecondPage />
              ) : i.id === 3 ? (
                <ThirdPage />
              ) : i.id === 4 ? (
                <ForthPage />
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

                  transition: "all 10s ease",
                }}
              >
                {i.id === this.state.currentPage ? (
                  <CurrentDot></CurrentDot>
                ) : (
                  <Dot></Dot>
                )}
              </span>
            ))}
          </div>
          <span style={{ display: "flex", gap: "5px" }}>
            <CustomModleButton fun={this.prevPage}>back</CustomModleButton>
            <CustomModleButton Main fun={this.nextPage}>
              Next
            </CustomModleButton>
          </span>
        </ModleFooter>
      </div>
    );
  }
}

export default Index;
