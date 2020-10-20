import React from "react";
// import { EventsColumns } from "./Config";
import { EventsData } from "../../fakeData";
import CustomPage from "../shared/CustomPage";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { UserImage } from "../Sidebar";
import { BsTrashFill, BsTrash } from "react-icons/bs";
import { FaCopy } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import "../../styles/globals.css";
import { Checkbox, Progress, Tooltip, Tag, Space, Button, Input } from "antd";
import { ResourcesData } from "../../fakeData";
const ResourcesColumns = [
  {
    key: "1",
    title: "",
    dataIndex: "",
    render: () => <Checkbox />,
  },
  {
    key: "2",
    title: "Title",
    dataIndex: "Title",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key: "3",
    title: "Descriptions",
    dataIndex: "Descriptions",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },

  {
    key: "4",
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
    key: "5",
    title: "Size",
    dataIndex: "Size",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    key: "6",
    title: "UploadedDate",
    dataIndex: "UploadedDate",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key: "7",
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
    key: "8",
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

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <CustomPage
        pageTitle="Resources"
        columns={ResourcesColumns}
        data={ResourcesData}
      />
    );
  }
}

export default Resources;
