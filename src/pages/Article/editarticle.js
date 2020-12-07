import React, { useState, useEffect } from "react";
import { editData } from "../../API";
import { useParams } from "react-router-dom";

import Newarticle from "./newarticle";
import { LoadData, addData, addFile } from "../../API";
import { SuccessMesg, FailedMesg, Mesg } from "../../API/APIMessage";

function Index() {
  let { id } = useParams();
  const [description, setdescription] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    LoadData(
      `article/${id}`,
      (err, data) => {
        if (err) {
          Mesg(err);
          //setLoading(false);
        } else {
          setData(data.data);
          console.log("one article", JSON.parse(data.data.description));
          setdescription(JSON.parse(data.data.description));
        }
      },
      (err) => {
        //setLoading(false);
        FailedMesg(err, "Something worng happend !");
      }
    );
  }, []);
  let datad = description;
  return data ? <Newarticle type="edit" description={datad} /> : null;
}

export default Index;
