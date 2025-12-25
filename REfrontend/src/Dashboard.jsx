import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="video-container">
      
      <video className="bg-video" autoPlay loop muted>
        <source src="public/bg1.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="content">
        <div>
        <h1 className="heading">WELCOME TO EPIDEMIOLOGY-AI</h1>
        <h2>We help you understand and track disease trends using the power of artificial intelligence.

Our goal is to make health information easier to access, easier to understand, and useful for keeping communities safe.</h2>
        </div>
        <div className="buttons">
          <div className="login_button">
            <Link to="/login" className="login">Login</Link>
          </div>
          <div className="register_button">
            <Link to="/register" className="register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
