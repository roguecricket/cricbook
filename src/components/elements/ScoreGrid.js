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
import * as bowlingUtils from '../../utils/bowlingUtils';


class ScoreGrid extends Component{
    constructor(props){
      super(props);
    }
    render(){
      console.log(this.props);
      const {batting_team, runs, wickets, batting, bowlers, overs} = this.props;
      return (
               <Grid.Row centered>
               <Grid.Column width={10}>
                 <Segment>
                   <Header as="h1">{batting_team}</Header>
                   <Header as="h2">{runs+"/"+wickets}</Header>
                   <Header as="h3">{overs}</Header>
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
                     {
                       bowlers.map(function(bowling){
                         return( <Table.Row>
                          <Table.Cell singleLine>{bowling.name}</Table.Cell>
                          <Table.Cell singleLine>{bowlingUtils.getOvers(bowling.balls)}</Table.Cell>
                          <Table.Cell singleLine>{bowling.maidens}</Table.Cell>
                          <Table.Cell singleLine>{bowling.wickets}</Table.Cell>
                          </Table.Row>)
                       })
                     }
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
  bowlers: [],
  target: undefined,
  batting_team: "untitled"
}

ScoreGrid.propTypes = {
  wickets: PropTypes.number.isRequired,
  batting: PropTypes.array.isRequired,
  overs: PropTypes.string.isRequired,
  batting_team: PropTypes.string.isRequired
}



export default ScoreGrid;
