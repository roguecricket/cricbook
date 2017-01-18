import React, {Component, PropTypes} from 'react';
import * as actionCreators from '../../actions/';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {Form, Segment, Button, Input, Grid, Header} from 'semantic-ui-react';

class TeamName extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
     if(this.props.name && this.props.name != "untitled")
        browserHistory.push("/board")
  }

  render(){
    return (
      <Segment>
      <Grid>
        <Grid.Row centered>
         <Grid.Column>
           <Header as="h1">Welcome to Cricboard</Header>
         </Grid.Column>
        </Grid.Row>
      </Grid>
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

let mapStateToProps = (state) => ({
  name: state.playing.batting
})



TeamName = connect(mapStateToProps, mapDispatchToProps)(TeamName);

export default TeamName;
