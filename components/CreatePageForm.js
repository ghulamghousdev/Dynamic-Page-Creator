import React, { Fragment } from "react";
import Styles from "./CreatePageForm.module.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

class CreatePage extends React.Component {
  state = {
    name: "",
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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
  submitHanler = async (e) => {
    e.preventDefault();
    const pagename = e.target.elements.name.value;
    const obj = {
      pagename,
    };
    try {
      const body = JSON.stringify(obj);
      const config = {
        headers: {
          "Content-Type": "Application/json",
        },
      };
      const res = await axios.post("/api/pages", body, config);
      console.log(res);
      this.setState({
        name: "",
      });
      e.target.elements.name.value = "";
      alert("Page Created Successfully");
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
                <Link onClick={this.createpages} href="/">
                  <a className={Styles.navbtn}>Create</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={Styles.flexCenter}>
          <div className={Styles.authContainer}>
            <div className={Styles.heading}>Crete New Page</div>
            <form className={Styles.createForm} onSubmit={this.submitHanler}>
              <input
                className={Styles.inputField}
                type="text"
                name="name"
                placeholder="Enter the page name"
                onChange={this.changeHandler}
              />
              <input
                className={Styles.btn}
                type="submit"
                name="submit"
                value="Create Page"
              />
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CreatePage;
