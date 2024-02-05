import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async (page, isFeatured) => {
  const res = await fetch(
    `https://uniq-blog-app.vercel.app/api/posts?page=${page}&isFeatured=${isFeatured}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async ({ page, isFeatured }) => {
  const { posts } = await getData(page, isFeatured);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey! Margo dev here!</b>
        <br /> Discover my stories and creative ideas.
      </h1>
      {posts?.map((item) => (
        <div className={styles.post} key={item._id}>
          {item.img && (
            <div className={styles.imgContainer}>
              <Image src={item.img} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{item.title}</h1>
            <p
              className={styles.postDesc}
              dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 300) }}
            />

            <Link href={`/posts/${item.slug}`} className={styles.button}>
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
