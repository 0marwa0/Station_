import React from "react";
import CustomPage from "../shared/CustomPage";
// import { BookingColumns } from "./Config";
import { BiDotsVerticalRounded } from "react-icons/bi";

import { Checkbox, Table, Tooltip, Tag, Space, Button, Input } from "antd";
import { BookingData } from "../../fakeData/index";
function Booking() {
  return (
    <CustomPage
      pageTitle="Booking"
      columns={BookingColumns}
      data={BookingData}
    />
  );
}

export default Booking;
export const BookingColumns = [
  {
    key: "1",
    title: "",
    dataIndex: "",
    render: () => <Checkbox />,
  },
  { key: "2", title: "", dataIndex: "num" },
  {
    key: "3",
    title: "Title",
    dataIndex: "Title",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key: "4",
    title: "Status",
    dataIndex: "Status",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
    render: (Status) => (
      <>
        {Status.map((status) => {
          let color;
          if (status === "Rejected") {
            color = "red";
          }
          if (status === "Approved") {
            color = "green";
          }
          if (status === "Pending") {
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
    key: "5",
    title: "Starting Data",
    dataIndex: "StartingDate",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    key: "6",
    title: "Ending Data",
    dataIndex: "EndingDate",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key: "7",
    title: "Space",
    dataIndex: "Space",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
    render: (Space) => (
      <>
        {Space.map((space) => {
          let color;
          if (space === "Event Hall") {
            color = "green";
          } else {
            color = "blue";
          }
          return (
            <Tag color={color} key={space}>
              {space.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    key: "8",
    title: "Creation Date",
    dataIndex: "CreationDate",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },

  {
    key: "9",
    title: "Booked by",
    dataIndex: "BookedBy",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    key: "10",
    title: "",
    dataIndex: "",
    render: () => (
      <BiDotsVerticalRounded
        style={{ fontSize: "20px", color: "var(--lighterGray)" }}
      />
    ),
  },
];
