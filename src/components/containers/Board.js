import React, {
  Component,
  PropTypes
} from 'react';
import {
  Grid,
  Button
} from 'semantic-ui-react';
import ScoreGrid from '../elements/ScoreGrid'
import BallPrompt from '../elements/BallPrompt'
import BattingGrid from '../elements/BattingGrid';
import BowlingGrid from '../elements/BowlingGrid';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions';

class ScoreBoard extends Component{

  constructor(props){
    super(props);
    this.state = {
      onBallPrompt: false
    }
  }

  componentDidMount(){

  }

  render(){
    const {gridprops} = this.props;
    return (
      <Grid>
      <BallPrompt open={this.state.onBallPrompt}
                  onClose={this.handleClose.bind(this)}
                  onOk={this.handleRuns.bind(this)}
                  heading= "Add Runs and Wickets"/>
      <ScoreGrid {...gridprops}></ScoreGrid>
        <Grid.Row centered>
          <Grid.Column width={10}>
            <Button fluid primary onClick={this.handleUpdate.bind(this)}>Update</Button>
          </Grid.Column>
        </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={10}>
          <BattingGrid players={this.props.batsmans}
                       handleOk={this.handleAddBatsman.bind(this)}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={10}>
          <BowlingGrid players={this.props.bowlers}
                       handleOk={this.handleAddBowler.bind(this)}/>
        </Grid.Column>
      </Grid.Row>

      </Grid>);
  }

  openRunModel(){
    this.setState({
      onBallPrompt: true
    })
  }

  handleClose(){
    this.setState({
      onBallPrompt: false
    })
  }

  handleRuns(e, data){
    e.preventDefault();
    console.log(data);
    this.setState({
      onBallPrompt: false
    })
  }

  handleUpdate(e){
    this.openRunModel();
  }

  handleAddBatsman(e, data){
    const {player} = data.formData;
    if(this.props.batsmans.length < 2)
        this.props.addBatsman(player, this.props.innings);
    else
        this.props.addPlayer(player, this.props.innings);
  }

  handleAddBowler(e, data){
    console.log(data);
    const {player} = data.formData;
    this.props.addBowler(player, this.props.innings);
  }

}

let mapStateToProps = (state) => {
  const overs = state.overs[state.playing.overs];
  return {gridprops: {
    runs: state.playing.runs,
    batting_team: state.playing.batting,
    wickets: state.playing.wickets,
    innings: state.playing.innings,
    batting: state.batting.filter((bat) => bat.innings == state.playing.innings && !bat.isOut && !bat.inPavilion),
    overs: state.overs[state.playing.overs],
    bowlers: state.bowling.filter((bowl) => bowl.innings == state.playing.innings && overs && bowl.name == overs.bowler)
  },
  batsmans: state.batting,
  bowlers: state.bowling
  }
}

let mapDispatchToProps = (dispatch) =>{
  return bindActionCreators(actionCreators, dispatch);
}

ScoreBoard = connect(mapStateToProps, mapDispatchToProps)(ScoreBoard)

export default ScoreBoard;
