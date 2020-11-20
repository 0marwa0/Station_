import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import NewBooking from "../Booking/NewBooking/NewBooking";

function Index({ open, onOpenModal }) {
  const [Loading, setLoading] = useState(false);

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

      case "comment":
        setcomment(value);
        break;

      default:
        break;
    }
  };
  const handleselect = (e, key) => {
    // console.log("select is passed alredy");
    let value = e;
    switch (key) {
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
      case "people":
        setpeople(value);
        break;
      default:
        break;
    }
  };
  const clearState = () => {
    settitle("");
    setorganizer("");
    setdescription("");
    setpeople(0);
    setcomment("");
    settypeId(0);
    setspaceId(0);
    setdesignId(0);
    setcoffeebreakId(0);
    setlunchId(0);
  };
  const [title, settitle] = useState("");
  const [organizer, setorganizer] = useState("");
  const [description, setdescription] = useState("");
  const [people, setpeople] = useState(0);
  const [comment, setcomment] = useState("");
  const [typeId, settypeId] = useState(0);
  const [spaceId, setspaceId] = useState(0);
  const [designId, setdesignId] = useState(0);
  const [coffeebreakId, setcoffeebreakId] = useState(0);
  const [lunchId, setlunchId] = useState(0);
  const [days, setdays] = useState("");
  const handleSubmit = () => {
    let data = {
      title: title,
      organizer: organizer,
      //  description: description,
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
    onOpenModal(false);
    // if (name != "" && password != "") {
    //setLoading(true);
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
  return (
    <div>
      {" "}
      <Modal
        closeOnOverlayClick={true}
        open={open}
        onClose={() => onOpenModal(false)}
        center
        showCloseIcon={false}
        classNames={{
          modal: "customModal",
        }}
      >
        <NewBooking
          handleInput={handleInput}
          handleselect={handleselect}
          handleSubmit={handleSubmit}
          Close={() => onOpenModal(false)}
        />
      </Modal>
    </div>
  );
}

export default Index;
