import React, {Component, PropTypes} from 'react';
import * as actionCreators from '../../actions/metaactions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';


class MetaComponent extends Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }

  render(){
    return (<form>
            <label>HOME</label>
            <input type="text" name="team1" ref="team1" placeholder="Enter home team" />
            <label>AWAY</label>
            <input type="text" name="team2" ref="team2" placeholder="Enter home team" />
            <label>OVERS</label>
            <input type="text" name="overs" ref="overs" placeholder="Enter the no of overs"/>
            <input type="button" value="Create" onClick={this.handleSumbit.bind(this)} />
           </form>)
  }

  handleSumbit(){
    let team1 = this.refs.team1.value;
    let team2 = this.refs.team2.value;
    let overs = this.refs.overs.value;
    this.props.newMatch(team1, team2, overs);
    browserHistory.push("/board");
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

let Meta = connect(null, mapDispatchToProps)(MetaComponent);

export default Meta;
