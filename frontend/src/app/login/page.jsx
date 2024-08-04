import Image from "next/image";
import styles from "./login.module.scss";
import { FaUser, FaLock } from "react-icons/fa";


export default function Login(){
    return(
        // <main className = {styles.main}>
        //     <div className = {styles.loginContainer}>
        //         <form className= {styles.loginForm}>
        //             <h2> Login</h2>
        //             <div className={styles.loginComp}>
        //                 {/* <label htmlFor = "username">Username</label> */}
        //                 <input type = "text"  id = "username" placeholder="Username" name = "username" required/>
        //             </div>
        //             <div className = {styles.loginComp}>
        //                 {/* <label htmlFor = "password">Password</label> */}
        //                 <input  type = "password" id = "password" placeholder= "Password" name = "password" required/>
        //             </div>
        //             <button type = "submit">Login</button>
        //         </form>
        //     </div>
        // </main>
        <div className= {styles.loginContainer}>
            <form action = "">
                <h1>Login</h1>
                <div className={styles.loginComp}>
                    <input type = "text" placeholder = "Username" required />
                    <FaUser className= {styles.icon}/>
                </div>
                <div className={styles.loginComp}>
                    <input type = "password" placeholder = "Password" required />
                    <FaLock className={styles.icon}/>
                </div>
                <div className={styles.forgotPass}>
                    <label><input type = "checkbox"  />Remember Me</label>
                    <a href = "#"> </a>
                </div>

                <button type = "submit">Login </button>
            </form>
        </div>

    )
}