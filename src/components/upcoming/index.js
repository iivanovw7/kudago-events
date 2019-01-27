import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchEvents, fetchPlaces, fetchDescription} from '../../actions/index.js'
import _ from 'lodash';
import {v1 as uuidv1} from 'uuid';
import { PageSelector } from './pageSelector.js';
import moment from 'moment';
import { slugs } from './slugs.js';
import { EventDescription } from './description'


const Wrapper = {
  maxWidth: '900px',
  margin: '0 auto',
};


class Upcoming extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 0, //current page number
      itemsPerPage: 10,
      pages: null, //number of pages
      places_ids: [], //id`s of places from current lists
      places: [], //places array (addresses)
      show_details: false, //detail view component should be shown
      detailView: {} //element opened in detail view

    }


  }

  componentWillMount() {

  }

  //fetch events from API
  componentDidMount() {

    this.props.fetchEvents()

  }


  //finds element in object, returns request string if not found
  //used to find city name in slug listing
  findWhere = (array, criteria) => {
    let key = Object.keys(criteria)[0];

    return array.find(function(elem){
      if(elem[key] === criteria[key]) {
        return elem[key] === criteria[key]
      }
      else {
        return criteria
      }
    })
  };



  //forming events table
  renderEvents = (pageNumber) => {

    //calculates indexes of elements to render
    let start = ((pageNumber * this.state.itemsPerPage) - (pageNumber - 1));
    let end = Math.min(start + this.state.itemsPerPage, this.props.events[0].length);

    let events = this.props.events[0].slice(start-1, end-1);



    return (
      <table>
        <thead>
        <tr>
          <th>Начало</th>
          <th>Афиша</th>
          <th>Город</th>
          <th>Адрес</th>
          <th>Описание</th>
        </tr>
        </thead>
        <tbody>
        {_.map(events, event => {
          return (
              <tr className={'table-active'} key={uuidv1()}>
                <td className={'table-active'} style={{width: '100px'}}>{moment.unix(event.dates[0].start).format("MM.DD.YYYY  HH:MM")}</td>
                <td className={'table-active'} style={{width: '100px'}}><img style={{width: '100px'}} src={event.images[0].image}/></td>
                <td className={'table-active cityCell'}>{this.findWhere(slugs, {slug: event.location.slug}).city}</td>
                <td className={'table-active'} style={{width: '100px'}}>{!event.place ? ' ' : event.place.id}</td>
                <td className={'table-active'} style={{width: '500px'}}>{event.title}</td>
                <td className={'table-active'} style={{width: '100px'}}>
                  <button onClick={() => {
                    this.props.fetchDescription(event.id);
                    this.handleNewState('show_details', true)
                  }} style={{width: '100px'}}>Подробнее</button>
                </td>
              </tr>
          )
        })}
        </tbody>
      </table>
    )
  };

  //handles new state by key and value pair
  handleNewState = (index, value) => {

    this.setState({[index]: value});

  };


  //get number of pages
  calcPages = () => {
    return Math.floor((this.props.events[0].length + this.state.itemsPerPage) / this.state.itemsPerPage);
  };

  //display render pages selectors
  renderPagesSelector = () => {
    return <PageSelector changePage={this.handleNewState} page={this.state.pageNumber} pages={this.calcPages()}/>
  };

  //display detailed description component as soon as details data fetched and show__details state switched
  renderDetailDescription = () => {
    if(this.state.show_details && this.props.description.loaded === true) {
      return (<EventDescription event={this.props.description.data.data} closePreview={this.handleNewState}/>)
    }
  };

  render() {


    if(!this.props.events[0]) {
      return (
        <div style={Wrapper}>
          <p>Загрузка...</p>
        </div>

      )
    }

    return (

      <div style={Wrapper}>
        <h1 style={{marginTop: '10px', marginLeft: '0px'}} className="header">KudaGo events list</h1>
        <div>
          {this.renderDetailDescription()}
        </div>
        <div>
          {this.renderEvents(this.state.pageNumber)}
        </div>
        {this.renderPagesSelector()}
      </div>

    )

  }

}

function mapStateToProps(state) {

  return {
    events: state.events,
    places: state.places,
    description: state.description
  };

}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({fetchEvents, fetchPlaces, fetchDescription}, dispatch)


}

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming)



