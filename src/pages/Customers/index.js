import React from "react";
import CustomPage from "../shared/CustomPage";
// import { CustomersColumns } from "./Config";
import { CustomersData } from "../../fakeData";
import { BiDotsVerticalRounded } from "react-icons/bi";

import { Checkbox, Tag } from "antd";

const CustomersColumns = [
  { key: "1", title: "", dataIndex: "", render: () => <Checkbox /> },
  {
    key: "2",
    title: "Full Name",
    dataIndex: "FullName",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key: "3",
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key: "4",
    title: "Phone Number",
    dataIndex: "PhoneNumber",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },

  {
    key: "5",
    title: "Date",
    dataIndex: "Date",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    key: "6",
    title: "Status",
    dataIndex: "Status",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    render: (Status) => (
      <>
        {Status.map((status) => {
          let color;
          if (status === "Enabled") {
            color = "green";
          } else {
            color = "gold";
          }
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
    key: "7",
    title: "",
    dataIndex: "",
    render: () => (
      <BiDotsVerticalRounded
        style={{ fontSize: "20px", color: "var(--lighterGray)" }}
      />
    ),
  },
];

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <CustomPage
        pageTitle="Customers"
        columns={CustomersColumns}
        data={CustomersData}
      />
    );
  }
}

export default Customers;
