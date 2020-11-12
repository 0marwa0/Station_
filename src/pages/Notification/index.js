import React, { useState, useEffect } from "react";
import { Notifications } from "../../fakeData";
import styled from "styled-components";
import { BsDot } from "react-icons/bs";
import { LoadData } from "../../API";
import { Scrollbars } from "react-custom-scrollbars";

import ContentLoader from "react-content-loader";
import { Mesg, FailedMesg } from "../../API/APIMessage";
import { CustomButton } from "../shared/SharedComponents";
const NotificationsHolder = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  height: 400px;
  align-items: center;

  scrollbar-width: thin;
  scrollbar-color: var(--lightGray) transparent;
  font-size: 14px;
`;

const NotifiItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  font-size: 12px;
  padding: 20px;
  width: 398px;
  align-items: center;
  border-bottom: 1px solid var(--lighterGray);
`;
export const NotifiImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;
const Text = styled.span`
  display: inline-block;
  width: 100%;
  color: var(--darkGray);
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;
function Index(props) {
  const [Loading, setLoading] = useState(false);
  const [notification, setnotification] = useState([]);
  const [users, setusers] = useState([]);

  useEffect(() => {
    setLoading(true);
    LoadData(
      "users",
      (err, data) => {
        setLoading(false);

        // UsersData(, (users) => { });
        setusers(data.data.rows);

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
    LoadData(
      "notification",
      (err, data) => {
        setLoading(false);
        setnotification(data.data);
        console.log(data.data);
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

  return (
    <div>
      <NotificationsHolder>
        <Scrollbars style={{ width: "400px", height: "100%" }}>
          {Loading
            ? [1, 2, 3].map((i) => {
                return (
                  <div
                    style={{
                      width: "398px",
                      height: "85px",
                      padding: "10px 0",
                      borderBottom: "1px solid var(--lighterGray)",
                    }}
                  >
                    <ContentLoader
                      speed={2}
                      width={600}
                      height={160}
                      viewBox="0 0 600 160"
                      backgroundColor="#f3f3f3"
                      foregroundColor="#ecebeb"
                      {...props}
                    >
                      <rect
                        x="90"
                        y="26"
                        rx="3"
                        ry="3"
                        width="160"
                        height="4"
                      />

                      <rect
                        x="350"
                        y="26"
                        rx="3"
                        ry="3"
                        width="25"
                        height="4"
                      />
                      <circle cx="335" cy="27" r="3" />
                      <circle cx="47" cy="30" r="27" />
                    </ContentLoader>
                  </div>
                );
              })
            : notification.map((item, i) => {
                return (
                  <NotifiItem key={i}>
                    <NotifiImage
                      src={require("../../public/images/avatar.jpg")}
                    />
                    <Text>
                      <span style={{ color: "black" }}>
                        {users
                          .filter((i) => i.id === item.userId)
                          .map((i) => i.name)
                          .toString()}
                      </span>{" "}
                      {item.contents}
                    </Text>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <BsDot color="var(--yellow)" size={30} />
                      {item.time}
                    </span>
                  </NotifiItem>
                );
              })}{" "}
        </Scrollbars>
      </NotificationsHolder>

      <div
        style={{
          padding: "7px 0",
          textAlign: "center",
          display: "flex",
          height: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomButton Main>See All Activity</CustomButton>
      </div>
    </div>
  );
}

export default Index;
