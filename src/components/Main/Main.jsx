// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { assets } from "../../assets/assets";
import { Context } from '../../context/Context';
import "./Main.css";

const Main = () => {

    const {
        onSent,
        recentPrompt,
        //  showRecent, 
        loading,
        resultData,
        showResult,
        setInput, input
    } = useContext(Context)


    return (
        <div className='main'>
            <div className="nav">
                <p>Conversa</p>
                <img src={assets.user} alt="" />
            </div>
            <div className="main-container">

                {!showResult ? <>
                    <div className="greet">
                        <p><span>Hello there.</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest me beautiful places to see on an upcoming road trip</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>

                        <div className="card">
                            <p>Briefly summarize this concept: Urban Planning</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Tell me about React js and React native</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>
                </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />

                            {loading ?
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }


                        </div>
                    </div>
                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Ask me anything..' />
                        <div>
                            <img onClick={() => onSent()} src={assets.send} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Conversa can make mistakes. Consider checking important information.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;