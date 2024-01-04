import React from "react";
import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({ withImage, key, item }) => {
  return (
    <div className={styles.items} key={key}>
      <Link className={styles.item} href={`/posts/${item.slug}`}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image className={styles.image} src={item.img} alt="" fill></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles[item.catSlug]}`}>
            {" "}
            {item.catSlug}
          </span>
          <h3 className={styles.postTitle}>{item.title}</h3>
          <div className={styles.detail}>
            <span className={styles.username}>{item.user.name}</span>
            <span className={styles.date}>
              {" "}
              - {item?.createdAt.substring(0, 10)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
