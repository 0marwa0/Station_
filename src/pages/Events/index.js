// Event page
import React, { useState, useEffect } from "react";
import { EventsColumns, EventsData } from "./Config";
// import { EventsData } from "../../fakeData";
import CustomPage from "../shared/CustomPage";
import { DateName } from "../Dashboard";

import "react-responsive-modal/styles.css";
import { Mesg, FailedMesg } from "../../API/APIMessage";
import { LoadData } from "../../API";
import { monthNames } from "../shared/assets";
import { Modal } from "react-responsive-modal";
import { useHistory } from "react-router-dom";
function Events(props) {
  const [open, setOpen] = useState(false);

  const onOpenModal = (open) => {
    setOpen(open);
  };
  const [Loading, setLoading] = useState(false);
  const [events, setevents] = useState([]);
  const [data, setdata] = useState([]);
  const [Filterdata, setFilterdata] = useState([]);
  const loadEvent = () => {
    setLoading(true);
    LoadData(
      "events",
      (err, data) => {
        setLoading(false);
        if (err) {
          Mesg(err);
        } else {
          setevents(data.data.rows);

          let Events = [];
          data.data.rows.map((item, index) => {
            // console.log(item.approvedBy, "event admin");
            console.log(Events);
            Events.push({
              id: index + 1,
              Organizer: { name: item.organizer, id: item.bookId },
              Date: DateName(item.createdAt),
              Space: [`${item.space.title}`],
              SoldTickets: item.people - item.ticketLeft,
              Approvedby: props.admins
                .filter((i) => i.id === item.approvedBy)
                .map((i) => i.username)
                .toString(),
              edit: item.bookId,
            });
          });
          setdata(Events);
          setFilterdata(Events);
        }
      },
      (err) => {
        setLoading(false);
        FailedMesg(err, "Something worng happend !");
        // console.log(err, "failed");
      }
    );
  };
  useEffect(() => {
    if (localStorage.getItem("station_token")) {
      loadEvent();
    } else {
      props.history.push("/login");
    }
  }, []);

  const [searchText, setsearchText] = useState("");

  const HandleSearch = (e) => {
    let value = e.target.value;
    setsearchText(value);
    if (value) {
      setFilterdata(data);
    }
  };

  const Filter = () => {
    let newData = data.filter((item) =>
      item.Organizer.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(data, searchText);

    setFilterdata(newData);
  };
  return (
    <div>
      <CustomPage
        pageTitle="events"
        columns={EventsColumns}
        data={Filterdata}
        HandleSearch={HandleSearch}
        filter={Filter}
        Item="event"
        Loading={Loading}
        onOpenModal={onOpenModal}
      />
    </div>
  );
}

export default Events;
