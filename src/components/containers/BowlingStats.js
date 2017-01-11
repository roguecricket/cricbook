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

import * as actionCreators from '../../actions/bowlingactions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {changeObjectsToSelectProps} from '../../utils/uiUtils';
import * as battingUtil from '../../utils/battingUtils';
import * as bowlingUtil from '../../utils/bowlingUtils';
import AddPlayerModal from '../elements/AddPlayerModal';

class BowlingTable extends Component{
  constructor(props){
    super(props);
    this.state = {
      onModalOpen: false
    }
  }

  render(){
    const {bowlers} = this.props;
    return (<Form onSubmit={this.handleSubmit.bind(this)}>
            <AddPlayerModal heading="Add a Bowler"
                            open={this.state.onModalOpen}
                            onOk={this.onNew.bind(this)}
                            onClose={this.onModalClose.bind(this)} />
            <Table>
            <Table.Header>
              <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Maidens</Table.HeaderCell>
              <Table.HeaderCell>Wickets</Table.HeaderCell>
              <Table.HeaderCell>Overs</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {
              bowlers.map((bowl) => (
                <Table.Row >
                  <Table.Cell>{bowl.name}</Table.Cell>
                  <Table.Cell>{bowl.maidens}</Table.Cell>
                  <Table.Cell>{bowl.wickets}</Table.Cell>
                  <Table.Cell>{bowl.overs}</Table.Cell>
                </Table.Row>
              ))
            }
            </Table.Body>
            <Table.Footer fullWidth>
             <Table.Row>
             <Table.HeaderCell>
             <Button primary
                     onClick={this.onBowlerAdd.bind(this)}
                     floated="left"> Add </Button>
             </Table.HeaderCell>
             <Table.HeaderCell colSpan='4'>
             <Button type="submit"
                     floated="right"
                     primary size='small'>
                Next
              </Button>
             </Table.HeaderCell>
             </Table.Row>
            </Table.Footer>
            </Table>
           </Form>)
  }


  onModalClose(){
    this.setState({
      onModalOpen: false
    })
  }

  onNew(e, data){
    e.preventDefault();
    console.log(data);
    const {player} = data.formData;
    this.props.addBowler(player, this.props.innings);
    this.setState({
      onModalOpen: false
    })
  }

  handleSubmit(e){
    e.preventDefault();
    browserHistory.push('/board')
  }

  onBowlerAdd(e){
    e.preventDefault();
    this.setState({
      onModalOpen: true
    })
  }
}


let mapStateToProps = (state) => {
  console.log("Bowling state is ", state.bowling)
  return {
    bowlers: state.bowling.filter((bow) => bow.innings == state.playing.innings),
    innings: state.playing.innings
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

BowlingTable = connect(mapStateToProps, mapDispatchToProps)(BowlingTable);

export default BowlingTable;
