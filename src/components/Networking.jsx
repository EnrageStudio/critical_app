import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {actualState} from '../alerts/AlertStatus.js'
import {getRouters} from '../api/Api.js'
import axios from 'axios';
import routers from "../resources/routers.json"
import swich from "../resources/swich.json"

const Networking  = () => {
    const [routerStatus] = useState([routers]);
    const [swichStatus] = useState([swich]);
    const [alertColor, setAlertColor] = useState(null);
    const [alertSw, setAlertSw] = useState(null);
    // function componentDidMount(){
    //     var self = this;
    //     axios.get('', {
    //         "Content-Type": "application/xml; charset=utf-8"
    //     }).then(function(response) {
    //         setItems(response);
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     });
    // }
    // componentDidMount();
    useEffect(() => {
        actualState(routerStatus, setAlertColor);
        actualState(swichStatus, setAlertSw)
    })
    return(
        <div className = "">            
            <div className = 'row'>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont ${alertColor}`}>Enrutadores</div>
                </div>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont ${alertSw}`}>Conmutadores</div>
                </div>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont ${alertColor}`}>Vlan</div>
                </div>
                
            </div>
            <div className = 'row'>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont ${alertColor}`}>HSRP</div>
                </div>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont ${alertColor}`}>Wifi Controller</div>
                </div>
                <div className = 'col-sm-4'>
                    <div className = 'alert-cont unavailable'>Netc</div>
                </div>
            </div>
        </div>
    )
};
export default Networking;