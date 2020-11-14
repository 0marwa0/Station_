import { BiDotsVerticalRounded } from "react-icons/bi";
import { UserImage } from "../Sidebar";
import { BsTrashFill, BsTrash } from "react-icons/bs";
import { FaCopy } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import React from "react";

import { Checkbox, Progress, Tooltip, Tag, Space, Button, Input } from "antd";
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
export const FilUploadedColumns = [
  { key: "1", title: "", dataIndex: "", render: () => <Checkbox /> },
  {
    key: "2",
    title: "File Title",
    dataIndex: "FileTitle",
    render: (item) => <a href={item.url}>{item.name}</a>,
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },

  {
    key: "3",
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
          if (type === "pdf" || type == "PDF") {
            color = "orange";
          } else if (type === "jpg" || type == "JPG") {
            color = "blue";
          } else {
            color = "green";
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
    key: "4",
    title: "Size",
    dataIndex: "Size",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    key: "5",
    title: "Uploaded Date",
    dataIndex: "UploadedDate",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key: "6",
    title: "Uploaded by",
    dataIndex: "image",
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
    key: "7",
    title: "",
    dataIndex: "",
    render: () => (
      <div className="ResourcesIcon">
        <div className="icon">
          <FaCopy fontSize="16" />
        </div>
        <div className="icon">
          <FiEdit fontSize="16" />
        </div>
        <div className="icon">
          <BsTrashFill fontSize="16" />
        </div>
      </div>
    ),
  },
];
// FilesData;{
//     FileTitle: "thestation_profile_arabic_version.pdf",
//     Type: ["PDF"],
//     Size: "12.3mb",
//     UploadedDate: "23 September 2020",
//     image: "",
//   },

export const FilesData = (data, callback) => {
  let Files = [];

  data.map((file) => {
    Files.push({
      FileTitle: { url: file.link, name: file.name },
      Type: [`${/[.]/.exec(file.name) ? /[^.]+$/.exec(file.name) : undefined}`],
      Size: "",
      UploadedDate:
        file.createdAt.slice(0, 2) +
        " " +
        monthNames[
          file.createdAt.split("-")[1] === 0
            ? file.createdAt.split("-")[1].slice(1) - 1
            : file.createdAt.split("-")[1] - 1
        ] +
        " " +
        file.createdAt.split("-")[0],
      image: "",
      // Status: true ? ["Enabled"] : ["Disabled"],
    });
  });

  callback(Files);
};
