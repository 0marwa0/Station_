import React, { useState } from "react";
import { Col, Row, Menu, Dropdown } from "antd";
import {
  CustomPageWrapper,
  PageContent,
  PageTitle,
} from "../shared/CustomPage";
import { DownOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import SideBar from "../Sidebar";
import { PageBack } from "../Profile";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonStyled } from "../shared/SharedStyle";
import { GlobalStyle } from "../Dashboard";
import { UserImage } from "../Sidebar";
import { BsThreeDotsVertical } from "react-icons/bs";
const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const Wrapper = styled(Row)`
  background-color: white;
  width: 100%;
  border: 1px solid var(--lighterGray);
  borderradius: 5px;
  margin-left: 20px;
  padding: 20px 40px;
`;
const GrayText = styled.div`
  font-size: 12px;
  color: var(--darkGray);
  width: 100%;
`;
const EventDetails = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 16px;
  width: 100%;

  padding-top: 20px;
  padding-right: 25px;
  padding-bottom: 20px;
`;
const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
`;
const Activity = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 25px;
  border-bottom: 1px solid var(--lighterGray);
`;
const ActivityItem = styled.div`
  display: grid;
  grid-template-columns: 100px 80px;
  gap: 5px;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0;
  align-items: center;
`;
const BoldText = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
const Date = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  padding: 7px;
  background-color: ${(props) => (props.odd ? "var(--lightGray)" : "none")};
  border-bottom: ${(props) =>
    props.item ? "1px solid var(--lighterGray)" : "none"};
  grid-template-columns: 1fr 1fr 1fr auto;
`;
const DateInfo = styled.div`
  border: 1px solid var(--lighterGray);
  border-radius: 6px;
  border-bottom: none;
  margin-bottom: 15px;
`;
const UserHolder = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;

  justify-content: center;
`;
const BookingActions = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding-bottom: 10px;
`;
const Reject = styled.div`
  background-color: var(--lightRed);
  color: var(--red);
  padding: 2px 8px;
  height: 22px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
`;
const Accept = styled.div`
  background-color: var(--LightGreen);
  color: var(--darkGreen);
  padding: 2px 8px;
  height: 22px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
`;
const Pending = styled.div`
  color: var(--orange);
  font-size: 16px;
`;
const menu = (
  <Menu>
    <Menu.Item>
      <a>Delete</a>
    </Menu.Item>
  </Menu>
);
const Index = (props) => {
  let history = useHistory();

  const [BookingStatus, setBookingStatus] = useState(false);
  const setBooking = (status) => {
    setBookingStatus(status);
  };
  console.log(history, "should be the prev page");
  return (
    <CustomPageWrapper>
      <GlobalStyle />
      <SideBar />
      <PageContent>
        <div style={{ marginTop: "40px" }}>
          <Wrapper>
            <Link to="/Booking">
              <PageBack>
                <BsArrowLeft />
                <div>Booking</div>
              </PageBack>
            </Link>
            <PageActions>
              <PageTitle>Event 2020 19x</PageTitle>

              <div style={{ display: "flex", gap: "10px" }}>
                <ButtonStyled>Edit</ButtonStyled>
                {!BookingStatus ? null : (
                  <ButtonStyled Main>View Event</ButtonStyled>
                )}
              </div>
            </PageActions>

            <BookingActions>
              {BookingStatus ? (
                <div>Published</div>
              ) : (
                <Dropdown overlay={menu}>
                  <Pending>
                    <spna>
                      Pending
                      <DownOutlined
                        style={{ fontSize: "10px", margin: " 0 5px" }}
                      />
                    </spna>
                  </Pending>
                </Dropdown>
              )}
              {!BookingStatus ? (
                <Reject onClick={() => setBooking(true)}>Reject</Reject>
              ) : null}
              {!BookingStatus ? (
                <Accept onClick={() => setBooking(true)}>Accept</Accept>
              ) : null}
            </BookingActions>
            <Row
              style={{
                borderTop: "1px solid var(--lighterGray)",
                display: "flex",
                width: "100%",
              }}
            >
              <Col
                style={{
                  width: "70%",
                  paddingTop: "20px",
                  paddingBottom: "30px",
                  paddingRight: "50px",
                  borderRight: "1px solid var(--lighterGray)",
                }}
              >
                <BoldText>Event Details</BoldText>
                <EventDetails>
                  <DetailItem>
                    <GrayText> Space</GrayText>

                    <div>Event Hall</div>
                  </DetailItem>
                  <DetailItem>
                    <GrayText> Cooffee Break</GrayText>

                    <div>5,000 Package</div>
                  </DetailItem>
                  <DetailItem>
                    <GrayText> Hall Design</GrayText>

                    <div>Rounded Table</div>
                  </DetailItem>
                  <DetailItem>
                    <GrayText> Date</GrayText>

                    <div>Event Hall</div>
                  </DetailItem>
                  <DetailItem>
                    <GrayText> No. of People</GrayText>

                    <div>72</div>
                  </DetailItem>
                  <DetailItem>
                    <GrayText> Entity Type</GrayText>

                    <div>Enterprises</div>
                  </DetailItem>
                  <DetailItem>
                    <GrayText> Total Price</GrayText>

                    <div>$ 120,000,00</div>
                  </DetailItem>
                  <DetailItem>
                    <GrayText>Received</GrayText>

                    <div>$53,530,00</div>
                  </DetailItem>
                  <DetailItem>
                    <GrayText>Lunches</GrayText>

                    <div>No. 5</div>
                  </DetailItem>
                </EventDetails>
                <Col>
                  <Date>
                    <div>Data</div>
                    <div>Starting Time</div>
                    <div>Ending Time</div>
                  </Date>
                  <DateInfo>
                    <Date item>
                      <GrayText>13 Oct 2020</GrayText>
                      <GrayText>06:00 PM</GrayText>
                      <GrayText>09:00 PM</GrayText>
                      <GrayText>
                        <BsThreeDotsVertical />
                      </GrayText>
                    </Date>
                    <Date odd item>
                      <GrayText>13 Oct 2020</GrayText>
                      <GrayText>06:00 PM</GrayText>
                      <GrayText>09:00 PM</GrayText>
                      <GrayText>
                        <BsThreeDotsVertical />
                      </GrayText>
                    </Date>
                    <Date item>
                      <GrayText>13 Oct 2020</GrayText>
                      <GrayText>06:00 PM</GrayText>
                      <GrayText>09:00 PM</GrayText>
                      <GrayText>
                        <BsThreeDotsVertical />
                      </GrayText>
                    </Date>{" "}
                    <Date odd item>
                      <GrayText>13 Oct 2020</GrayText>
                      <GrayText>06:00 PM</GrayText>
                      <GrayText>09:00 PM</GrayText>
                      <GrayText>
                        <BsThreeDotsVertical />
                      </GrayText>
                    </Date>
                  </DateInfo>
                  <DetailItem>
                    <div> Commnets</div>

                    <GrayText>
                      where this aims to gather youth who have ideas to
                      implement them as entrepreneurial businesses on the ground{" "}
                    </GrayText>
                  </DetailItem>
                </Col>
              </Col>
              <Col style={{ width: "30%" }}>
                <Activity>
                  <DetailItem>
                    <BoldText>Activity</BoldText>
                    <GrayText>Created by</GrayText>

                    <ActivityItem>
                      <UserHolder>
                        <UserImage
                          src={require("../../public/images/user2.png")}
                        />
                        <span> Murtadha</span>
                      </UserHolder>
                      <GrayText>a week ago</GrayText>
                    </ActivityItem>
                  </DetailItem>
                  <DetailItem>
                    <GrayText>Approved by</GrayText>
                    {BookingStatus ? (
                      <ActivityItem>
                        <UserHolder>
                          <UserImage
                            src={require("../../public/images/user2.png")}
                          />
                          <span> Murtadha</span>
                        </UserHolder>
                        <GrayText>a week ago</GrayText>
                      </ActivityItem>
                    ) : null}
                  </DetailItem>
                </Activity>
              </Col>
            </Row>
          </Wrapper>
        </div>
      </PageContent>
    </CustomPageWrapper>
  );
};

export default Index;
