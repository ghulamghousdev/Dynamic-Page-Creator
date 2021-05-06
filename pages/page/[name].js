import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Styles from "./[name].module.css";

const Getquerypage = ({ pageuser }) => {
  const [pageName, setPageName] = useState("");
  const [pageID, setPageID] = useState("");
  const router = useRouter();

  useEffect(() => {
    getData();
  });
  const getData = async () => {
    setPageID(router.query.name);
    console.log(pageID);
    try {
      const config = {
        headers: {
          "Content-Type": "Application/json",
        },
      };
      const res = await axios.get(
        "/api/getPage",
        {
          params: {
            product: pageID,
          },
        },
        config
      );
      setPageName(res.data.pagename);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Fragment>
      <div className={Styles.nav}>
        <div className={(Styles.row1, Styles.row)}>
          <div className={Styles.logo}>
            Create
            <span className={Styles.logoHighlighted}>Pages</span>
          </div>
        </div>
      </div>
      <div className={Styles.FlexContainer}>
        <div className={Styles.centerBox}>
          <div className={Styles.headline}>This Page is for</div>
          <div className={Styles.title}>
            <h1>{pageID}</h1>
          </div>
          <div>
            <input
              className={Styles.btnShare}
              type="submit"
              name="submit"
              value="Share"
            />
          </div>
          <div>
            <input
              className={Styles.btnSend}
              type="submit"
              name="submit"
              value="Send Notifications"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Getquerypage;
