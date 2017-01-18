import React, {Component, PropTypes} from 'react';
import DevTools from '../../dev/devTool';
import {Container} from 'semantic-ui-react';


const isProduction = process.env.NODE_ENV === 'production';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<Container>
               {this.props.children}
               {!isProduction && <DevTools />}
            </Container>)
  }
}

export default App;
