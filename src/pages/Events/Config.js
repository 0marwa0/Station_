import { BiDotsVerticalRounded } from "react-icons/bi";
import { UserImage } from "../Sidebar";
import { Checkbox, Progress, Tooltip, Tag, Space, Button, Input } from "antd";
export const EventsColumns = [
  {
    title: "",
    dataIndex: "",
    render: () => <Checkbox />,
  },
  {
    title: "#",
    dataIndex: "num",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Organizer",
    dataIndex: "Organizer",
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
    title: "Approved by",
    dataIndex: "Image",
    render: (theImageURL) => (
      <div style={{ width: "50px" }}>
        <UserImage alt={theImageURL} src="images/user2.png" />
      </div>
    ),
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
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
