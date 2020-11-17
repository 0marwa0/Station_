// Booking page //
import { notification } from "antd";
import React, { useEffect, useState } from "react";
import CustomPage from "../shared/CustomPage";
import { BookingColumns, BookingData } from "./Config";
import Progress from "react-progress-2";

// import { BookingData } from "../../fakeData/index";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import NewBooking from "./NewBooking";
import { monthNames } from "../shared/assets";
import { EmptyText } from "../../pages/shared/SharedComponents";
import { LoadData, LoadBooking, LoadDataByID } from "../../API";

import { FailedMesg, Mesg, SuccessMesg } from "../../API/APIMessage";
function Booking(props) {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Book, setBook] = useState([]);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  const loadBook = () => {
    setLoading(true);

    LoadData(
      "books",
      (mesg, data) => {
        setLoading(false);
        if (mesg) {
          Mesg(mesg);
        }

        setBook(data.data.rows);
        console.log(data.data.rows);
      },
      (err) => {
        setLoading(false);

        FailedMesg(err, "Something worng happend !");
      }
    );
  };

  const handleInput = (e, key) => {
    let value = e.target.value;
    switch (key) {
      case "title":
        settitle(value);
        break;
      case "organizer":
        setorganizer(value);
        break;
      case "description":
        setdescription(value);
        break;
      case "people":
        setpeople(value);
        break;
      case "comment":
        setcomment(value);
        break;
      case "typeId":
        settypeId(value);
        break;
      case "spaceId":
        setspaceId(value);
        break;
      case "designId":
        setdesignId(value);
        break;
      case "coffeebreakId":
        setcoffeebreakId(value);
        break;
      case "lunchId":
        setlunchId(value);
        break;

      default:
        break;
    }
  };
  const clearState = () => {
    settitle("");
    setorganizer("");
    setdescription("");
    setpeople("");
    setcomment("");
    settypeId("");
    setspaceId("");
    setdesignId("");
    setcoffeebreakId("");
    setlunchId("");
  };
  const [title, settitle] = useState("");
  const [organizer, setorganizer] = useState("");
  const [description, setdescription] = useState("");
  const [people, setpeople] = useState("");
  const [comment, setcomment] = useState("");
  const [typeId, settypeId] = useState("");
  const [spaceId, setspaceId] = useState("");
  const [designId, setdesignId] = useState("");
  const [coffeebreakId, setcoffeebreakId] = useState("");
  const [lunchId, setlunchId] = useState("");
  const [days, setdays] = useState("");
  const handleSubmit = () => {
    let data = {
      title: title,
      organizer: organizer,
      description: description,
      people: people,
      comment: comment,
      days: [
        {
          start: {
            dateTime: "",
          },
          end: {
            dateTime: "",
          },
        },
      ],
      spaceId: spaceId,
      typeId: typeId,
      designId: designId,
      coffeebreakId: coffeebreakId,
      lunchId: lunchId,
    };

    console.log(data, "book data sended");
    // if (name != "" && password != "") {
    setLoading(true);
    // addData(
    //   "book/add",
    //   data,
    //   (mesg, Data) => {
    //     SuccessMesg("Booking done !");

    //     setLoading(false);
    //     onOpenModal(false);
    //     loadBook();
    //     clearState();
    //   },
    //   (err) => {
    //     onOpenModal(false);
    //     setLoading(false);
    //     clearState();
    //     FailedMesg(err);
    //   }
    // );
    // } else {
    //   onOpenModal(false);
    //   FailedMesg("Booking failed ", "Empty fileds");
    // }
  };
  useEffect(() => {
    if (localStorage.getItem("station_token")) {
      loadBook();
    } else {
      props.history.push("/login");
    }
  }, []);
  let BookData = [];
  Book.map((item) => {
    BookData.push({
      Title: item.title,
      Status: [`${item.status}`],
      StartingDate: item.bookDates.map(
        (i) =>
          i.start.slice(0, 2) +
          " " +
          monthNames[
            i.start.split("-")[1] === 0
              ? i.start.split("-")[1].slice(1) - 1
              : i.start.split("-")[1] - 1
          ] +
          " " +
          i.start.split("-")[0]
      ),
      EndingDate: item.bookDates.map(
        (i) =>
          i.end.slice(0, 2) +
          " " +
          monthNames[
            i.end.split("-")[1] === 0
              ? i.end.split("-")[1].slice(1) - 1
              : i.end.split("-")[1] - 1
          ] +
          " " +
          i.end.split("-")[0]
      ),
      Space: [`${item.space.title}`],
      CreationDate:
        item.createdAt.slice(0, 2) +
        " " +
        monthNames[
          item.createdAt.split("-")[1] === 0
            ? item.createdAt.split("-")[1].slice(1) - 1
            : item.createdAt.split("-")[1] - 1
        ] +
        " " +
        item.createdAt.split("-")[0],
      BookedBy: "",
      //item.user.name
    });
  });

  return (
    <div>
      <CustomPage
        pageTitle="booking"
        columns={BookingColumns}
        data={BookData}
        Item="event"
        onOpenModal={() => onOpenModal(true)}
        Loading={Loading}
      />

      <Modal
        closeOnOverlayClick={true}
        open={open}
        onClose={() => onOpenModal(false)}
        center
        showCloseIcon={false}
        classNames={{ modal: "customModal" }}
      >
        <NewBooking
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          Close={() => onOpenModal(false)}
        />
      </Modal>
    </div>
  );
}

export default Booking;
