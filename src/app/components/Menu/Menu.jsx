import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const getData = async (page, isPopular) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}&isPopular=${isPopular}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Menu = async ({ page, isPopular }) => {
  const { posts } = await getData(page, isPopular);

  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>Whats hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      {posts?.map((item) => (
        <MenuPosts item={item} key={item._id} withImage={false} />
      ))}
      <h2 className={styles.subTitle}>Discovered by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subTitle}>Chosen by the editon</h2>
      <h1 className={styles.title}>Editors Choice</h1>
      {posts?.map((item) => (
        <MenuPosts item={item} key={item._id} withImage={true} />
      ))}
    </div>
  );
};

export default Menu;
