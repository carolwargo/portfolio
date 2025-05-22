import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Signup() {
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [password, setPassword] = useState('password123');
    //const [newsletterChecked, setNewsletterChecked] = useState(true);

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');

        // Reset previous error messages
        setFirstNameError('');
        setLastNameError('');
        setEmailError('');
        setPasswordError('');

        // Validation logic
        let isValid = true;

        if (firstName.trim() === '') {
            setFirstNameError('First Name is required');
            isValid = false;
        }

        if (lastName.trim() === '') {
            setLastNameError('Last Name is required');
            isValid = false;
        }

        if (email.trim() === '') {
            setEmailError('Email is required');
            isValid = false;
        }

        if (password.trim() === '') {
            setPasswordError('Password is required');
            isValid = false;
        }

        // If form is valid, proceed with submission
        if (isValid) {
            console.log('Submitting form...');
            console.log('First Name:', firstName);
            console.log('Last Name:', lastName);
            console.log('Email:', email);
            console.log('Password:', password);
            /*console.log('Subscribe to newsletter:', newsletterChecked ? 'Yes' : 'No');*/
        }
    };

    return (

                <div className="signup" id='signup'>
                    <div className="w3-container bg-white shadow rounded">
                 
                        <div className="w3-padding-16 border-dark">
                            <form onSubmit={handleSubmit} autoComplete="on" >
                                <div className="row my-4">
                                    <div className="col">
                                        <div className="form-outline">
                                            <input 
                                                type="text" 
                                                id="firstName" 
                                                className={`form-control shadow-sm border border-1 ${firstNameError ? 'is-invalid' : ''}`}
                                                placeholder="First Name"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                autoComplete="given-name"
                                            />
                                            <div className="invalid-feedback">{firstNameError}</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <input 
                                                type="text" 
                                                id="lastName" 
                                                className={`form-control shadow-sm border border-1 ${lastNameError ? 'is-invalid' : ''}`}
                                                placeholder="Last Name"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                autoComplete="family-name"
                                            />
                                            <div className="invalid-feedback">{lastNameError}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-outline mb-4">
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className={`form-control shadow-sm border border-1 ${emailError ? 'is-invalid' : ''}`}
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="email"
                                    />
                                    <div className="invalid-feedback">{emailError}</div>
                                </div>

                                <div className="form-outline mb-4">
                                    <input 
                                        type="password" 
                                        id="anewpassword" 
                                        className={`form-control shadow-sm border border-1 ${passwordError ? 'is-invalid' : ''}`}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="new-password"
                                    />
                                    <div className="invalid-feedback">{passwordError}</div>
                                </div>

                              {/**   <div className="form-check d-flex justify-content-center mb-4">
                                    <input 
                                        className="form-check-input me-2 bg-black border-black" 
                                        type="checkbox" 
                                        id="newsletterCheck"  
                                        checked={newsletterChecked}
                                        onChange={(e) => setNewsletterChecked(e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor="newsletterCheck">
                                        Subscribe to our newsletter
                                    </label>
                                </div>
*/}
                                <button 
                                    type="submit" 
                                    className="btn btn-black btn-block mb-4 px-5 shadow w3-round-xxxlarge"
                                >
                                    Sign up
                                </button>

                                <div className="text-center text-black w3-margin-bottom">
                                    <p>or sign up with:</p>
                                    <button 
                                        type="button" 
                                        className="btn btn-dark btn-floating mx-1 shadow"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button 
                                        type="button" 
                                        className="btn btn-dark btn-floating mx-1 shadow"
                                    >
                                        <i className="fab fa-google"></i>
                                    </button>

                                    <button  
                                        type="button" 
                                        className="btn btn-dark btn-floating mx-1 shadow"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button 
                                        type="button" 
                                        className="btn btn-dark btn-floating mx-1 shadow"
                                    >
                                        <i className="fab fa-github"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        
    );
};

export default Signup;
