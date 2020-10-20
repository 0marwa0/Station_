// // Booinkg page config
// import { BiDotsVerticalRounded } from "react-icons/bi";

// import { Checkbox, Table, Tooltip, Tag, Space, Button, Input } from "antd";
// export const BookingColumns = [
//   {
//     title: "",
//     dataIndex: "",
//     render: () => <Checkbox />,
//   },
//   {
//     title: "",
//     dataIndex: "num",
//   },
//   {
//     title: "Title",
//     dataIndex: "Title",
//     sorter: {
//       compare: (a, b) => a.english - b.english,
//       multiple: 1,
//     },
//   },
//   {
//     title: "Status",
//     dataIndex: "Status",
//     sorter: {
//       compare: (a, b) => a.chinese - b.chinese,
//       multiple: 3,
//     },
//     render: (Status) => (
//       <>
//         {Status.map((status) => {
//           let color;
//           if (status === "Rejected") {
//             color = "red";
//           }
//           if (status === "Approved") {
//             color = "green";
//           }
//           if (status === "Pending") {
//             color = "gold";
//           }
//           return (
//             <Tag color={color} key={status}>
//               {status.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },

//   {
//     title: "Starting Data",
//     dataIndex: "StartingDate",
//     sorter: {
//       compare: (a, b) => a.math - b.math,
//       multiple: 2,
//     },
//   },
//   {
//     title: "Ending Data",
//     dataIndex: "EndingDate",
//     sorter: {
//       compare: (a, b) => a.english - b.english,
//       multiple: 1,
//     },
//   },
//   {
//     title: "Space",
//     dataIndex: "Space",
//     sorter: {
//       compare: (a, b) => a.chinese - b.chinese,
//       multiple: 3,
//     },
//     render: (Space) => (
//       <>
//         {Space.map((space) => {
//           let color;
//           if (space === "Event Hall") {
//             color = "green";
//           } else {
//             color = "blue";
//           }
//           return (
//             <Tag color={color} key={space}>
//               {space.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: "Creation Date",
//     dataIndex: "CreationDate",
//     sorter: {
//       compare: (a, b) => a.chinese - b.chinese,
//       multiple: 3,
//     },
//   },

//   {
//     title: "Booked by",
//     dataIndex: "BookedBy",
//     sorter: {
//       compare: (a, b) => a.chinese - b.chinese,
//       multiple: 3,
//     },
//   },
//   {
//     title: "",
//     dataIndex: "",
//     render: () => (
//       <BiDotsVerticalRounded
//         style={{ fontSize: "20px", color: "var(--lighterGray)" }}
//       />
//     ),
//   },
// ];
