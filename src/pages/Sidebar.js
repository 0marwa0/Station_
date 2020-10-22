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
const NavItem = ({ slug, children, index, title }) => {
  // const [selected,setSelected]
  let url = `/` + slug;
  let type = "";

  if (url === "/profile") {
    type = index;
  }
  console.log(slug, title);
  return (
    <Tooltip title={`${slug}`} placement="right">
      {slug === title ? (
        <SideItem active type>
          <Link to={url}>{children} </Link>
        </SideItem>
      ) : (
        <SideItem type>
          <Link to={url}>{children}</Link>
        </SideItem>
      )}
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
  color: ${(props) => (props.active ? "var(--yellow)" : "var(--gray)")};
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
    border-left: ${(props) =>
      props.type ? "2px solid var(--black) " : " 2px solid var(--yellow)"};

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
  bottom: 1px;
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
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let title = this.props.title;
    console.log(this.props.title, "from slider");
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
            <SideItem>
              <IoMdNotificationsOutline />
            </SideItem>

            <NavItem slug="profile" index="profile">
              <UserImage src={require("../public/images/user.png")} />
              <Active></Active>
            </NavItem>
          </SideList>
        </SideWrapper>
      </div>
    );
  }
}

export default SideBar;
