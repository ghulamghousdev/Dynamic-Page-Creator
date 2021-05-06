import React, { Fragment } from "react";
import Styles from "./PagesList.module.css";
import axios from "axios";
import PagesListItem from "./PagesListItem";
import Link from "next/link";
import { useRouter } from "next/router";

class CreatePage extends React.Component {
  constructor() {
    super();
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      pages: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  pages = (e) => {
    const router = useRouter();
    e.preventDefault();
    router.push("/list");
  };
  createpage = (e) => {
    const router = useRouter();
    e.preventDefault();
    router.push("/");
  };

  fetchData = async (e) => {
    try {
      const config = {
        headers: {
          "Content-Type": "Application/json",
        },
      };
      const res = await axios.get("/api/getAllPages", config);
      console.log(res);
      this.setState((prevState, props) => {
        return {
          pages: prevState.pages.concat(res.data),
        };
      });
    } catch (err) {
      alert(err);
    }
  };
  render() {
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
                <Link onClick={this.pages} href="/list">
                  <a className={Styles.navbtn}>Pages</a>
                </Link>
              </li>
              <li className={Styles.menuItem}>
                <Link onclick={this.createpage} href="/">
                  <a className={Styles.navbtn}>Create</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={Styles.bx}>
          <div className={Styles.boxMargin}>
            <h1 className={Styles.heading}>All Pages</h1>
            {this.state.pages.map((cur) => (
              <PagesListItem pagename={cur.pagename} key={cur._id} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CreatePage;
