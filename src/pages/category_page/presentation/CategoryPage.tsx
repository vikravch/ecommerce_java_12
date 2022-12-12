import React from "react";
import InfoSort from "../components/InfoSort/index";
import Sidebar from "../components/Sidebar/index";
import Content from "../components/Content/index";
import Pagination from "../components/Pagination/index";
import Subscribe from "../components/Subscribe/index";
import '../index.scss'
import styles from "./CategoryPage.module.scss";

type Props = {

}

export const CategoryPage: React.FC = (props: Props) => {
  return (
    <main>
      <div className={styles.wrapper}>
        <InfoSort />
        <Sidebar />
        <Content />
        <Pagination />
      </div>
      <Subscribe />
    </main>
  );
};


