import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchEvents, changePage} from '../../actions/index.js';
import {PageSelector} from './pageSelector.js';
import {EventDescription} from './description';
import EventsList from './events.js';

const Wrapper = {
  maxWidth: '1000px',
  margin: '0 auto',
};


class Upcoming extends Component {

  constructor(props) {
    super(props);

    this.state = {
      itemsPerPage: 10, //items rendered per one page
      show_details: false, //detail view component should be shown
    }


  }

  componentWillMount() {

  }

  //fetch events from API
  componentDidMount() {

    this.props.fetchEvents()

  }




  //handles new state by key and value pair
  handleNewState = (index, value) => {

    this.setState({[index]: value});

  };


  //get number of pages
  calcPages = () => {
    return Math.floor((this.props.events[0].length + this.state.itemsPerPage - 1) / this.state.itemsPerPage);
  };


  //display pages selectors
  renderPagesSelector = () => {
    return <PageSelector changePage={this.props.changePage} page={this.props.page} pages={this.calcPages()}/>
  };

  //display detailed description component as soon as details data fetched and show__details state switched
  renderDetailDescription = () => {
    if (this.state.show_details && this.props.description.loaded === true) {
      return (<EventDescription event={this.props.description.data.data} closePreview={this.handleNewState}/>)
    }
  };

  render() {


    if (!this.props.events[0]) {
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
          <EventsList
            pageNumber={this.props.page}
            itemsPerPage={this.state.itemsPerPage}
            handleNewState={this.handleNewState}
          />
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
    description: state.description,
    page: state.page
  };

}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({fetchEvents, changePage}, dispatch)


}

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming)



