import React, {Component, PropTypes} from 'react';
import * as actionCreators from '../../actions/';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {Form, Segment, Button, Input} from 'semantic-ui-react';

class TeamName extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Segment>
      <Form onSubmit={this.handleTeamName.bind(this)}>
        <Form.Field>
         <label> Team Name </label>
         <Input type="text" name="teamname" />
        </Form.Field>
        <Form.Field>
          <Button type="submit">Next</Button>
        </Form.Field>
      </Form>
      </Segment>
    )
  }

  handleTeamName(e, data){
    e.preventDefault();
    this.props.addTeamName(data.formData.teamname);
    browserHistory.push('/board');
  }
}


let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

TeamName = connect(null, mapDispatchToProps)(TeamName);

export default TeamName;
