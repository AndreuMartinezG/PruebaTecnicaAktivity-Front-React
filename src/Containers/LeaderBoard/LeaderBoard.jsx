import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import './LeaderBoard.css'

const LeaderBoard = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)

    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)

    },)


    return (
        <div className='designLeaderBoard'>
            <div className="designHeaderLeader">
                <div className="menuHeaderLeader"></div>
                <div className="logoHeaderLeader"></div>
                <div className="lenguageHeaderLeader"></div>
                <div className="profileImgHeaderLeader"></div>
                <div className="profileHeaderLeader">John Smith</div>
                <div className="logoutHeaderLeader"></div>
            </div>
            <div className="designBodyLeader">
                <div className="leaderBoardHeader">
                    <div className="leaderBoardHeaderBG"></div>
                    <div className="rankTitle">RANK</div>
                    <div className="evolutionTitle">EVOLUTION</div>
                    <div className="avatarTitle">AVATAR</div>
                    <div className="aktiverTitle">AKTIVER</div>
                    <div className="eventsTitle">EVENTS</div>
                    <div className="trophiesTitle">TROPHIES</div>
                    <div className="timeSpentTitle">TIME SPENT</div>
                    <div className="pointsTitle">POINTS</div>
                </div>
                <div className="leaderBoardRow1"></div>
                <div className="leaderBoardRow2"></div>
                <div className="leaderBoardRow3"></div>
                <div className="leaderBoardRow4"></div>
                <div className="leaderBoardRow5"></div>
                <div className="leaderBoardRow6"></div>
                <div className="leaderBoardRow7"></div>
                <div className="leaderBoardRow8"></div>
                <div className="leaderBoardRow9"></div>
                <div className="leaderBoardRow10"></div>
            </div>
        </div>
    )
}
export default connect((state) => ({
    //variables de rdx a crear
}))(LeaderBoard);