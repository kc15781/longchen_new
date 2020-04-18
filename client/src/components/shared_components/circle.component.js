import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from 'react';

import { Row } from 'react-bootstrap';

import '../Stylesheet/Stylesheet_circle.css'

export const Circle_component = (props) => {
    
    return (
        <>
            
        {props.heading.map((value, index) => {

                    return (         


                        <VisibilitySensor >
                            {({ isVisible }) => {
                            const percentage = isVisible ? 100 : 0;
                                return (
                                <>
                                    <div className="bg_color3 ">
                                    <Row className="justify-content-center align-items-center text-center py-2">      
                                    
                                    <div className="col-12 col-sm-6 py-3 ">
                                        <h3>{value[0]}</h3>
                                        <div className="circle mx-auto">
                                        <CircularProgressbarWithChildren value={percentage} >
                                            <div >
                                            {props.detail[index][0]}
                                            </div>
                                        </CircularProgressbarWithChildren>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <h3>{value[1]}</h3>
                                        <div className="circle mx-auto">
                                         <CircularProgressbarWithChildren value={percentage} >
                                            <div >
                                                {props.detail[index][1]}
                                            </div>
                                        </CircularProgressbarWithChildren>
                                        </div>
                                    </div>

                                    </Row>
                                    </div>
                                </>
                                );
                            }}
                        </VisibilitySensor>


                        )
                })}

        </>
    );}
