import styles from "./App.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.happyBirthday}>
        <p className={styles.happy}>Happy</p>
        <p className={styles.happy}>Birthday</p>
      </div>
      <div className={styles.riya}>Riya</div>
      <div className={styles.mayYourDreams}>
        May your dreams become reality and may the year ahead be filled with joy
        and success!
      </div>
    </div>
  );
};

export default Main;
