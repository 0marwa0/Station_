import Sider from "antd/lib/layout/Sider";
import React from "react";
import CustomPage from "../shared/CustomPage";
import SideBar from "../Sidebar";
import { BiDotsVerticalRounded } from "react-icons/bi";

import { Checkbox, Table, Tooltip, Tag, Space, Button, Input } from "antd";
import { AdminsData } from "../../fakeData/index";
// import { AdminsColumns } from "./Config";
const AdminsColumns = [
  {
    title: "",
    dataIndex: "",
    render: () => <Checkbox />,
  },
  {
    title: "Full Name",
    dataIndex: "FullName",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Type",
    dataIndex: "Type",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
    render: (Type) => (
      <>
        {Type.map((type) => {
          let color;
          if (type === "Book Admin") {
            color = "gold";
          }
          return (
            <Tag color={color} key={type}>
              {type.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Branch",
    dataIndex: "Branch",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    render: (Status) => (
      <>
        {Status.map((status) => {
          let color = "green";
          if (status != "Enabled") {
            color = "green";
          } // else {
          //   color = "volcano";
          //   console.log(status, "mmm");
          // }
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },

  {
    title: "",
    dataIndex: "",
    render: () => (
      <BiDotsVerticalRounded
        style={{ fontSize: "20px", color: "var(--lighterGray)" }}
      />
    ),
  },
];

class Admins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CustomPage
          pageTitle="Admins"
          columns={AdminsColumns}
          data={AdminsData}
        />
      </div>
    );
  }
}

export default Admins;
