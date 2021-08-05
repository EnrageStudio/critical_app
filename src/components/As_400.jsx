import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getRouters} from '../api/Api.js'
import axios from 'axios';
import json from "../resources/routers.json"
const As_400 = () => {
    const [items] = useState([json]);
    const [alertColor, setAlertColor] = useState(null);
    return(
        <div>
            <div className ='row'>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertColor}`}>ASP DISK</div>
                </div>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertColor}`}>ASP CPU</div>
                </div>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertColor}`}>JOB QUEUE</div>
                </div>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertColor}`}>JOB QUEUE STATUS</div>
                </div>
            </div>
            <div className ='row'>
            <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertColor}`}>MEMORY POOL</div>
                </div>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertColor}`}>MQ SERIES MANAGER</div>
                </div>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertColor}`}>MQ SERIES QUEUE</div>
                </div>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertColor}`}>SERVICES</div>
                </div>
            </div>
        </div>
    )
};
export default As_400;