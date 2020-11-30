// Booking page //
import { notification } from "antd";
import React, { useEffect, useState } from "react";
import CustomPage from "../shared/CustomPage";
import { BookingColumns, BookingData } from "./Config";
import Progress from "react-progress-2";
// import { BookingData } from "../../fakeData/index";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import NewBooking from "./NewBooking/NewBooking";
import { monthNames } from "../shared/assets";
import { EmptyText } from "../../pages/shared/SharedComponents";
import { LoadData, LoadBooking, LoadDataByID, addData } from "../../API";
import { FailedMesg, Mesg, SuccessMesg } from "../../API/APIMessage";
import { DateName } from "../Dashboard";
export const Values = React.createContext();

function Booking(props) {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Book, setBook] = useState([]);
  const [DateValues, setDateValues] = useState([]);

  const onOpenModal = (open) => {
    setOpen(open);
    clearState();
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
        // console.log(data.data.rows);
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
      case "price":
        setprice(value);
        break;
      case "received":
        setrecived(value);
        break;
      case "organizer":
        setorganizer(value);
        break;

      case "comment":
        setcomment(value);
        break;

      default:
        break;
    }
  };
  const handleselect = (e, key, daysValues) => {
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
      case "days":
        setDateValues(daysValues);
        setdays(value);
        break;
      default:
        break;
    }
  };
  const clearState = () => {
    settitle("");
    setorganizer("");
    setpeople();
    setcomment("");
    settypeId();
    setspaceId();
    setdesignId();
    setcoffeebreakId();
    setlunchId();
    setprice("");
    setrecived("");
    setdays([]);
  };
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [received, setrecived] = useState("");
  const [organizer, setorganizer] = useState("");
  const [people, setpeople] = useState();
  const [comment, setcomment] = useState("");
  const [typeId, settypeId] = useState();
  const [spaceId, setspaceId] = useState();
  const [designId, setdesignId] = useState();
  const [coffeebreakId, setcoffeebreakId] = useState();
  const [lunchId, setlunchId] = useState();
  const [days, setdays] = useState([]);
  const handleSubmit = () => {
    let data = {
      title: title,
      organizer: organizer,
      people: people,
      comment: comment,
      days: days,
      spaceId: spaceId,
      typeId: typeId,
      designId: designId,
      coffeebreakId: coffeebreakId,
      lunchId: lunchId,
    };

    // onOpenModal(false);
    console.log(data, "book data sended");
    onOpenModal(false);
    setLoading(true);
    // addData(
    //   "book/add",
    //   data,
    //   (mesg, Data) => {
    //     if (mesg) {
    //       //clearState();
    //       Mesg(mesg);
    //       setLoading(false);
    //       loadBook();
    //     } else {
    //       SuccessMesg("Booking done !");
    //       setLoading(false);
    //       onOpenModal(false);
    //       loadBook();
    //     }
    //   },
    //   (err) => {
    //     onOpenModal(false);
    //     setLoading(false);

    //     FailedMesg(err);
    //   }
    // );
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
      StartingDate: item.bookDates
        .filter((i, index) => index === 0)
        .map((i) => DateName(i.start)),
      EndingDate: item.bookDates
        .filter((i, index) => index === 0)
        .map((i) => DateName(i.end)),
      Space: [`${item.space.title}`],
      CreationDate: DateName(item.createdAt),

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
      <Values.Provider
        value={{
          title,
          organizer,
          people,
          comment,
          spaceId,
          coffeebreakId,
          lunchId,
          designId,
          typeId,
          price,
          received,
          days,
          DateValues,
        }}>
        <Modal
          closeOnOverlayClick={true}
          open={open}
          onClose={() => onOpenModal(false)}
          center
          showCloseIcon={false}
          classNames={{ modal: "customModal" }}>
          <NewBooking
            handleInput={handleInput}
            handleselect={handleselect}
            handleSubmit={handleSubmit}
            Close={() => onOpenModal(false)}
          />
        </Modal>
      </Values.Provider>
    </div>
  );
}

export default Booking;
