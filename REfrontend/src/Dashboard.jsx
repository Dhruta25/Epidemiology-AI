import { Link } from "react-router-dom"
import "./Dashboard.css"
function Dashboard(){
     return(
        <div className="container">
          <h1 className="heading">WELLCOME !!!!!</h1>
          <div className="buttons">
             <div className="login_button">
                <Link to="/login" className="login">login</Link>
              </div>
          
             <div className="register_button">
               <Link to="/register" className="register">Register</Link>
             </div>
          </div>
        </div>
     )
}
export default Dashboard