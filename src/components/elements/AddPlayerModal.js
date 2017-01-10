import React, {
  Component,
  PropTypes
} from 'react';

import {
  Modal,
  Form,
  Header,
  Icon,
  Input,
  Button
} from 'semantic-ui-react';


class AddPlayerModal extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<Modal open={this.props.open} onClose={this.props.onClose} basic size='small'>
           <Header icon='alarm' content='Add a Batsman' />
           <Form onSubmit={this.props.onOk}>
           <Modal.Content>
              <Form.Field>
                   <label> Player Name </label>
                   <Input type='text' name='player' />
              </Form.Field>
              <Form.Field>
            <Button color='green' type='submit' inverted>
                <Icon name='checkmark' /> Add
            </Button>
              </Form.Field>
           </Modal.Content>
           </Form>
      </Modal>)
  }
}

export default AddPlayerModal;
