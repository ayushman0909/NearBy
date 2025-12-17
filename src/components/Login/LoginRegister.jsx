import logo from "../../assets/logo.png"
import styles from "../../Css/LoginRegistraion/LoginRegister.module.css";
import { useState } from "react";
const LoginRegister = () => {
  const [newuser, setNewuser] = useState(false);

  const HandleUser=()=>{
    setNewuser(prev=>!prev);
  }
  return (
    <div className={styles.LoginRegisterPage}>
      <div className={styles.formContainer}>
        <div
          className={`${styles.formSubContainer} ${styles.formSubContainer1}`}
        >
          {newuser ? (
            <>
              
              <h1>Looks like you're new here! </h1>
              <p>Sign up with your email to get started</p>
              
                <img src={logo} alt="Logo image" />
              
            </>
          ) : (
            <>
            
              <h1>Login </h1>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
              
               
                <img src={logo} alt="Logo image" />
              
            </>
          )}
        </div>
        <div
          className={`${styles.formSubContainer} ${styles.formSubContainer2}`}
        >
          {/* <h1>Login Form</h1> */}

          {newuser ? (
            <>
            <form action="#">
              <div className={styles.formInput}>
                <label for="RegisterEmail">Email:</label>
                <input
                  id="RegisterEmail"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className={styles.formInput}>
                <label for="Mobile">Mobile No:</label>
                <input
                  id="Mobile"
                  name="Mobile"
                  type="tel"
                  maxLength={10}
                  placeholder="Enter Mobile Number"
                />
              </div>

              <div className={styles.formInput}>
                <label for="Registerpassword">Password:</label>
                <input
                  id="Registerpassword"
                  name="Registerpassword"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className={styles.formInput}>
                <label for="re_enterRegisterpassword">Re-enter Password:</label>
                <input
                  id="re_enterRegisterpassword"
                  name="re_enterRegisterpassword"
                  type="password"
                  placeholder="Re-enter Password"
                />
              </div>
              <div className={styles.formButton}>
                <p>
                  By continuing, you agree to NearByNoteBook's Terms of Use and
                  Privacy Policy.
                </p>
                <button>Register</button>
              </div>
            </form>
            <div className={styles.newRegister}>
            <p onClick={HandleUser}>Existing User? Log in</p>
          </div>
          </>
          ) : (
            <>
            <form action="#">
              <div className={styles.formInput}>
                <label for="loginEmail">Email:</label>
                <input
                  id="loginEmail"
                  name="email"
                  type="email"
                  placeholder="Enter Email/Mobile Number"
                />
              </div>
              <div className={styles.formInput}>
                <label for="loginPassword">Password:</label>
                <input
                  id="loginPassword"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className={styles.formButton}>
                <p>
                  By continuing, you agree to NearByNoteBook's Terms of Use and
                  Privacy Policy.
                </p>
                <button>Login</button>
              </div>
            </form>
            <div className={styles.newRegister}>
            <p onClick={HandleUser}>New to NearByBook? Create an account</p>
          </div>
          </>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
