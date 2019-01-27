import React, { Component } from 'react';


//returns pages selector
export const PageSelector = (props) => {

  function addButton(title, val) {
    return <button onClick={()=> {props.changePage('pageNumber', val)}}>{title}</button>
  }



  return (
    <div className={'btn__wrapper'} height={200} width={900}>
      {props.page === 0 ? '' : addButton('Назад', props.page - 1)}
      {props.page + 1}
      {props.page + 1 === props.pages ? '' : addButton('Вперед', props.page + 1)}
    </div>
  )
};