import React, { Component } from 'react';


//returns pages selector
export const PageSelector = (props) => {

  function addButton(title, val) {

    //changes page number
    return <button onClick={()=> {props.changePage(val)}}>{title}</button>
  }



  return (
    <div className={'btn__wrapper'} height={200} width={900}>
      {props.page === 1 ? '' : addButton('Назад', props.page - 1)}
      {`Страница ${props.page}`}
      {props.page === props.pages ? '' : addButton('Вперед', props.page + 1)}
    </div>
  )
};