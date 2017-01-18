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
      onBowlerSelect: true,
      onBattingModelOpen: false,
      bowlerAlreadySelected: false
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("Overs:",nextProps.overs);
    if(nextProps.balls % 6 == 0 && nextProps.balls != 0 && !this.state.bowlerAlreadySelected){
      this.setState({
        onBowlerSelect: true
      });
    }
  }

  render(){
    const {gridprops, balls} = this.props;
    console.log("Overs:",this.props.overs);

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
                      open={this.state.onBowlerSelect}
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
    console.log(data.formData);
    const {runs, extra} = data.formData;
    const is_ball = extra && extra != "WICKET" ? 0 : 1;
    const is_extra = !bowlingUtils.isExtra(data.formData)
    const calculated = bowlingUtils.getRuns(data.formData);
    console.log("CurrentOver: ", this.props.current_over);
    this.props.nextBall(data.formData,
                        this.props.current_over,
                        this.props.innings,
                        calculated);
    this.props.updateScore(calculated.toString(), is_ball);
    this.props.updateBowler(this.props.current_bowler,
                            is_extra,
                            calculated,
                            this.props.innings)

    this.props.updateRuns(this.props.innings,
                          parseInt(runs),
                          is_extra)

    if (parseInt(runs) % 2 == 1){
      this.props.toogleStrike(this.props.innings);
    }

    if(extra == "WICKET"){
      this.props.wicket();
    }

    this.setState({
      onBallPrompt: false,
      bowlerAlreadySelected: false
    })
  }

  handleUpdate(e){
    this.openRunModel();
  }

  handleAddBatsman(e, data){
    const {player} = data.formData;
    const batsmanOnPitch = this.props.batsmans.filter((bat) => !bat.isOut && !bat.inPavilion)
    if(batsmanOnPitch.length < 2){
      if(batsmanOnPitch.length > 0 && batsmanOnPitch[0].strike)
          this.props.addBatsman(player, this.props.innings, false);
      else
          this.props.addBatsman(player, this.props.innings, true);
    }
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
                        this.props.overs.length,
                        data.formData.player);
    this.props.updateOver(this.props.overs.length);
    this.props.toogleStrike(this.props.innings);
    this.setState({
      onBowlerSelect: false,
      onBowlerModelOpen: false
    })
  }

  changeBowler(e, data){
    console.log(data)
    const {value} = data;
    if(value == "ADD"){
       this.setState({
         onBowlerModelOpen: true
       })
    }else{
      this.setState({
        bowlerAlreadySelected: true
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
  return {gridprops: {
    runs: state.playing.runs,
    batting_team: state.playing.batting,
    wickets: state.playing.wickets,
    innings: state.playing.innings,
    batting: state.batting.filter((bat) => bat.innings == state.playing.innings && !bat.isOut && !bat.inPavilion),
    overs: bowlingUtils.getOvers(state.playing.balls),
    bowlers: state.bowling.filter((bowl) => bowl.innings == state.playing.innings && bowl.name == state.currentover.bowler)
  },
  batsmans: state.batting.filter((bat) => bat.innings == state.playing.innings),
  bowlers: state.bowling.filter((bowl) => bowl.innings == state.playing.innings),
  promptBowlerSelect: state.currentover.promptBowlerSelect,
  promptBatsmanSelect: state.currentover.promptBatsmanSelect,
  overs: state.overs.filter((over) => over.innings == state.playing.innings),
  innings: state.playing.innings,
  current_over: state.playing.overs,
  balls: state.playing.balls,
  current_bowler: state.currentover.bowler
  }
}

let mapDispatchToProps = (dispatch) =>{
  return bindActionCreators(actionCreators, dispatch);
}

ScoreBoard = connect(mapStateToProps, mapDispatchToProps)(ScoreBoard)

export default ScoreBoard;
