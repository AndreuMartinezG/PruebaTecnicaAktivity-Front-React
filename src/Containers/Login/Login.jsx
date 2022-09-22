import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

//Conexión con los Datos almacenados en REDUX
import { connect } from 'react-redux'

import './Login.css'

const Login = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)

    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)
        // if (props.credentials?.token) {
        //     navigate("/deskboard");
        // }
    })


    return (

        <div className="appLogin">
            <div className="backgroundClass"></div>
            {/* Apartado del diseño para el HEADER */}
            <div className="header">
                <div className="logo"></div>
                <div className="languageSelector"></div>
                <div className="signUpBTN">Sign up</div>
                <div className="requestDemoBTN">
                    <div className="requestDemoTXT">Request Demo</div>
                </div>
            </div>

            {/* Apartado del diseño para el LOGIN BOX */}

            <div className="loginBox">
                <div className="box">
                    <div className="mainTitle">Welcome to Aktivity</div>
                    <div className="welcomeMsg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className="loginForm">
                        <div className="emailInput">
                            <input className="inputEmail" placeholder="Enter your email" type="text" />
                        </div>
                        <div className="passwordInput">
                            <input className="inputPassword" placeholder="Password" type="password" />
                            <div className="hideTXT"></div>
                        </div>
                        <div className="troubleSignIn">Having trouble in sign in?</div>
                        <div className="signIn">
                            <div className="signInTXT">Sign in</div>
                        </div>
                    </div>
                    <div className="altSignInOptions">
                        <div className="altSignInTitle">Or Sign in with</div>
                        <div className="facebookBTN">
                            <div className="facebookIcon"></div>
                            <div className="facebookTXT">Facebook</div>
                        </div>
                        <div className="appleBTN">
                            <div className="appleIcon"></div>
                            <div className="appleTXT">Apple</div>
                        </div>
                        <div className="googleBTN">
                            <div className="googleIcon"></div>
                            <div className="googleTXT">Google</div>
                        </div>
                    </div>
                    <div className="dontHaveAcc">Don’t have an account? Sign up Now</div>
                </div>
                <div className="copyright">Copyright Aktivity 2022 | Privacy Policy</div>
            </div>
        </div>
    )
}


export default connect((state) => ({
    // credentials: state.credentials
}))(Login);

