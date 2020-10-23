import { BiDotsVerticalRounded } from "react-icons/bi";
import { UserImage } from "../Sidebar";
import { BsTrashFill, BsTrash } from "react-icons/bs";
import { FaCopy } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import React from "react";
import { Checkbox, Progress, Tooltip, Tag, Space, Button, Input } from "antd";

export const FilUploadedColumns = [
  { key: "1", title: "", dataIndex: "", render: () => <Checkbox /> },
  {
    key: "2",
    title: "File Title",
    dataIndex: "FileTitle",
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
          if (type === "PDF") {
            color = "orange";
          } else if (type === "JPG") {
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