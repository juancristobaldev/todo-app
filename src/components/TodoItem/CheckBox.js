import {React} from "react";
import '../../styles/scss/checkbox.scss';
import {FaCheck} from 'react-icons/fa'

export default function CheckBox(props){

    if(props.completed == true){
        return  <div className="checkBoxItem">
                    <div
                    onClick={() => props.onClick()}
                    className="checkBoxOn"
                    >
                        <FaCheck fill="white"/>
                    </div>
                </div>
    } 
    else return <div className="checkBoxItem">
                    <div 
                    onClick={() => props.onClick()} 
                    className="checkBoxOff"
                    >
                </div></div>
}