// event page config

import { BiDotsVerticalRounded } from "react-icons/bi";
import { UserImage } from "../Sidebar";
import { Checkbox, Progress, Tooltip, Tag, Space, Button, Input } from "antd";
import React from "react";

export const EventsColumns = [
  { key: "1", title: "", dataIndex: "", render: () => <Checkbox /> },
  {
    key: "2",
    title: "#",
    dataIndex: "num",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key: "3",
    title: "Organizer",
    dataIndex: "Organizer",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    key: "4",
    title: "Date",
    dataIndex: "Date",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    key: "5",
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
    key: "6",
    title: "Sold Tickets",
    dataIndex: "SoldTickets",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    render: () => (
      <Tooltip title="50/12" placement="bottom">
        <Progress percent={50} showInfo={false} strokeColor="var(--yellow)" />
      </Tooltip>
    ),
  },
  {
    key: "7",
    title: "Approved by",
    dataIndex: "Image",
    render: (theImageURL) => (
      <div style={{ width: "50px" }}>
        <UserImage
          alt={theImageURL}
          src={require("../../public/images/user2.png")}
        />
      </div>
    ),
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key: "8",
    title: "",
    dataIndex: "",
    render: () => (
      <BiDotsVerticalRounded
        style={{ fontSize: "20px", color: "var(--lighterGray)" }}
      />
    ),
  },
];
