import React from "react";
import InfoSort from "../components/InfoSort";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Pagination from "../components/Pagination";
import Subscribe from "../components/Subscribe";
import '../index.scss'
import styles from "./CategoryPage.module.scss";

export const CategoryPage: React.FC = () => {
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


