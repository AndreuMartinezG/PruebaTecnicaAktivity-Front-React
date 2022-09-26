import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

//Conexión con los Datos almacenados en REDUX
import { connect } from 'react-redux'
import { LOGIN } from '../../Redux/types';

import './Login.css'

const Login = (props) => {


    let navigate = useNavigate();

    const [userData, setUserData] = useState({ email: "", password: "" });


    useEffect(() => {
        if (props.isLoggedIn) {
            navigate('/');
        }
    }, []);


    const introduceData = (e) => {

        setUserData({ ...userData, [e.target.name]: e.target.value })

    };

    const login = async () => {
        try {

            let body = {
                email: userData.email,
                password: userData.password
            }

            let resultado = await axios.post("http://127.0.0.1:3001/usuarios/login", body);

            //Cambiamos el valor del hook credenciales, por lo tanto se recargará el componente
            if (resultado.data === "Usuario o contraseña inválido") {
                alert("Usuario o Contraseña inválido")
            } else {

                //Guardaríamos los datos en redux...

                props.dispatch({ type: LOGIN, payload: resultado.data });

                // Si el login es correcto navegamos a la siguiente ventana

                setTimeout(() => {
                    navigate("/leaderboard");
                }, 500);
            }


        } catch (error) {

            alert("Usuario o Contraseña inválido")
            console.log(error.response)

        }

    }


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
                            <input className="inputEmail" name="email" placeholder="Enter your email" type="text" onChange={(e) => { introduceData(e) }} />
                        </div>
                        <div className="passwordInput">
                            <input className="inputPassword" name="password" placeholder="Password" type="password" onChange={(e) => { introduceData(e) }} />
                            <div className="hideTXT">Hide</div>
                        </div>
                        <div className="troubleSignIn">Having trouble in sign in?</div>
                        <div className="signIn" onClick={() => login()}>
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
                    <div className="dontHaveAcc">Don’t have an account? <span className="SingUpNow"> Sign up Now</span></div>
                </div>
                <div className="copyright">Copyright Aktivity 2022 | Privacy Policy</div>
            </div>
        </div>
    )
}


export default connect((state) => ({
    credentials: state.credentials
}))(Login);

