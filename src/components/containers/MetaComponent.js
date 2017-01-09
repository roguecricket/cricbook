import React, {Component, PropTypes} from 'react';
import * as actionCreators from '../../actions/metaactions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {Input, Form, Button, Segment} from 'semantic-ui-react';

class MetaComponent extends Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }

  render(){
    return (<Segment>
            <Form onSubmit={this.handleSumbit.bind(this)}>
              <Form.Field>
              <label>HOME</label>
              <Input type="text" name="team1" ref="team1" placeholder="Enter home team" />
              </Form.Field>
              <Form.Field>
              <label>AWAY</label>
              <Input type="text" name="team2" ref="team2" placeholder="Enter home team" />
              </Form.Field>
              <Form.Field>
              <label>OVERS</label>
              <Input type="text" name="overs" ref="overs" placeholder="Enter the no of overs"/>
              </Form.Field>

               <Button primary type='submit'>Create</Button>
           </Form>
           </Segment>)
  }

  handleSumbit(e, form){
    e.preventDefault();
    const {formData} = form;
    this.props.newMatch(formData.team1, formData.team2, formData.overs);
    browserHistory.push("/toss");
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

let Meta = connect(null, mapDispatchToProps)(MetaComponent);

export default Meta;
