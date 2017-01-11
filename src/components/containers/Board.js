import React, {
  Component,
  PropTypes
} from 'react';
import {
  Grid
} from 'semantic-ui-react';
import ScoreGrid from '../elements/ScoreGrid';
import {connect} from 'react-redux';

class ScoreBoard extends Component{
  render(){
    const {gridprops} = this.props;
    return (
      <Grid>
      <ScoreGrid {...gridprops}></ScoreGrid>
      </Grid>);
  }
}


let mapStateToProps = (state) => {
  return {gridprops: {
    runs: state.playing.runs,
    batting_team: state.playing.batting,
    wickets: state.playing.wickets,
    overs: state.playing.overs,
    innings: state.playing.innings,
    batting: state.batting.filter((bat) => bat.innings == state.playing.innings && !bat.isOut && !bat.inPavilion),
    bowling: []
  }}
}

ScoreBoard = connect(mapStateToProps)(ScoreBoard)

export default ScoreBoard;
