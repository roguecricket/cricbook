import React, {
  Component,
  PropTypes
} from 'react';

import {
  Grid,
  Segment,
  Button,
  Form,
  Input,
  Table
} from 'semantic-ui-react';
import AddPlayerModal from './AddPlayerModal';


class BattingGrid extends Component{
  constructor(props){
    super(props);
    this.state ={
      onModalOpen: false
    }
  }

  render(){
    const {players} = this.props;
    return (<div>
      <AddPlayerModal open= {this.state.onModalOpen}
                      heading= "Add New Batsman"
                      onClose = {this.handleClose.bind(this)}
                      onOk={this.handleOk.bind(this)} />
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
                players.map((bat) => (
                  <Table.Row negative={bat.isOut} positive={!bat.isOut}>
                    <Table.Cell>{bat.name}</Table.Cell>
                    <Table.Cell>{bat.runs}</Table.Cell>
                    <Table.Cell>{bat.balls}</Table.Cell>
                    <Table.Cell>{bat.remarks}</Table.Cell>
                  </Table.Row>
                ))
              }
            </Table.Body>
            <Table.Footer fullWidth>
             <Table.Row>
             <Table.HeaderCell colSpan='4'>
             <Button primary size='small' onClick={this.handleAdd.bind(this)}>
                Add
              </Button>
             </Table.HeaderCell>
             </Table.Row>
            </Table.Footer>
          </Table>
    </div>)
  }

  handleClose(){
    this.setState({
      onModalOpen: false
    })
  }

  handleAdd(){
    this.setState({
      onModalOpen: true
    })
  }

  handleOk(e, data){
    e.preventDefault();
    this.props.handleOk(e, data);
    this.setState({
      onModalOpen: false
    })
  }
}

export default BattingGrid;
