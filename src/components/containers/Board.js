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
import AddPlayerModal from '../elements/AddPlayerModal';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions';
import SelectPlayers from '../elements/SelectPlayer';
import * as bowlingUtils from '../../utils/bowlingUtils';

class ScoreBoard extends Component{

  constructor(props){
    super(props);
    this.state = {
      onBallPrompt: false,
      onBowlerModelOpen: false,
      onBattingModelOpen: false
    }
  }

  componentDidMount(){
    const {overs} = this.props;
    const length = overs.length;
    const currentover = overs[length-1];

    if(!currentover){
      this.props.showPromptForBowler();
      return;
    }

    const bowled = bowlingUtils.getOverInfo(currentover.figures);
    console.log(bowled);

    if(bowled.balls  >= 6){
      this.props.showPromptForBowler();
      return;
    }
    this.openRunModel();
  }

  render(){
    const {gridprops} = this.props;
    return (
      <Grid>
      <BallPrompt open={this.state.onBallPrompt}
                  onClose={this.handleClose.bind(this)}
                  onOk={this.handleRuns.bind(this)}
                  heading= "Add Runs and Wickets"/>

      <AddPlayerModal heading="Add a Bowler"
                      open={this.state.onBowlerModelOpen}
                      onOk={this.onNewBowler.bind(this)}
                      onClose={this.onBowlerModalClose.bind(this)} />

       <SelectPlayers heading="Select Batsman"
                      players={this.props.batsmans}
                      ref="sbastman"
                      open={this.props.promptBatsmanSelect}
                      onClose={this.handleBatsmanPromptClose.bind(this)}
                      onOk={this.addBatsmanOnWicket.bind(this)}
                      onHandleChange={this.changeBatsman.bind(this)}/>

       <SelectPlayers heading="Select Bowler"
                      players={this.props.bowlers}
                      ref="sbowler"
                      open={this.props.promptBowlerSelect}
                      onClose={this.handleBowlerPromptClose.bind(this)}
                      onOk={this.addBowlerForOver.bind(this)}
                      onHandleChange={this.changeBowler.bind(this)}/>

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
      onBallPrompt: false,
    });

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

  addBatsmanOnWicket(e, data){
    e.preventDefault();
    console.log(data);
  }

  addBowlerForOver(e, data){
    e.preventDefault();
    console.log(data);
    console.log(this);
    this.props.selectBowler(data.formData.player);
    this.props.nextOver(this.props.gridprops.innings,
                        this.props.overs.length, data.formData.player);


  }

  changeBowler(e, data){
    console.log(data)
    const {value} = data;
    if(value == "ADD"){
       this.setState({
         onBowlerModelOpen: true
       })
    }
  }

  changeBatsman(e, data){

  }

  handleBowlerPromptClose(e){
    //  this.props.closeBowlingPrompt();
  }

  handleBatsmanPromptClose(e){
    // this.props.closeBattingPrompt();
  }

  onBowlerModalClose(e){
    this.setState({
      onBowlerModelOpen: false
    })
  }

  onNewBowler(e, data){
    e.preventDefault();
    console.log(data);
    const {player} = data.formData;
    this.props.addBowler(player, this.props.innings);
    this.setState({
      onBowlerModelOpen: false
    })
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
  batsmans: state.batting.filter((bat) => bat.innings == state.playing.innings),
  bowlers: state.bowling.filter((bowl) => bowl.innings == state.playing.innings),
  promptBowlerSelect: state.currentover.promptBowlerSelect,
  promptBatsmanSelect: state.currentover.promptBatsmanSelect,
  overs: state.overs.filter((over) => over.innings == state.playing.innings),
  innings: state.playing.innings
  }
}

let mapDispatchToProps = (dispatch) =>{
  return bindActionCreators(actionCreators, dispatch);
}

ScoreBoard = connect(mapStateToProps, mapDispatchToProps)(ScoreBoard)

export default ScoreBoard;
