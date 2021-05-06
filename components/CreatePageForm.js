import React, { Fragment } from "react";
import Styles from "./CreatePageForm.module.css";
import axios from "axios";

class CreatePage extends React.Component {
  state = {
    name: "",
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
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
      e.target.elements.name.value = "";
    } catch (err) {
      console.log(err);
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
          </div>
        </div>
        <div className={Styles.flexCenter}>
          <div className={Styles.authContainer}>
            <form className={Styles.createForm} onSubmit={this.submitHanler}>
              <input
                className={Styles.inputField}
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.changeHandler}
              />
              <input
                className={Styles.btn}
                type="submit"
                name="submit"
                value="Create"
              />
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CreatePage;
