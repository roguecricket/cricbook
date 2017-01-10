import React, {
  Component,
  PropTypes
} from 'react';

import {
  Table,
  Grid,
  Select,
  Button,
  Icon,
  Form
} from 'semantic-ui-react';

import * as actionCreators from '../../actions/battingactions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {changeObjectsToSelectProps} from '../../utils/uiUtils';
import * as battingUtil from '../../utils/battingUtils';
import AddPlayerModal from '../elements/AddPlayerModal';

class BattingTable extends Component{
  constructor(props){
    super(props);
    this.state = {
      onModalOpen: false
    }
  }
  render(){
    const {unplayed, played, innings} = this.props;
    return (
     <Form onSubmit={this.handleSubmit.bind(this)}>
      <AddPlayerModal open={this.state.onModalOpen}
                      onOk={this.onNew.bind(this)}
                      onClose={this.onModalClose.bind(this)} />
      <Table>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Runs</Table.HeaderCell>
          <Table.HeaderCell>Balls</Table.HeaderCell>
          <Table.HeaderCell>Remarks</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            played.map((bat) => (
              <Table.Row negative={bat.isOut}>
                <Table.Cell>{bat.name}</Table.Cell>
                <Table.Cell>{bat.runs}</Table.Cell>
                <Table.Cell>{bat.balls}</Table.Cell>
                <Table.Cell>{bat.remarks}</Table.Cell>
              </Table.Row>
            ))
          }
          <Table.Row>
            <Table.Cell>
              <Select name="player"
                      onChange={this.handleSelectChange.bind(this)}
                      options = {[...unplayed, {text: 'ADD', value:'ADD'}]}></Select>
            </Table.Cell>
            <Table.Cell>
             0
            </Table.Cell>
            <Table.Cell>
             0
            </Table.Cell>
            <Table.Cell>
             None
            </Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer fullWidth>
         <Table.Row>
         <Table.HeaderCell>
         </Table.HeaderCell>
         <Table.HeaderCell colSpan='4'>
         <Button type="submit" floated="right" primary size='small'>
            Next
          </Button>
         </Table.HeaderCell>
         </Table.Row>
        </Table.Footer>
      </Table>
    </Form>)
  }

  handleSubmit(e, data){
    e.preventDefault();
    console.log(data.formData);
  }

  handleSelectChange(e, data){
    console.log(data);
    if(data.value == 'ADD'){
      this.setState({
        onModalOpen: true
      })
    } else{
      if(this.props.active.length < 2)
           this.props.toBat(data.value);
    }
  }

  onNew(e, data){
    e.preventDefault();
    const {player} = data.formData;
    if(this.props.active.length < 2)
        this.props.addBatsman(player, this.props.innings);
    else
        this.props.addPlayer(player, this.props.innings);
    this.setState({
      onModalOpen: false
    })
  }

  onModalClose(e){
    this.setState({
      onModalOpen: false
    })
  }
}


BattingTable.defaultProps = {
  unplayed: [],
  played: [],
  innings: 1
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

let mapStateToProps = (state) => {
  console.log(state);
  return {
    unplayed: changeObjectsToSelectProps(state.batting.filter((bat) => bat.inPavilion && !bat.isOut), 'name'),
    played: state.batting.filter((bat) => !bat.inPavilion),
    active: state.batting.filter((bat) => !bat.inPavilion && !bat.isOut),
    innings: state.playing.innings
  }
}

BattingTable = connect(mapStateToProps, mapDispatchToProps)(BattingTable);

export default BattingTable;
