import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import * as actionCreators from '../../actions/playingactions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Form, Segment, Button} from 'semantic-ui-react';


class Toss extends Component{
  constructor(props){
    super(props);
    this._decisions = ['batting', 'fielding'];
  }
  render(){
    const {team1, team2} = this.props;
    return (<Segment>
              <Form onSubmit={this.handleNext.bind(this)}>
                <Form.Field>
                <Form.Select label="won" name="wonby" options={this.props.teams}></Form.Select>
                </Form.Field>
                <Form.Field>
                <Form.Select label="decision" name="decision" options={this.props.decisions}></Form.Select>
                </Form.Field>
                <Button primary type='submit'>Next</Button>
              </Form>
            </Segment>)
  }
  handleNext(e, data){
    e.preventDefault();
    const {formData} = data;
    const teams = this.props.total_teams;
    const won = formData.wonby;
    const decision = formData.decision;
    teams.splice(teams.indexOf(won), 1);
    const other = teams[0];
    if(decision == 'batting'){
      this.props.newInnings(won, other, 1);
    }else{
      this.props.newInnings(other, won, 1);
    }
    browserHistory.push("/board");
  }
}


let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

let mapStateToProps = (state) => {
  return {teams:[{text: state.meta.team1, value: state.meta.team1},
          {text: state.meta.team2, value: state.meta.team2}],
        decisions: [{
          text: 'Batting', value: 'batting'
        },{text: 'Fielding', value: 'fielding'}],
        total_teams: [state.meta.team1, state.meta.team2]}
}

Toss = connect(mapStateToProps, mapDispatchToProps)(Toss)

export default Toss;
