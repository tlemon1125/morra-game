import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    const _hand = (this.state || {})._hand || 0;
    return (
      <div>
        {hand ? 'It was a draw! Please reveal your hand again.' : 'Please reveal your hand.'}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        {/* <button
          disabled={!playable}
          onClick={() => parent.playHand('ROCK')}
        >Rock</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('PAPER')}
        >Paper</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('SCISSORS')}
        >Scissors</button> */}
        <input type="number" onChange={(e) => this.setState({_hand: e.currentTarget.value})} max={5} min={0} placeholder={0} />
        {console.log(_hand)}
        <button onClick={() => parent.playHand(_hand)}>Submit</button>
      </div>
    );
  }
}

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, guess} = this.props;
    const _guess = (this.state || {})._guess || 0;
    return (
      <div>
        {guess ? 'It was a draw! Please guess again.' : 'Please guess the total number.'}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        {/* <button
          disabled={!playable}
          onClick={() => parent.playHand('ROCK')}
        >Rock</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('PAPER')}
        >Paper</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('SCISSORS')}
        >Scissors</button> */}
        <input type="number" onChange={(e) => this.setState({_guess: e.currentTarget.value})} max={10} min={0} placeholder={0} />
        {console.log(_guess)}
        <button onClick={() => parent.playGuess(_guess)}>Submit</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;
