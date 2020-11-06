import React from "react";
import { Notifications } from "../../fakeData";
import styled from "styled-components";
import { BsDot } from "react-icons/bs";
import { CustomButton } from "../shared/SharedComponents";
const NotificationsHolder = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 14px;
`;
const NotifiHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;

  font-size: 20px;
  font-weight: 400;
  align-items: center;
  cursor: unset;
  border-bottom: 1px solid var(--lighterGray);
`;
const NotifiItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  font-size: 12px;
  padding: 20px 30px;
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
function Index() {
  return (
    <div>
      <div
        id="/"
        class="popup"
        style={{ transition: " all 0.3s ease-in-out", transform: "scale(1)" }}
      >
        <div className="Notification_content">
          <div className="popup_arrow"></div>
          <NotificationsHolder>
            <NotifiHeader>
              Notifications{" "}
              <u style={{ fontSize: "14px", color: "var(--darkGray)" }}>
                see all
              </u>
            </NotifiHeader>
            <div style={{ height: "360px" }}>
              {Notifications.map((item, i) => {
                return (
                  <NotifiItem key={i}>
                    <NotifiImage
                      src={require("../../public/images/user2.png")}
                    />
                    <Text>
                      <span style={{ color: "black" }}>{item.name}</span>{" "}
                      {item.action}
                    </Text>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <BsDot color="var(--yellow)" size={30} />
                      {item.time}
                    </span>
                  </NotifiItem>
                );
              })}
            </div>
          </NotificationsHolder>{" "}
          <CustomButton Main>See All Activity</CustomButton>
        </div>
      </div>
      <a href="#" class="close-popup"></a>
    </div>
  );
}

export default Index;
