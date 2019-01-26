import React, { Component } from 'react';


//returns pages selector
export const EventDescription = (props) => {

  function addButton(title, val) {
    return <button onClick={()=> {props.changePage(val)}}>{title}</button>
  }


  return (
    <div className={'btn__wrapper'} height={200} width={900}>

    </div>
  )
};