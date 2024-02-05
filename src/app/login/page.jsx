"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.socialButton}
          onClick={() =>
            signIn("google", {
              callbackUrl: `${process.env.NEXTAUTH_URL}`,
            })
          }
        >
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div
          className={styles.socialButton}
          onClick={() =>
            signIn("facebook", {
              callbackUrl: `${process.env.NEXTAUTH_URL}`,
            })
          }
        >
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
