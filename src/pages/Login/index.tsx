import { useNavigate } from "react-router-dom";
import styles from "./index.module.css"

function Login() {
  const navigate = useNavigate();

    function handleClick() {
        navigate("/register")
    }
  return (
    <div className={styles.register_wrapper}>
        <form>
            <h1>Login</h1>
            <input type="text" placeholder="Enter Username"/><br />
            <input type="password" placeholder="Enter Password"/><br />
            <p>Don’t have an account? <span onClick={handleClick}>Register</span></p>
        </form>
    </div>
  )
}

export default Login