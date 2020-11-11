// Aritcle page //

import React, { useState, useEffect } from "react";
import ArticlesColumns, { ArticlesData } from "./Config.js";
// import { ArticlesData } from "../../fakeData";
import CustomPage from "../shared/CustomPage";
import "react-responsive-modal/styles.css";
import { Mesg, FailedMesg } from "../../API/APIMessage";
import { LoadData } from "../../API";

function Aritcle() {
  const [Loading, setLoading] = useState(false);
  const [articles, setarticles] = useState([]);

  useEffect(() => {
    setLoading(true);
    LoadData(
      "articles",
      (err, data) => {
        setLoading(false);

        ArticlesData(data.data.rows, (item) => {
          setarticles(item);
        });

        if (err) {
          Mesg(err);
        }
      },
      (err) => {
        setLoading(false);
        FailedMesg(err, "Something worng happend !");
        console.log(err, "failed");
      }
    );
  }, []);

  return (
    <div>
      <CustomPage
        pageTitle="Articles"
        columns={ArticlesColumns}
        data={articles}
        Loading={Loading}
        Item="aritcle"
      />
    </div>
  );
}

export default Aritcle;
