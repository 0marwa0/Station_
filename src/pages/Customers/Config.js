// Customer page config
import { BiDotsVerticalRounded } from "react-icons/bi";
import React from "react";
import { Checkbox, Tag } from "antd";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const CustomersColumns = [
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
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Phone Number",
    dataIndex: "PhoneNumber",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },

  {
    title: "Date",
    dataIndex: "Date",
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
    title: "",
    dataIndex: "",
    render: () => (
      <div>
        <BiDotsVerticalRounded
          style={{ fontSize: "20px", color: "var(--lighterGray)" }}
        />
      </div>
    ),
  },
];
export const UsersData = (data, callback) => {
  let Users = [];

  data.map((user) => {
    Users.push({
      FullName: user.name,
      Email: user.email,
      PhoneNumber: user.phone,
      Date:
        user.createdAt.slice(0, 2) +
        " " +
        monthNames[
          user.createdAt.split("-")[1] === 0
            ? user.createdAt.split("-")[1].slice(1) - 1
            : user.createdAt.split("-")[1] - 1
        ] +
        " " +
        user.createdAt.split("-")[0],

      Status: true ? ["Enabled"] : ["Disabled"],
    });
  });

  callback(Users);
};
