import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Styles from "./[name].module.css";
import Link from "next/link";

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
  const pages = (e) => {
    const router = useRouter();
    e.preventDefault();
    router.push("/list");
  };
  const createpage = (e) => {
    const router = useRouter();
    e.preventDefault();
    router.push("/");
  };

  return (
    <Fragment>
      <div className={Styles.nav}>
        <div className={(Styles.row1, Styles.row)}>
          <div className={Styles.logo}>
            Create
            <span className={Styles.logoHighlighted}>Pages</span>
          </div>
          <ul className={Styles.menu}>
            <li className={Styles.menuItem}>
              <Link
                onClick={(e) => {
                  e.pages();
                }}
                href="/list"
              >
                <a className={Styles.navbtn}>Pages</a>
              </Link>
            </li>
            <li className={Styles.menuItem}>
              <Link
                onclick={(e) => {
                  e.createpage();
                }}
                href="/"
              >
                <a className={Styles.navbtn}>Create</a>
              </Link>
            </li>
          </ul>
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
