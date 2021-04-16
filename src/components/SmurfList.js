import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux'

 const SmurfList = (props) => {
    // const isLoading = false;
    const testSmurf = {
        id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        name:'Poppa Smurf',
        position:'Village Leader',
        nickname: 'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }

    // if (props.loading) {
    //     return <h1>Loading...</h1>;
    // }
    //why why why wont you render
    // return(
    //     <div>
    //     {!props.smurfs?[]:props.smurfs.map(smurf => {
    //         return (
    //             <div className="listContainer">
    //                 <Smurf smurf={smurf}/>
    //             </div>
    //         )
    // //   var { posts } = this.state;
    // //   var displayContent = !posts?[]:posts.map((data,index) => {
    // //                         return {data.title}
    // //                         })
    //     })}

    // </div>);
    console.log(props.smurfs)
    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        <Smurf smurf={testSmurf}/>
        <ul>
        {props.smurfs && props.smurfs.map((smurf) => {

            return <li> <Smurf key={smurf.id} smurf={smurf}/> </li> 
        })}
        </ul>
    </div>);
    
 }


export default SmurfList;

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.