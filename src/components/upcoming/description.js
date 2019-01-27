import React, { Component } from 'react';
import _ from 'lodash';
import {v1 as uuidv1} from 'uuid';



export const EventDescription = (props) => {

  function addPagesButton(title, index, val) {
    return <button onClick={()=> {props.closePreview(index, val)}}>{title}</button>
  }


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
            <p style={{color: 'white', backgroundColor: 'black', padding: '5px', borderRadius: '5px', margin: '10px', whiteSpace: 'nowrap'}} key={uuidv1()}>{element}</p>
          )
        })}
      </div>
      <strong><a href={props.event.site_url} target="_blank">Купить билет</a></strong>
      <div dangerouslySetInnerHTML={{__html: props.event.description}} />
      <div className={'btn__wrapper_description'} height={200} width={900}>
        {addPagesButton('Закрыть', 'show_details', false)}
      </div>
    </div>
  )
};


/*

href={props.event.site_url}

age_restriction: "18+"
body_text: "<p>Яркие текстильные покрывала и тяжёлые драпировки с восточными мотивами, ковры на стенах, оригинальные светильники с абажурами — в ресторане «Коктебель» гостей ждёт расслабленный отдых в колоритных интерьерах. Здесь можно с комфортом провести время в компании друзей или родных, устроить романтическое свидание, отметить семейный праздник или организовать незабываемую вечеринку с коллегами.</p><p>Владельцы акционных купонов смогут получить в ресторане скидку на все блюда в меню. Кутабы с зеленью или мясом, запечённые баклажаны, дюшбара и харчо, цыплёнок табака, сациви с курицей, грузинские хинкали, хачапури, аджапсандал, садж, шашлык из каре ягнёнка — эти и другие кулинарные шедевры обойдутся вдвое дешевле. Скидка по купону действует на заказы от 700 рублей с человека.</p><p>Если вы хотите узнать подробнее об акции, её сроках и связаться с организаторами, нажмите <a class="external-link" href="https://spb.boombate.com/-158012?utm_source=kudago_spb&utm_medium=cpc&utm_term=158012&utm_campaign=restorany" rel="nofollow" target="_blank"><strong><u>«Бесплатный купон»</u></strong></a>. </p>"
categories: (2) ["stock", "discount"]
comments_count: 0
dates: [{…}]
description: "<p>Неповторимый колорит яркого и загадочного востока, бесподобные ароматы кавказской кухни, внимательный сервис и уютная атмосфера — <a class="external-link" href="https://spb.boombate.com/-158012?utm_source=kudago_spb&utm_medium=cpc&utm_term=158012&utm_campaign=restorany" rel="nofollow" target="_blank"><strong>в гостеприимном ресторане «Коктебель»</strong></a> можно на время забыть обо всех заботах, вкусно поесть и отлично отдохнуть в компании друзей и родных.</p>"
disable_comments: false
favorites_count: 0
id: 176552
images: [{…}]
is_free: false
location: {slug: "spb"}
participants: []
place: null
price: "бесплатный купон предоставит скидку до 50%"
publication_date: 1548251120
short_title: "скидка до 50% на всё меню в ресторане «Коктебель»"
site_url: "https://kudago.com/spb/event/aktsiya-skidka-do-50-na-vsyo-menyu-v-restorane-koktebel/"
slug: "aktsiya-skidka-do-50-na-vsyo-menyu-v-restorane-koktebel"
tagline: "Бесплатные купоны на скидку от Boombate"
tags: (4) ["скидки", "акции", "про еду", "18+"]
title: "скидка до 50% на всё меню в ресторане «Коктебель»"
__proto__: Object
message: "Request received!"



 */