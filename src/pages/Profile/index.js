import React, { useEffect, useState } from "react";
import SideBar from "../Sidebar";
import { CustomPageWrapper, PageContent } from "../shared/CustomPage";
import { Button, Col, Row, Input } from "antd";
import { GlobalStyle } from "../Dashboard";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";
import { CustomInput } from "../shared/SharedStyle";
import { BsExclamationCircle } from "react-icons/bs";
const ProfileContetn = styled.div`
  margin: 0 10%;
  border-radius: 10px;
  height: 600px;
  background-color: white;

  width: 80%;
  padding: 40px 60px;
`;
const ProfileHead = styled.div`
  margin: 20px 10%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const PageBack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;
const PageTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  font-weight: bold;
`;
const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fffff2;
  border: 1px solid var(--yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin-bottom: 15px;
  color: var(--yellow);
`;
const InputLable = styled.div`
  display: grid;
  grid-template-columns: 100px 300px;
  text-align: right;
  gap: 15px;
  margin: 10px 0;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  float: left;
`;
const Space = styled.div`
  margin-bottom: 25px;
`;
const DeleteAccount = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 40px;
  align-items: center;
  justify-content: centen;
`;
// const InputLable = styled.div`
//   display: flex;
//   gap: 10px;
// `;
function Index(props) {
  let user = props.admins.filter((i) => i.id === props.id);
  let data = {};
  user.map((i) => (data = i));
  useEffect(() => {
    if (localStorage.getItem("station_token")) {
    } else {
      props.history.push("/login");
    }
  }, []);
  return (
    <CustomPageWrapper>
      <GlobalStyle />
      <SideBar />
      <PageContent>
        <ProfileHead>
          <Link to="/">
            <PageBack>
              <BsArrowLeft />
              <div>Dashboard</div>
            </PageBack>
          </Link>
          <PageTitle>
            My Profile
            <div>
              <Button
                style={{
                  backgroundColor: "var(--yellow)",
                  borderRadius: "7px",
                  border: "none",
                  display: "flex",

                  height: "30px",
                }}
              >
                Save
              </Button>
            </div>
          </PageTitle>
        </ProfileHead>
        <ProfileContetn>
          <Form>
            <div style={{ width: "40%" }}>
              <ProfileImage>BA</ProfileImage>

              <Space>Upload Photo</Space>
            </div>
            <InputLable>
              Full Name
              <span style={{ display: "flex", gap: "5px" }}>
                <CustomInput value={data.name} />{" "}
                <CustomInput value={data.username} />
              </span>
            </InputLable>
            <InputLable>
              Email Address
              <CustomInput gray value="" />
            </InputLable>
            <InputLable>
              Password
              <CustomInput type="password" gray value="" />
            </InputLable>
            <Space>Change Password?</Space>
            <InputLable>
              Phone Number
              <CustomInput value="" />
            </InputLable>
            <DeleteAccount>
              Delet Your Account?
              <BsExclamationCircle color="var(--lighterGray)" />
            </DeleteAccount>
          </Form>{" "}
        </ProfileContetn>
      </PageContent>
    </CustomPageWrapper>
  );
}

export default Index;
