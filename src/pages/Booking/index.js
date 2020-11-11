// Booking page //
import { notification } from "antd";
import React, { useEffect, useState } from "react";
import CustomPage from "../shared/CustomPage";
import { BookingColumns, BookingData } from "./Config";
// import { BookingData } from "../../fakeData/index";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import NewBooking from "./NewBooking";
import { EmptyText } from "../../pages/shared/SharedComponents";
import { LoadData, LoadBooking } from "../../API";
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

    LoadBooking((data) => {
      setLoading(false);
      BookingData(data, (book) => {
        // Mesg("hi");
        setBook(book);
      });
      console.log(data, "such stupid one");
    });
    // LoadData(
    //   "books/home",
    //   (err, data) => {
    //     setLoading(false);
    //     BookingData(data.data, (book) => {
    //       setBook(book);
    //     });

    //     console.log(data, "book");
    //     if (err) {
    //       Mesg(err);
    //     }
    //   },
    //   (err) => {
    //     setLoading(false);
    //     FailedMesg(err, "Something worng happend !");
    //   }
    // );
  }, []);

  return (
    <div>
      <CustomPage
        pageTitle="Booking"
        columns={BookingColumns}
        data={Book}
        Item="event"
        onOpenModal={() => onOpenModal(true)}
        Loading={Loading}
      />

      <Modal
        closeOnOverlayClick={false}
        open={open}
        onClose={() => onOpenModal(false)}
        center
        showCloseIcon={false}
        classNames={{
          modal: "customModal",
        }}
      >
        <NewBooking Close={() => onOpenModal(false)} />
      </Modal>
    </div>
  );
}

export default Booking;
