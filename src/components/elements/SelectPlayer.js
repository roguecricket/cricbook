import React, {
  Component,
  PropTypes
} from 'react';

import {
  Modal,
  Grid,
  Form,
  Button,
  Header,
  Select,
  Icon
} from 'semantic-ui-react';

class SelectPlayers extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {players, open, onClose, heading, onOk} = this.props;
    const vals = players.map((player) => ({text: player.name, value: player.name}));
    return (<Modal open={open}
                   onClose={onClose} basic size='small'>
             <Header icon='alarm' content={heading}/>
             <Form onSubmit={onOk}>
             <Modal.Content>
                <Form.Field>
                     <label> Player Name </label>
                     <Select name='player' onChange={this.props.onHandleChange} options={[...vals, {
                         text: 'ADD',
                         value: 'ADD'
                       }]} />
                </Form.Field>
                <Form.Field>
              <Button color='green' type='submit' inverted>
                  <Icon name='checkmark' /> Done
              </Button>
                </Form.Field>
             </Modal.Content>
             </Form>
         </Modal>)
  }
}

export default SelectPlayers;
