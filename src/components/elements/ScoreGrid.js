import React, {
  Component,
  PropTypes
} from 'react';
import {
  Form,
  Grid,
  Table,
  Segment,
  Header,
  Divider
} from 'semantic-ui-react';

class ScoreGrid extends Component{
    constructor(props){
      super(props);
    }
    render(){
      console.log(this.props);
      const {batting_team, runs, wickets, batting, bowling} = this.props;
      return (
               <Grid.Row centered>
               <Grid.Column width={8}>
                 <Segment>
                   <Header as="h1">{batting_team}</Header>
                   <Header as="h2">{runs+"/"+wickets}</Header>
                   <Divider horizontal> Batting </Divider>

                     <Table>
                       <Table.Header>
                       <Table.Row>
                       <Table.HeaderCell>Name</Table.HeaderCell>
                       <Table.HeaderCell>Runs</Table.HeaderCell>
                       </Table.Row>
                       </Table.Header>
                       <Table.Body>

                        {
                          batting.map(function(batsman){
                            return (<Table.Row>
                                    <Table.Cell singleLine>{batsman.name}</Table.Cell>
                                    <Table.Cell singleLine>{batsman.runs}</Table.Cell>
                                    </Table.Row>)
                          })
                        }

                       </Table.Body>
                     </Table>
                   <Divider horizontal>Bowling</Divider>
                   <Table>
                     <Table.Header>
                     <Table.Row>
                     <Table.HeaderCell>Name</Table.HeaderCell>
                     <Table.HeaderCell>Overs</Table.HeaderCell>
                     <Table.HeaderCell>Maidens</Table.HeaderCell>
                     <Table.HeaderCell>Wickets</Table.HeaderCell>
                     </Table.Row>
                     </Table.Header>
                     <Table.Body>
                     <Table.Row>
                     <Table.Cell singleLine>{bowling.name}</Table.Cell>
                     <Table.Cell singleLine>{bowling.overs}</Table.Cell>
                     <Table.Cell singleLine>{bowling.maidens}</Table.Cell>
                     <Table.Cell singleLine>{bowling.wickets}</Table.Cell>
                     </Table.Row>
                     </Table.Body>
                   </Table>

                 </Segment>
               </Grid.Column>
               </Grid.Row>
             )
    }
}

ScoreGrid.defaultProps = {
  runs: 0,
  wickets: 0,
  batting: [],
  bowling: {name: '',
            overs: "0.0",
            wickets: 0,
            maidens: 0},
  target: undefined,
  overs: "0.0",
  batting_team: "untitled"
}

ScoreGrid.propTypes = {
  runs: PropTypes.number.isRequired,
  wickets: PropTypes.number.isRequired,
  batting: PropTypes.array.isRequired,
  bowling: PropTypes.object.isRequired,
  overs: PropTypes.string.isRequired,
  batting_team: PropTypes.string.isRequired
}



export default ScoreGrid;
