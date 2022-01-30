import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import css from '../styles/card.module.css'
import { useNavigate } from "react-router-dom";
import Detail from '../modals/Detail'

function NewsCard(data) {
    const [bool, setBool] = useState(false)
    const showModal = () => {
        setBool(true)
    }
    if(data.data){
        return(
            <>
                <div>
                    <Card
                        color="light"
                        className={css.container}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                {data.data.title}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Author: {data.data.author}
                            </CardSubtitle>
                            <CardText>
                                {data.data.description}
                            </CardText>
                            <Button onClick={() => showModal()}>
                                More
                            </Button>
                        </CardBody>
                    </Card>
                </div>
                <Detail
                    bool = {bool}
                    setBool = {setBool}
                    data = {data}
                />
            </>
        );
    }else{
        return(
            <div>
            </div>
        );
    }
}

export default NewsCard;
