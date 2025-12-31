import { Link } from "react-router-dom";
import  styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.videoContainer}>
      
      <video className={styles.bgVideo} autoPlay loop muted>
        <source src="/public/bg1.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className={styles.content}>
        <div>
        <h1 className={styles.heading}>WELCOME TO EPIDEMIOLOGY-AI</h1>
        <h2>We help you understand and track disease trends using the power of artificial intelligence.

Our goal is to make health information easier to access, easier to understand, and useful for keeping communities safe.</h2>
        </div>
        <div className={styles.buttons}>
          <div className={styles.login_button}>
            <Link to="/login" className={styles.login}>Login</Link>
          </div>
          <div className={styles.register_button}>
            <Link to="/register" className={styles.register}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
