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
        <div>
            <h1>HOLA</h1>
        </div>

    )
}


export default connect((state) => ({
    // credentials: state.credentials
}))(Login);

