import React, {Component} from 'react';
import _ from 'lodash';
import {v1 as uuidv1} from 'uuid';


export const EventDescription = (props) => {

  function addPagesButton(title, index, val) {
    return (

      <button onClick={() => {props.closePreview(index, val)}}>
        {title}
      </button>

    )
  }


  //return description of selected event
  return (
    <div className={'description__wrapper'}>
      <h2>{props.event.title}</h2>
      <div className={'description__elements'}>
        <div className={'description__pictures'}>
          {_.map(props.event.images, element => {
            return (
              <img style={{maxWidth: '200px', maxHeight: '100px', margin: '10px'}} src={element.image} key={uuidv1()}/>
            )
          })}
        </div>
      </div>
      <div style={{display: 'inline-flex', flexWrap: 'wrap'}}>
        {_.map(props.event.tags, element => {
          return (
            <p className={'tag'} key={uuidv1()}>
              {element}
            </p>
          )
        })}
      </div>
      <strong><a href={props.event.site_url} target="_blank">Купить билет</a></strong>
      <div dangerouslySetInnerHTML={{__html: props.event.description}}/>
      <div className={'btn__wrapper_description'} height={200} width={900}>
        {addPagesButton('Закрыть', 'show_details', false)}
      </div>
    </div>
  )
};


