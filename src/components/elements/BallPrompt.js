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
  Button,
  Radio
} from 'semantic-ui-react';


class BallPrompt extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (<Modal open={this.props.open}
           onClose={this.props.onClose} size='small'>
       <Modal.Header>
       <Header icon='alarm'
               content={this.props.heading}/>
       </Modal.Header>
       <Modal.Content>
       <Form onSubmit={this.props.onOk}>
            <Form.Field>
               <label> runs </label>
               <Input type="run" name="runs" />
            </Form.Field>
            <Form.Field style={{color: "white"}}>
              <label> Extras </label>
              <Form.Field> <Radio  toggle name="extra" value="NB" label="No Ball" /> </Form.Field>
              <Form.Field> <Radio  toggle name="extra" value="WD" label="Wide Ball"/> </Form.Field>
              <Form.Field> <Radio  toggle name="extra" value="B" label="Byes"/></Form.Field>
              <Form.Field> <Radio  toggle name="extra" value="LB" label="Leg Byes"/></Form.Field>
              <Form.Field>  <Radio  toggle name="extra" value="WICKET" label="Wicket" /></Form.Field>
              <Form.Field> <Radio  toggle name="extra" value="DEAD" label="Dead" /></Form.Field>
            </Form.Field>
            <Form.Field>
              <Button color='green' type='submit' inverted>
                  <Icon name='checkmark' /> Done
              </Button>
            </Form.Field>
       </Form>
       </Modal.Content>
    </Modal>)
  }
}


export default BallPrompt;
