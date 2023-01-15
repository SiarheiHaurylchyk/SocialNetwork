import React from 'react';
import s from './Dialogs.module.css';
import {BrowserRouter, NavLink , Routes} from "react-router-dom";

const DialogsItem = (props)=>{
    let rez = "./dialog/" + props.item;
    return(
        <div className={s.otst}>
        <NavLink className={navData=> navData.isActive ? s.active: s.nav} to={rez} >{props.name}</NavLink>
        </div>
    );
}
const MessageItem = (props) =>{
    return <div className={s.messag}>
        {props.message}
    </div>
}



const Dialogs = () => {
    let DialogData = [
        {id:1, name: "Aleksandr"},
        {id:2, name: "Natalia"},
        {id:3, name: "Andrey"},
        {id:4, name: "Siarhei"}
    ];
    let DialogMesage = [
        {id:1, message: "Hello"},
        {id:2, message: "What ?"},
        {id:3, message: "Your from?"},
        {id:4, message: "My name ..."}
    ]

    let DialogsElement = DialogData.map(dialog=> {

        return (
            <DialogsItem name={dialog.name} item={dialog.id} />)

    });

    let Mesages = DialogMesage.map(mesagess=>{
        return(
        <MessageItem message={mesagess.message} />)
    } )

    return (

    <div className={s.dialogs}>
        <div className={s.dialogs_item}>

            {DialogsElement}

        </div>

        <div className={s.message}>
           <div className={s.message_item}>

               {Mesages}

           </div>
        </div>
    </div>


  )
}

export default Dialogs;