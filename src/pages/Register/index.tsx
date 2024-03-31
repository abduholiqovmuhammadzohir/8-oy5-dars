import { useNavigate } from "react-router-dom";
import styles from "./index.module.css"

function Register() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/login")
    }

  return (
    <div className={styles.register_wrapper}>
        <form>
            <h1>Register</h1>
            <input type="text" placeholder="Enter Username"/><br />
            <input type="email" placeholder="Enter Email"/><br />
            <input type="password" placeholder="Enter Password"/><br />
            <input type="password" placeholder="Enter ReportPassword"/><br />
            <p>Already have an account? <span onClick={handleClick}>Login</span></p>
        </form>
    </div>
  )
}

export default Register