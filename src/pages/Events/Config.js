// event page config

import { BiDotsVerticalRounded } from "react-icons/bi";
import { UserImage } from "../Sidebar";
import { Checkbox, Progress, Tooltip, Tag, Space, Button, Input } from "antd";
import React from "react";
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
    render: (rate) => (
      <Tooltip title={rate / 100} placement="bottom">
        <Progress percent={rate} showInfo={false} strokeColor="var(--yellow)" />
      </Tooltip>
    ),
  },
  {
    key: "7",
    title: "Approved by",
    dataIndex: "Approvedby",
    // render: (theImageURL) => (
    //   <div style={{ width: "50px" }}>
    //     <UserImage
    //       alt={theImageURL}
    //       src={require("../../public/images/user2.png")}
    //     />
    //   </div>
    // ),

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
export const EventsData = (data, callback) => {
  let Events = [];

  data.map((item) => {
    Events.push({
      Organizer: item.organizer,
      Date:
        item.createdAt.slice(0, 2) +
        " " +
        monthNames[
          item.date.split("-")[1] === 0
            ? item.date.split("-")[1].slice(1) - 1
            : item.date.split("-")[1] - 1
        ] +
        " " +
        item.date.split("-")[0],
      // Time: "10:0 AM -4:00 PM",
      Space: [`${item.space.title}`],
      SoldTickets: item.ticketLeft,
      Approvedby: "",
      // Title: item.name,
      // Descriptions: item.descriptionAr,
      // Type: ["PDF"],
      // Size: "12.2mb",
      // UploadedDate:
      //   item.createdAt.slice(0, 2) +
      //   " " +
      //   monthNames[
      //     item.createdAt.split("-")[1] === 0
      //       ? item.createdAt.split("-")[1].slice(1) - 1
      //       : item.createdAt.split("-")[1] - 1
      //   ] +
      //   " " +
      //   item.createdAt.split("-")[0],
      // image: "",
    });
  });

  callback(Events);
};
