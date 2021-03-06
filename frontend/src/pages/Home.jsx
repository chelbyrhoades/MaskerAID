import React from 'react';
import './Home.css';
import ItemDetails from "./ItemDetails";
import {Item} from "../models/Item"
import {Repository} from '../api/repository';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import  HomeSearch from './HomeSearch.js';
import CartService from '../services/cartService';



export class Home extends React.Component {
    repo = new Repository;
    cartService = new CartService();
    /*{"listingID":1,"productID":1,
    "price":15,
    "quantity":250,
    "user_userID":0,
    "user_type_typeID":1,
    "imageURL":"https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/screenshot-www-shopdisney-com-2020-05-27-16-44-47-1590615961.png?crop=1.00xw:0.665xh;0,0.335xh&resize=1200:*",
    "productName":"Super Masks",
"userID":0,
"email":"testaccount1",
"name":"Tom Timms",
"phone":"11111111",
"password":"c581dc5bb7c8f3164e3194b2a1629e9be1322b9d58aa0",
"cookie":"0:WMKLfg43aSO9V3mLBTh9m24Ty5Au4hNt",
"sessionExpiration":"2020-12-04T20:08:11.000Z",
"country":"USA",
"type_typeID":2,
"locked":0}
    */
    state = {
        items: [
            {
                listingID: 0,//address /distribut
                phone: "",
                imageURL: "",
                productName: "",
                name: "",           //distributor's personal name
                email: "",
                productID: 0,
                price: 0,
                quantity: 0,
                ppeType: ""
            },
            
        ],
        filteredItems: [

        ],
        displayItems: [],
        searching: false
    
    }
    onlyShowMasks= () => {
        this.resetListing();
        console.log('in masks');
        //var filItems = [];
        let array = []
        this.state.items.map(x => {
            if (x.ppeType == "Mask") {
                array.push(x);
            }
        })
        this.setState({displayItems: array});
    }
    /**for(var i = 0; i < this.state.items[0].length; i++){
            console.log(this.state.items[i]);
            if(this.state.items[i].ppeType = "Mask"){
                this.state.filteredItems[i] = this.state.items[i];
            }
            this.state.items = this.state.filteredItems.slice();
            

        }console.log(this.state.filteredItems);/ */

    onlyShowShield = () =>{
        this.resetListing();
        let array = []
        this.state.items.map(x => {
            if (x.ppeType == "Face Shield") {
                array.push(x);
            }
        })
        this.setState({displayItems: array});
    }


    onlyShowGloves = () =>{
        this.resetListing();
        let array = []
        this.state.items.map(x => {
            if (x.ppeType == "Gloves") {
                array.push(x);
            }
        })
        this.setState({displayItems: array});
    }


    onlyShowTherm = () =>{
        this.resetListing();
        let array = []
        this.state.items.map(x => {
            if (x.ppeType == "Thermometer") {
                array.push(x);
            }
        })
        this.setState({displayItems: array});
    }



    resetListing = () =>{
        this.setState({displayItems: this.state.items});
    }

    checkProductName(){
        for (var i = 0; i < this.state.items.length; i++) {
            if(this.state.items[i].productName.includes('Mask')){
                this.state.items[i].ppeType = "Mask";
                console.log(this.state.items[i].ppeType);
            }else if(this.state.items[i].productName.includes('Face Shield') || this.state.items[i].productName.includes('Face Protector')){
                this.state.items[i].ppeType = "Face Shield";
                console.log(this.state.items[i].ppeType);
            }else if(this.state.items[i].productName.includes('Gloves')){
                this.state.items[i].ppeType = "Gloves";
                console.log(this.state.items[i].ppeType);
            
            }else if(this.state.items[i].productName.includes('Thermometer')){
                this.state.items[i].ppeType = "Thermometer";
                console.log(this.state.items[i].ppeType);

            }else{
                this.state.items[i].ppeType = "Into the Unknown";
                console.log(this.state.items[i].ppeType);
                console.log(this.state.items[i].productName);
            }
          }
        
        }

    getAllListings(){
        return this.state.items;
    }
    

    onAddToCart(item){
        if(window.confirm("Would you like to add this item to your cart?")){
            this.cartService.addToCart(item)
        }
    }
    componentDidMount() {
        this.repo.getListings()
        .then(productData => this.setState({items: productData, displayItems: productData}) ) //, () => {console.log(this.state.items)})//
        
        //.then (this.setState({displayItems: this.state.items}));
    }

    onSearch(params) {//getListingParams(params)
        this.repo.getListingParams(params)
        .then(items => this.setState({items}));
    }
    render() {

        return (
            <div className="container">
                <h1>PPE Home</h1>
                    {this.checkProductName()}
                        <div className = "row filters">
                            <div className = "col">
                                <button className="btn btn-block btn-warning btn-lg" onClick =  {this.onlyShowMasks}> Masks</button>
                            </div>
                        <div className = "col">
                            <button className="btn btn-block btn-warning btn-lg" onClick = {this.onlyShowGloves}>Gloves</button>
                        </div>
                        <div className = "col">
                            <button className="btn btn-block btn-warning btn-lg" onClick = {this.onlyShowShield}>Face Shields</button>
                        </div>
                        <div className = "col">
                            <button className="btn btn-block btn-warning btn-lg" onClick = {this.onlyShowTherm}>Thermometers</button>
                        </div>
                        <div className = "col">
                            <button className="btn btn-block btn-primary btn-lg" onClick = {this.resetListing}>Reset Filter</button>
                        </div>
                    </div>
                {this.state.searching && <HomeSearch onSearch={ params => this.onSearch(params) }/> }
            <ItemDetails items={ this.state.displayItems }/>
            </div>

        
        );
    }

}
