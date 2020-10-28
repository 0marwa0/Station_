import React, { useState } from "react";
import styled from "styled-components";
import { MdEventNote } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { BiLineChart } from "react-icons/bi";
import { BsSearch, BsFileRichtext } from "react-icons/bs";
import { VscSourceControl } from "react-icons/vsc";
import { CloudUploadOutlined } from "@ant-design/icons";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { Tooltip, Button } from "antd";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Notifications } from "../fakeData";
const NotificationsHolder = styled.div`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  color: black;
`;
const NotifiHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--lighterGray);
`;
const NotifiItem = styled.div`
  display: grid;
  grid-template-column: auto 1fr auto;
  gap: 10px;
  border-bottom: 1px solid var(--lighterGray);
`;
export const NotifiImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Notify = () => {
  return (
    <NotificationsHolder>
      <NotifiHeader>
        Notifications <u>see all</u>
      </NotifiHeader>
      {Notifications.map((item, i) => {
        return (
          <NotifiItem key={i}>
            <NotifiImage src={require("../public/images/user2.png")} />
            <div>
              {item.name} {item.action}
            </div>
          </NotifiItem>
        );
      })}
    </NotificationsHolder>
  );
};

const NavItem = ({ slug, children, index, title }) => {
  const location = useLocation();
  let url = `/` + slug;
  let type;
  let isSelected = false;
  if (index) {
    type = true;
    console.log(type, "trueee");
  } else {
    type = false;
  }

  if (slug === location.pathname.substr(1)) {
    isSelected = true;
  }
  if (location.pathname.substr(1) === "BookingDetalis" && slug === "Booking") {
    isSelected = true;
  }
  if (location.pathname.substr(1) === "createEvent" && slug === "Events") {
    isSelected = true;
  }

  //  slug != "Home" ? (
  return (
    <Tooltip title={`${slug}`} placement="right">
      <Link to={url}>
        <SideItem type={type} isSelected={isSelected}>
          {children}
        </SideItem>
      </Link>
    </Tooltip>
    // ) : (
    // <Tooltip
    //   title={Notify}
    //   placement="right"
    //   color="white"
    //   style={{
    //     borderRadius: "20px",
    //   }}
    // >
    //   <Link to={url}>
    //     <SideItem type={type} isSelected={isSelected}>
    //       {children}
    //     </SideItem>
    //   </Link>
    // </Tooltip>
  );
};
export const SideWrapper = styled.div`
  width: 65px;
  height: 100%;
  display: flex;
  position: fixed;
  padding-top: 30px;
  padding-right: 4px;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--black);
`;

export const SideList = styled.ul`
   {
  }
`;
export const SideItem = styled.li`
  position: relative;

  margin-top: 10px;
  padding: 5px 15px;
  cursor: pointer;
  border-left: ${(props) =>
    props.type
      ? "2px solid var(--black);"
      : props.isSelected
      ? "2px solid var(--yellow);"
      : "2px solid var(--black);"};
  font-size: 25px;
  display: flex;
  color: ${(props) => (props.isSelected ? "var(--yellow);" : "var(--gray);")};
  justify-content: center;
  align-items: center;
  &:hover {
    border-left: 2px solid var(--yellow);

    color: var(--yellow);
  }
`;

export const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Active = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  position: absolute;
  bottom: 5px;
  right: 22%;
  border: 2px solid var(--black);
  background-color: var(--RayGreen);
`;
const Logo = styled.img`
  width: 60px;
  height: 23px;
  margin-bottom: 20px;
  padding: 0 10px;
`;
function SideBar(props) {
  let title = props.title;

  return (
    <div>
      <SideWrapper>
        <SideList>
          <Logo src={require("../public/images/Logo.png")} />

          <NavItem slug="Dashboard" title={title}>
            <BiLineChart />
          </NavItem>

          <NavItem slug="Booking" title={title}>
            <BiBookAdd />
          </NavItem>
          <NavItem slug="Articles" title={title}>
            <MdEventNote />
          </NavItem>
          <NavItem slug="Events" title={title}>
            <MdEventNote />
          </NavItem>
          <NavItem slug="Customers" title={title}>
            <HiOutlineUsers />
          </NavItem>
          <NavItem slug="Admins" title={title}>
            <FaRegUser />
          </NavItem>
          <NavItem slug="FileUploader" title={title}>
            <CloudUploadOutlined />
          </NavItem>
          <NavItem slug="Resources" title={title}>
            <VscSourceControl />
          </NavItem>
        </SideList>
        <SideList>
          <SideItem>
            <BsSearch />
          </SideItem>
          <NavItem slug="Home" title={title}>
            <IoMdNotificationsOutline />
          </NavItem>

          <NavItem slug="profile" index={true}>
            <UserImage src={require("../public/images/user.png")} />
            <Active />
          </NavItem>
        </SideList>
      </SideWrapper>
    </div>
  );
}

export default SideBar;
