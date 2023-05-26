

import styles from "./ScheduleItem.module.css";

function ScheduleItem({ act }) {

  const slug = act.act.trim().toLowerCase().split(" ").join("-").replace("/", "-").replace("'", "").replace("_", "").replace(",", "").replace("--", "-").replace("--", "-");


  function handleDay() {
    switch (act.day) {
      case "mon":
        return "Monday";

      case "tue":
        return "Tuesday";

      case "wed":
        return "Wednesday";
      case "thu":
        return "Thursday";
      case "fri":
        return "Friday";
      case "sat":
        return "Saturday";
      case "sun":
        return "Sunday";
    }
  }
  return (
    <article className={styles.item}>
      <div>
        <h2 className={styles.topText}>{act.act}</h2>
        <span className={styles.bottomText}>
          <em className={styles[act.stage.toLowerCase()]}>{act.stage}</em> |&nbsp;
          {(Number(act.end.split(":")[0]) - Number(act.start.split(":")[0])) * 60} minutes
        </span>
      </div>
      <div className={`${styles.specs} ${styles[act.stage]}`}>
        <span className={styles.topText}>{handleDay()}</span>
        <span className={styles.bottomText}>{act.start}</span>
      </div>
 
    </article>
  );
}

export default ScheduleItem;
