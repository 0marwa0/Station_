import React, { useState, useEffect } from "react";
import { SuccessMesg, FailedMesg, Mesg } from "../../API/APIMessage";
import { LoadData, addData } from "../../API";
import { monthNames } from "../shared/assets";

import { Col, Row, Menu, Dropdown } from "antd";
import {
  CustomPageWrapper,
  PageContent,
  PageTitle,
} from "../shared/CustomPage";
import { DownOutlined } from "@ant-design/icons";
import { useHistory, useLocation, useParams } from "react-router-dom";
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
  let location = useLocation();
  const [Id, setId] = useState("");
  const [data, setdata] = useState({});

  const [Loading, setLoading] = useState(false);
  const [BookingStatus, setBookingStatus] = useState(false);
  const setBooking = (status) => {
    setBookingStatus(status);
  };
  let { id } = useParams();

  useEffect(() => {
    // console.log(id, "detales loacton");
    if (localStorage.getItem("station_token")) {
      setId(id);
      getDetalis();
    } else {
      props.history.push("/login");
    }
  }, []);
  const getDetalis = () => {
    LoadData(
      `book/${id}`,
      (err, data) => {
        setLoading(false);

        //setarticles(data.data.rows);
        // console.log("detalils here", data.data);
        setdata(data.data);
        if (err) {
          Mesg(err);
        }
      },
      (err) => {
        setLoading(false);
        FailedMesg(err, "Something worng happend !");
        // console.log(err, "failed");
      }
    );
  };

  const Recject = () => {
    let data = {
      id: Id,
    };

    setLoading(true);
    addData(
      "book/reject",
      data,
      (mesg, Data) => {
        SuccessMesg("Reservation Rejected !");
        setLoading(false);
        setId("");
        props.history.push("/");
      },
      (err) => {
        setLoading(false);
        setId("");

        FailedMesg(err);
      }
    );
  };
  const Approve = () => {
    let data = {
      id: Id,
    };

    setLoading(true);
    addData(
      "book/approve",
      data,
      (mesg, Data) => {
        // console.log(Data, "came whti the reject");
        SuccessMesg("Reservation Approved!");
        setLoading(false);
        setId("");
        setBooking(true);
      },
      (err) => {
        setLoading(false);
        setId("");

        FailedMesg(err);
      }
    );
  };
  let Data = data ? data : {};

  // console.log(data);
  return (
    <CustomPageWrapper>
      <GlobalStyle />
      <SideBar />
      <PageContent>
        <div style={{ marginTop: "40px" }}>
          <Wrapper>
            <Link to="/booking">
              <PageBack>
                <BsArrowLeft />
                <div>Booking</div>
              </PageBack>
            </Link>
            <PageActions>
              <PageTitle>{Data.title} </PageTitle>

              <div style={{ display: "flex", gap: "10px" }}>
                <ButtonStyled>Edit</ButtonStyled>
                {!BookingStatus ? null : (
                  <ButtonStyled
                    onClick={() => history.push("/createEvent")}
                    main
                  >
                    Create Event
                  </ButtonStyled>
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
                <Reject onClick={Recject}>Reject</Reject>
              ) : null}
              {!BookingStatus ? (
                <Accept onClick={Approve}>Accept</Accept>
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

                    <div>{data.space ? data.space.title : ""}</div>
                  </DetailItem>
                  <DetailItem>
                    <GrayText> Cooffee Break</GrayText>

                    <div>{data.coffeebreak ? data.coffeebreak.title : ""}</div>
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

                    <div>{Data.people}</div>
                  </DetailItem>
                  <DetailItem>
                    <GrayText> Entity Type</GrayText>

                    <div>{data.booktype ? data.booktype.name : ""}</div>
                  </DetailItem>
                  <DetailItem>
                    <GrayText> Total Price</GrayText>

                    <div>$ {Data.price}</div>
                  </DetailItem>
                  <DetailItem>
                    <GrayText>Received</GrayText>

                    <div>${Data.received}</div>
                  </DetailItem>
                  <DetailItem>
                    <GrayText>Lunches</GrayText>

                    <div>{data.lunch ? data.lunch.title : ""}</div>
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
                      <GrayText>
                        {data.bookDates
                          ? data.bookDates
                              .map((i) => i.createdAt)
                              .toString()

                              .slice(0, 2) +
                            " " +
                            monthNames[
                              data.bookDates
                                .map((i) => i.createdAt)
                                .toString()
                                .split("-")[1] === 0
                                ? data.bookDates
                                    .map((i) => i.createdAt)
                                    .toString()
                                    .split("-")[1]
                                    .slice(1) - 1
                                : data.bookDates
                                    .map((i) => i.createdAt)
                                    .toString()
                                    .split("-")[1] - 1
                            ] +
                            " " +
                            data.bookDates
                              .map((i) => i.createdAt)
                              .toString()
                              .split("-")[0]
                          : ""}
                      </GrayText>
                      <GrayText>06:00 PM</GrayText>
                      <GrayText>09:00 PM</GrayText>
                      <GrayText>
                        <BsThreeDotsVertical />
                      </GrayText>
                    </Date>
                    {/* <Date odd item>
                      <GrayText>13 Oct 2020</GrayText>
                      <GrayText>06:00 PM</GrayText>
                      <GrayText>09:00 PM</GrayText>
                      <GrayText>
                        <BsThreeDotsVertical />
                      </GrayText>
                    </Date> */}
                    {/* <Date item>
                      <GrayText>13 Oct 2020</GrayText>
                      <GrayText>06:00 PM</GrayText>
                      <GrayText>09:00 PM</GrayText>
                      <GrayText>
                        <BsThreeDotsVertical />
                      </GrayText>
                    </Date>{" "} */}
                    {/* <Date odd item>
                      <GrayText>13 Oct 2020</GrayText>
                      <GrayText>06:00 PM</GrayText>
                      <GrayText>09:00 PM</GrayText>
                      <GrayText>
                        <BsThreeDotsVertical />
                      </GrayText>
                    </Date> */}
                  </DateInfo>
                  <DetailItem>
                    <div> Commnets</div>

                    <GrayText>{Data.comment}</GrayText>
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
                        <span>{data.admin ? data.admin.name : ""}</span>
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
                          <span>{data.admin ? data.admin.name : ""} </span>
                        </UserHolder>
                        <GrayText>now</GrayText>
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
