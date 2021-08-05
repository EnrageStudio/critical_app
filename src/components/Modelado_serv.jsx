import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {getRouters} from '../api/Api.js'
import axios from 'axios';
import json from "../resources/routers.json"

const Modelado_serv  = () => {
    //const [test, setTest] = useState('red');
    const [items] = useState([json]);
    const [alertColor, setAlertColor] = useState(null);
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
        alerts()
    })
    const alerts = () =>{
        for(var i = 0; i < items[0].childNodeDatas.length; i++){
            console.log(items[0].childNodeDatas[i]);
            if(items[0].childNodeDatas[i].healthState === 'Error'){
                setAlertColor('red')
            }else if(items[0].childNodeDatas[i].healthState === 'Warning'){
                setAlertColor('blue')
            }
            else if(items[0].childNodeDatas[i].healthState === 'Success'){
                setAlertColor('black')
            }else{
                setAlertColor('green')
            }
        }
    }
    return(
        <div className = "">            
            <div className = 'row'>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont ${alertColor}`}>CAJA</div>
                </div>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont ${alertColor}`}>ICBANKING</div>
                </div>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont ${alertColor}`}>TELERED</div>
                </div>
                
            </div>
            <div className = 'row'>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont ${alertColor}`}>ACH</div>
                </div>
                <div className = 'col-sm-4'>
                    <div>NETB</div>
                </div>
                <div className = 'col-sm-4'>
                    <div>NETC</div>
                </div>
            </div>
        </div>
    )
};
export default Modelado_serv;