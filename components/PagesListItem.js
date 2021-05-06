import React from "react";
import Styles from "./PagesListItem.module.css";
import { useRouter } from "next/router";

function ClassListItem(props) {
  const router = useRouter();
  return (
    <div className={Styles.pages}>
      <a
        onClick={() => {
          e.preventDefault();
          router.push(`/page/${props.pagename}`);
        }}
        href={`/page/${props.pagename}`}
      >
        <p className={Styles.pageName}>{props.pagename}</p>
      </a>
    </div>
  );
}

export default ClassListItem;
