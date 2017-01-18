import React, {Component, PropTypes} from 'react';
import DevTools from '../../dev/devTool';
import {Container, Header, Grid, Divider} from 'semantic-ui-react';


const isProduction = process.env.NODE_ENV === 'production';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<Container>
               <Grid>
                 <Grid.Row centered>
                  <Grid.Column>
                    <Header as="h1">Welcome to Cricboard</Header>
                  </Grid.Column>
                 </Grid.Row>
               </Grid>
               {this.props.children}
               {!isProduction && <DevTools />}
            </Container>)
  }
}

export default App;
