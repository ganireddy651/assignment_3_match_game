import './index.css'

const GameOver = props => {
  //   const {score} = props
  const {score, playAgain} = props
  const playBtnClicked = () => {
    playAgain()
  }

  return (
    <div className="game-over-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="score-text">YOUR SCORE</p>
      <p className="score">{score}</p>
      <div className="play-again-btn-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <div className="play-again-btn" type="button">
          <button
            className="play-again-btn"
            type="button"
            onClick={playBtnClicked}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOver
