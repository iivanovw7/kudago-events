import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {slugs} from '../../constants/slugs.js';
import _ from 'lodash';
import {v1 as uuidv1} from 'uuid';
import moment from 'moment';
import {fetchPlaces, fetchDescription} from '../../actions/index.js'

class EventsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      itemsPerPage: this.props.itemsPerPage,
    }


  }

  //finds element in object, returns request string if not found
  //used to find city name in slug listing
  findWhere = (array, criteria) => {
    let key = Object.keys(criteria)[0];

    return array.find(function (elem) {
      if (elem[key] === criteria[key]) {
        return elem[key] === criteria[key]
      }
      else {
        return criteria
      }
    })
  };

  //find out what is the first element of the list
  getFirstElement = (pageNumber) => {
    return (((pageNumber - 1) * this.state.itemsPerPage));
  };

  //last one
  getLastElement = (pageNumber) => {
    return (Math.min(this.getFirstElement(pageNumber) + this.state.itemsPerPage, this.props.events[0].length))
  };

  //return full list of elements for page
  getAllElements = (start, end) => {
    return (this.props.events[0].slice(start, end))
  };



  render() {

    //creating array of elements to display
    let events = this.getAllElements(
      this.getFirstElement(this.props.page),
      this.getLastElement(this.props.page)
    );

    return (

      <table>
        <thead>
        <tr>
          <th>Начало</th>
          <th>Окончание</th>
          <th>Афиша</th>
          <th>Город</th>
          <th>Адрес</th>
          <th>Описание</th>
        </tr>
        </thead>
        <tbody>
        {_.map(events, event => {
          return (
            <tr
              className={'table-active event_table_row'}
              key={uuidv1()}
              onClick={() => {
                this.props.fetchDescription(event.id);
                this.props.handleNewState('show_details', true)
              }}>

              <td className={'table-active'} style={{width: '100px'}}>
                {moment.unix(event.dates[0].start).format("MM.DD.YYYY  HH:MM")}
              </td>
              <td className={'table-active'} style={{width: '100px'}}>
                {moment.unix(event.dates[0].end).format("MM.DD.YYYY  HH:MM")}
              </td>
              <td className={'table-active'} style={{width: '100px'}}>
                <img style={{width: '100px'}} src={event.images[0].image}/>
              </td>
              <td className={'table-active cityCell'}>{this.findWhere(slugs, {slug: event.location.slug}).city}</td>
              <td className={'table-active'} style={{width: '100px'}}>{!event.place ? ' ' : event.place.id}</td>
              <td className={'table-active'} style={{width: '500px'}}>{event.title}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }






}

function mapStateToProps(state) {

  return {
    events: state.events,
    places: state.places,
    description: state.description,
    page: state.page
  };

}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({fetchPlaces, fetchDescription}, dispatch)


}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList)