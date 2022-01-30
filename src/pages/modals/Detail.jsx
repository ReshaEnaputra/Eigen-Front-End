import React from 'react'
import Popup from 'reactjs-popup'
import cssModule from '../styles/detail.module.css'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const overlayStyle = { background: 'rgba(0,0,0,0.5)', overflow: 'auto' };

const Detail = ({bool, setBool, data}) => {
    const navigate = useNavigate();
    const changeRoute = () => {
        navigate(`${data.data.url}`)
    }
    return (
        <>
            <Popup
                contentStyle={{width: "900px", height: "auto", borderRadius: "5px"}}
                open={bool} onClose={() => setBool(false)}
                modal
                nested
                {...{ overlayStyle }}
            >
                <div className={cssModule.container}>
                    <div>
                        <CardTitle className={cssModule.title} tag="h3">
                            {data.data.title}
                        </CardTitle><br />
                        <img className={cssModule.image} src={data.data.urlToImage} alt="" />
                        <CardText className={cssModule.text}>
                            {data.data.content}
                        </CardText>
                        <p className={cssModule.text1}>
                            Continue to read 
                            <a href={data.data.url} className={cssModule.btnHere}>
                                HERE
                            </a>
                        </p>
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default Detail