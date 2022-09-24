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

                {/* LEADER BOARD Titles */}

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

                {/* LEADER BOARD RANKERS TOP 1 - 10 */}
                {/* TOP 1 */}

                <div className="leaderBoardRow1">
                    <div className="leaderBoardRow1BG"></div>
                    <div className="leaderBoardRank1">
                        <div className="boardRank1BG"></div>
                        <div className="boardRank1TXT">1</div>

                    </div>
                    <div className="boardRank1Evolution">
                        <div className="boardRank1EvolutionIMG"></div>
                        <div className="boardRank1EvolutionTXT">+1</div>
                    </div>
                    <div className="boardRank1Avatar"></div>
                    <div className="boardRank1Aktiver">
                        <div className="boardRank1AktiverTXT">LIVERPOOL</div>
                        <div className="boardRank1AktiverFlag"></div>
                        <div className="boardRank1AktiverName">SAMANTHA SMITH</div>
                    </div>
                    <div className="boardRank1Events">9</div>
                    <div className="boardRank1Trophies">126</div>
                    <div className="boardRank1TimeSpent">6d 04h 12m</div>
                    <div className="boardRank1Points">
                        <div className="boardRank1PointsBG"></div>
                        <div className="boardRank1PointsTXT">5.431</div>
                    </div>
                    <div className="boardRank1ViewProfile"></div>
                </div>

                {/* TOP 2 */}

                <div className="leaderBoardRow2">
                    <div className="leaderBoardRow2BG"></div>
                    <div className="leaderBoardRank2">
                        <div className="boardRank2BG"></div>
                        <div className="boardRank2TXT">2</div>
                    </div>
                    <div className="boardRank2Evolution">
                        <div className="boardRank2EvolutionIMG"></div>
                        <div className="boardRank2EvolutionTXT">-1</div>
                    </div>
                    <div className="boardRank2Avatar"></div>
                    <div className="boardRank2Aktiver">
                        <div className="boardRank2AktiverTXT">LONDON</div>
                        <div className="boardRank2AktiverFlag"></div>
                        <div className="boardRank2AktiverName">JANE TAYLOR</div>
                    </div>
                    <div className="boardRank2Events">8</div>
                    <div className="boardRank2Trophies">122</div>
                    <div className="boardRank2TimeSpent">5d 22h 36m</div>
                    <div className="boardRank2Points">
                        <div className="boardRank2PointsBG"></div>
                        <div className="boardRank2PointsTXT">5.203</div>
                    </div>
                    <div className="boardRank2ViewProfile"></div>
                </div>

                {/* TOP 3 */}

                <div className="leaderBoardRow3">
                    <div className="leaderBoardRow3BG"></div>
                    <div className="leaderBoardRank3">
                        <div className="boardRank3BG"></div>
                        <div className="boardRank3TXT">3</div>
                    </div>
                    <div className="boardRank3Evolution">
                        <div className="boardRank3EvolutionIMG"></div>
                        <div className="boardRank3EvolutionTXT">=</div>
                    </div>
                    <div className="boardRank3Avatar"></div>
                    <div className="boardRank3Aktiver">
                        <div className="boardRank3AktiverTXT">MANCHESTER</div>
                        <div className="boardRank3AktiverFlag"></div>
                        <div className="boardRank3AktiverName">JAMES JONES</div>
                    </div>
                    <div className="boardRank3Events">8</div>
                    <div className="boardRank3Trophies">103</div>
                    <div className="boardRank3TimeSpent">5d 20h 56m</div>
                    <div className="boardRank3Points">
                        <div className="boardRank3PointsBG"></div>
                        <div className="boardRank3PointsTXT">4.915</div>
                    </div>
                    <div className="boardRank3ViewProfile"></div>
                </div>

                {/* TOP 4 */}

                <div className="leaderBoardRow4">
                    <div className="leaderBoardRow4BG"></div>
                    <div className="leaderBoardRank4">
                        <div className="boardRank4BG"></div>
                        <div className="boardRank4TXT">4</div>
                    </div>
                    <div className="boardRank4Evolution">
                        <div className="boardRank4EvolutionIMG"></div>
                        <div className="boardRank4EvolutionTXT">+1</div>
                    </div>
                    <div className="boardRank4Avatar"></div>
                    <div className="boardRank4Aktiver">
                        <div className="boardRank4AktiverTXT">BIRMINGHAM</div>
                        <div className="boardRank4AktiverFlag"></div>
                        <div className="boardRank4AktiverName">DUKE WILSON</div>
                    </div>
                    <div className="boardRank4Events">9</div>
                    <div className="boardRank4Trophies">95</div>
                    <div className="boardRank4TimeSpent">5d 03h 10m</div>
                    <div className="boardRank4Points">
                        <div className="boardRank4PointsBG"></div>
                        <div className="boardRank4PointsTXT">4.817</div>
                    </div>
                    <div className="boardRank4ViewProfile"></div>
                </div>

                {/* TOP 5 */}

                <div className="leaderBoardRow5">
                    <div className="leaderBoardRow5BG"></div>
                    <div className="leaderBoardRank5">
                        <div className="boardRank5BG"></div>
                        <div className="boardRank5TXT">5</div>
                    </div>
                    <div className="boardRank5Evolution">
                        <div className="boardRank5EvolutionIMG"></div>
                        <div className="boardRank5EvolutionTXT">+1</div>
                    </div>
                    <div className="boardRank5Avatar"></div>
                    <div className="boardRank5Aktiver">
                        <div className="boardRank5AktiverTXT">NEWCASTLE</div>
                        <div className="boardRank5AktiverFlag"></div>
                        <div className="boardRank5AktiverName">CLAIRE JOHNSON</div>
                    </div>
                    <div className="boardRank5Events">6</div>
                    <div className="boardRank5Trophies">86</div>
                    <div className="boardRank5TimeSpent">5d 04h 12m</div>
                    <div className="boardRank5Points">
                        <div className="boardRank5PointsBG"></div>
                        <div className="boardRank5PointsTXT">4.652</div>
                    </div>
                    <div className="boardRank5ViewProfile"></div>
                </div>

                {/* TOP 6 */}

                <div className="leaderBoardRow6">
                    <div className="leaderBoardRow6BG"></div>
                    <div className="leaderBoardRank6">
                        <div className="boardRank6BG"></div>
                        <div className="boardRank6TXT">6</div>
                    </div>
                    <div className="boardRank6Evolution">
                        <div className="boardRank6EvolutionIMG"></div>
                        <div className="boardRank6EvolutionTXT">-2</div>
                    </div>
                    <div className="boardRank6Avatar"></div>
                    <div className="boardRank6Aktiver">
                        <div className="boardRank6AktiverTXT">BRISTOL</div>
                        <div className="boardRank6AktiverFlag"></div>
                        <div className="boardRank6AktiverName">JOHN SMITH</div>
                    </div>
                    <div className="boardRank6Events">7</div>
                    <div className="boardRank6Trophies">80</div>
                    <div className="boardRank6TimeSpent">4d 18h 35m</div>
                    <div className="boardRank6Points">
                        <div className="boardRank6PointsBG"></div>
                        <div className="boardRank6PointsTXT">4.451</div>
                    </div>
                    <div className="boardRank6ViewProfile"></div>
                </div>

                {/* TOP 7 */}

                <div className="leaderBoardRow7">
                    <div className="leaderBoardRow7BG"></div>
                    <div className="leaderBoardRank7">
                        <div className="boardRank7BG"></div>
                        <div className="boardRank7TXT">7</div>
                    </div>
                    <div className="boardRank7Evolution">
                        <div className="boardRank7EvolutionIMG"></div>
                        <div className="boardRank7EvolutionTXT">-2</div>
                    </div>
                    <div className="boardRank7Avatar"></div>
                    <div className="boardRank7Aktiver">
                        <div className="boardRank7AktiverTXT">LONDON</div>
                        <div className="boardRank7AktiverFlag"></div>
                        <div className="boardRank7AktiverName">LAURA WILLIAMS</div>
                    </div>
                    <div className="boardRank7Events">6</div>
                    <div className="boardRank7Trophies">76</div>
                    <div className="boardRank7TimeSpent">4d 17h 14m</div>
                    <div className="boardRank7Points">
                        <div className="boardRank7PointsBG"></div>
                        <div className="boardRank7PointsTXT">4.023</div>
                    </div>
                    <div className="boardRank7ViewProfile"></div>
                </div>

                {/* TOP 8 */}

                <div className="leaderBoardRow8">
                    <div className="leaderBoardRow8BG"></div>
                    <div className="leaderBoardRank8">
                        <div className="boardRank8BG"></div>
                        <div className="boardRank8TXT">8</div>
                    </div>
                    <div className="boardRank8Evolution">
                        <div className="boardRank8EvolutionIMG"></div>
                        <div className="boardRank8EvolutionTXT">=</div>
                    </div>
                    <div className="boardRank8Avatar"></div>
                    <div className="boardRank8Aktiver">
                        <div className="boardRank8AktiverTXT">LONDON</div>
                        <div className="boardRank8AktiverFlag"></div>
                        <div className="boardRank8AktiverName">PAULA DAVIES</div>
                    </div>
                    <div className="boardRank8Events">3</div>
                    <div className="boardRank8Trophies">75</div>
                    <div className="boardRank8TimeSpent">4d 06h 32m</div>
                    <div className="boardRank8Points">
                        <div className="boardRank8PointsBG"></div>
                        <div className="boardRank8PointsTXT">3.951</div>
                    </div>
                    <div className="boardRank8ViewProfile"></div>
                </div>

                {/* TOP 9 */}

                <div className="leaderBoardRow9">
                    <div className="leaderBoardRow9BG"></div>
                    <div className="leaderBoardRank9">
                        <div className="boardRank9BG"></div>
                        <div className="boardRank9TXT">9</div>
                    </div>
                    <div className="boardRank9Evolution">
                        <div className="boardRank9EvolutionIMG"></div>
                        <div className="boardRank9EvolutionTXT">=</div>
                    </div>
                    <div className="boardRank9Avatar"></div>
                    <div className="boardRank9Aktiver">
                        <div className="boardRank9AktiverTXT">LEEDS</div>
                        <div className="boardRank9AktiverFlag"></div>
                        <div className="boardRank9AktiverName">CHRIS MARTIN</div>
                    </div>
                    <div className="boardRank9Events">5</div>
                    <div className="boardRank9Trophies">68</div>
                    <div className="boardRank9TimeSpent">3d 23h 59m</div>
                    <div className="boardRank9Points">
                        <div className="boardRank9PointsBG"></div>
                        <div className="boardRank9PointsTXT">3.949</div>
                    </div>
                    <div className="boardRank9ViewProfile"></div>
                </div>

                {/* TOP 10 */}

                <div className="leaderBoardRow10">
                    <div className="leaderBoardRow10BG"></div>
                    <div className="leaderBoardRank10">
                        <div className="boardRank10BG"></div>
                        <div className="boardRank10TXT">10</div>
                    </div>
                    <div className="boardRank10Evolution">
                        <div className="boardRank10EvolutionIMG"></div>
                        <div className="boardRank10EvolutionTXT">+1</div>
                    </div>
                    <div className="boardRank10Avatar"></div>
                    <div className="boardRank10Aktiver">
                        <div className="boardRank10AktiverTXT">LIVERPOOL</div>
                        <div className="boardRank10AktiverFlag"></div>
                        <div className="boardRank10AktiverName">THOMAS EDWARDS</div>
                    </div>
                    <div className="boardRank10Events">2</div>
                    <div className="boardRank10Trophies">64</div>
                    <div className="boardRank10TimeSpent">3d 20h 46m</div>
                    <div className="boardRank10Points">
                        <div className="boardRank10PointsBG"></div>
                        <div className="boardRank10PointsTXT">3.836</div>
                    </div>
                    <div className="boardRank10ViewProfile"></div>
                </div>
            </div>
        </div>
    )
}
export default connect((state) => ({
    //variables de rdx a crear
}))(LeaderBoard);