import './styles.css';
import {useState} from "react";


// we can use the form validation library but here we will do that manually
const FormValidation = () => {
    // create states to handle positive and negative states for each input field of the form
    // and corresponding color for each positive and negative state for that field
    // eg username if less than 8 character red color state is neagtive
    // eg email until it includes @gmail.com etc red color negative state
    // eg if password length<8 characters or doesnt include number symbols and alphabet negative state
    // if confirm password does not match password field negative state and so on
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorUserName, setErrorUserName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [userColor, setUserColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");


    function validate(e){
        e.preventDefault();
        if (username.length > 8) {
            setErrorUserName("");
            setUserColor("green");
        } else {
            setErrorUserName("Username must be 8 letters long.");
            setUserColor("red");
        }

        if (email.includes("@gmail")) {
            setErrorEmail("");
            setEmailColor("green");
        } else {
            setEmailColor("red");
            setErrorEmail("Email should have @gmail");
        }

        if (password.length > 8) {
            setErrorPassword("");
            setPasswordColor("green");
        }else{
            setErrorPassword("Password must be 8 letters long.");
            setPasswordColor("red");
        }

        if (password !== "" && password === confirmPassword) {
            setErrorConfirmPassword("");
            setConfirmPasswordColor("green");
        } else {
            setErrorConfirmPassword("Passwords didn't matched.");
            setConfirmPasswordColor("red");
        }

    }
    // create react fragment and within it create a dive for card and card-image
    // create form component without action to avoid sending any data to server
    // within form component create input fields for each of the state following that Create a Submit Button
    // When submit button is clicked create a function that validates the form entered data
    return (
        <>
            <div className="card">
                <div className="card-image"></div>

                <form>
                    <input type="text" placeholder="Name" style={{borderColor: userColor}} value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                    <p className="error">{errorUserName}</p>

                    <input type="text" placeholder="Email" style={{borderColor: emailColor}} value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <p className="error">{errorEmail}</p>

                    <input type="text" placeholder="Password" style={{borderColor: passwordColor}} value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <p className="error">{errorPassword}</p>

                    <input type="text" placeholder="ConfirmPassword" style={{borderColor: confirmPasswordColor}}
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <p className="error">{errorConfirmPassword}</p>

                    <button className="submit-btn" onClick={validate}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );

}

export default FormValidation;