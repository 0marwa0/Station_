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
function Booking() {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Book, setBook] = useState([]);
  const onOpenModal = (open) => {
    setOpen(open);
  };

  useEffect(() => {
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
        pageTitle="Booking"
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
        <NewBooking Close={() => onOpenModal(false)} />
      </Modal>
    </div>
  );
}

export default Booking;
