import React from "react";
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
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
const NavItem = ({ slug, children }) => {
  let url = `/` + slug;
  if (url === "/Dashboard") {
    url = "/";
  }
  return (
    <Tooltip title={`${slug}`} placement="right">
      <SideItem active>
        <Link to={url}>{children}</Link>
      </SideItem>
    </Tooltip>
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
  color: var(--gray);
  position: relative;
  margin-bottom: 10px;
  padding: 0 20px;
  cursor: pointer;
  border-left: 2px solid var(--black);
  font-size: 23px;
  display: flex;
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
  border-readius: 50%;
`;

const Active = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  position: absolute;
  bottom: 1px;
  right: 22%;
  border: 2px solid var(--black);
  background-color: var(--RayGreen);
`;
const Logo = styled.img`width: 35px, height: 23px ;
 margin-bottom: 30px;
  padding: 0 10px;
`;
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SideWrapper>
          <SideList>
            <Logo src={require("../public/images/Logo.png")} />

            <NavItem slug="Dashboard">
              <BiLineChart />
            </NavItem>
            <NavItem slug="Booking">
              <BiBookAdd />
            </NavItem>
            <NavItem slug="Articles">
              <MdEventNote />
            </NavItem>
            <NavItem slug="Events">
              <MdEventNote />
            </NavItem>
            <NavItem slug="Customers">
              <HiOutlineUsers />
            </NavItem>
            <NavItem slug="Admins">
              <FaRegUser />
            </NavItem>
            <NavItem slug="FileUploader">
              <CloudUploadOutlined />
            </NavItem>
            <NavItem slug="Resources">
              <VscSourceControl />
            </NavItem>
          </SideList>
          <SideList>
            <SideItem>
              <BsSearch />
            </SideItem>
            <SideItem>
              <IoMdNotificationsOutline />
            </SideItem>
            <SideItem>
              <UserImage src={require("../public/images/user.png")} />
              <Active></Active>
            </SideItem>
          </SideList>
        </SideWrapper>
      </div>
    );
  }
}

export default SideBar;
