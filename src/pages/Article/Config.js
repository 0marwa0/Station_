import { BiDotsVerticalRounded } from "react-icons/bi";
import { UserImage } from "../Sidebar";
import { Checkbox } from "antd";
import styled from "styled-components";
const ArticleImage = styled.img`
  width: 55px;
  height: 50px;
  border-radius: 4px;
`;
const ArticlesColumns = [
  {
    title: "",
    dataIndex: "",
    render: () => <Checkbox />,
  },
  {
    title: "",
    dataIndex: "image",

    render: (theImageURL) => (
      <div style={{ width: "50px" }}>
        <ArticleImage alt={theImageURL} src="images/event_1.png" />
      </div>
    ),
  },
  {
    title: "Title",
    dataIndex: "Title",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "Created Date",
    dataIndex: "CreatedDate",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },

  {
    title: "Created by",
    dataIndex: "Createdby",
    render: (theImageURL) => (
      <div style={{ width: "50px" }}>
        <UserImage
          alt={theImageURL}
          src={require("../public/images/images/user2.png")}
        />
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
export default ArticlesColumns;
