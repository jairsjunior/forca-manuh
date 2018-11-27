import React, { Component } from 'react'; 
import { RhelenaPresentationModel } from 'rhelena';
import manuh from 'manuh';

export default class HomeModel extends RhelenaPresentationModel {
    constructor(props){
        super(props);

        this.showInputs = false;

        manuh.subscribe(`forca/player/turn/change`, `HomeModel`, (msg, info) => {
            if(msg != undefined){
                this.actualPlayer == "1" ? this.actualPlayer = "2" : this.actualPlayer = "1";
                manuh.publish(`forca/player/turn/set`,  JSON.stringify({ code: this.actualPlayer })); 
            }
        })

        manuh.subscribe(`forca/question/set`, `HomeModelItem`, (msg,info) => {
            if(msg != undefined){
                this.showInputs = true;
            }
        })

    }

}