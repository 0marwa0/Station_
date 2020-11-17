// Aritcle page //

import React, { useState, useEffect } from "react";
import ArticlesColumns, { ArticlesData } from "./Config.js";
// import { ArticlesData } from "../../fakeData";
import CustomPage from "../shared/CustomPage";
import "react-responsive-modal/styles.css";
import { Mesg, FailedMesg } from "../../API/APIMessage";
import { LoadData } from "../../API";
import { monthNames } from "../shared/assets";
function Aritcle(props) {
  const [Loading, setLoading] = useState(false);
  const [articles, setarticles] = useState([]);
  const loadArticle = () => {
    setLoading(true);
    LoadData(
      "articles",
      (err, data) => {
        setLoading(false);
        // ArticlesData(data.data.rows, (item) => { });
        setarticles(data.data.rows);

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
  };
  useEffect(() => {
    if (localStorage.getItem("station_token")) {
      loadArticle();
    } else {
      props.history.push("/login");
    }
  }, []);
  let Articles = [];
  articles.map((item) => {
    Articles.push({
      image: item.image,
      Title: item.title,

      CreatedDate:
        item.createdAt.slice(0, 2) +
        " " +
        monthNames[
          item.createdAt.split("-")[1] === 0
            ? item.createdAt.split("-")[1].slice(1) - 1
            : item.createdAt.split("-")[1] - 1
        ] +
        " " +
        item.createdAt.split("-")[0],
      Createdby: props.admins
        .filter((i) => i.id === item.adminId)
        .map((i) => i.username)
        .toString(),
    });
  });

  return (
    <div>
      <CustomPage
        pageTitle="Articles"
        columns={ArticlesColumns}
        data={Articles}
        Loading={Loading}
        Item="aritcle"
      />
    </div>
  );
}

export default Aritcle;
