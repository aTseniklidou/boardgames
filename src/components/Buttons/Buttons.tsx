import React from 'react';
import ButtonSound from '../../assets/button.mp3';
import { useDispatch, useSelector } from 'react-redux';
import { clearBoard, initializeBoard } from '../../state/actions/game';
import { GamePhase } from '../../model/enum';
import { Button } from '../../library/Button';
import './Buttons.scss'
import { State } from '../../state/createStore';

const play = (sound: any) => {
  sound.pause(); sound.currentTime = 0; sound.play();
};

export const Buttons = () => {
  const boardSize = useSelector((state: State)  => state.game.options.size)
  const gamePhase = useSelector((state: State)  => state.game.phase)
  const dispatch = useDispatch();

  const newGame = () => {
    play(document.getElementById('buttonSound'));
    dispatch(initializeBoard(boardSize));
  };

  const guitGame = () => {
    play(document.getElementById('buttonSound'));
    dispatch(clearBoard());
  };

  return (
    <div>
      <audio id='buttonSound' src={ButtonSound} />
      {gamePhase !== GamePhase.gameEnd && <Button className={'button-quit'} label={'Quit'} onClick={guitGame} />}
      <Button  label={'New game'} onClick={newGame} />
    </div>
);
};
