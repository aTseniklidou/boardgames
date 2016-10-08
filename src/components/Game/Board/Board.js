import React from 'react';
import classes from './Board.scss';
import GameVideo from '../assets/mat_playthrough.gif';
import Click from '../assets/click.mp3';
import Victory from '../assets/win.mp3';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper'
import {styles} from './Styles';


function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () { window.scrollTo(x, y); };
  document.ontouchmove = function (e) {
    e.preventDefault();
  };
}

function enableScrolling() {
  window.onscroll = function () {};
  document.ontouchmove = function (e) {
    return true;
  };
};

let isMouseDown = false;
let compPlayed = false;

export const Board = ({ game, removeMarks, removePieces, markPiece, playComp}) => {
  const play = (sound) => {
    sound.pause(); sound.currentTime = 0; sound.play();
  };

  const clearSelection = () => {
    isMouseDown = false;
    removePieces();
    removeMarks();
    enableScrolling();
    compPlayed = false;
    if ((game.text).substring(8, 13) === 'wins!') {
      play(document.getElementById('winSound'));
    }
  };

  const onLeftClick = (ev, p, k, key) => {
    if (window.location.pathname=='/Randix-Game/TwoPlayer' || (game.text).substring(0, 7) === 'Player1') {
    if (p.type === 'marble') {
      isMouseDown = true;
      ev.preventDefault();
      play(document.getElementById('clickSound'));
      markPiece(k * game.options.size + key);
    }
  }
  };

  const onDrag = (p, k, key) => {
      if (window.location.pathname=='/Randix-Game/TwoPlayer' || (game.text).substring(0, 7) === 'Player1'){
    if (isMouseDown && p.type === 'marble') {
      play(document.getElementById('clickSound'));
      markPiece(k * game.options.size + key);
    }
  }
  };

 if ((game.text).substring(0, 7) === 'Player2' && window.location.pathname == '/Randix-Game/vsComp' && !compPlayed) {
   playComp();
   compPlayed = true;
   play(document.getElementById('clickSound'));
   setTimeout(removePieces, 1000);
 }

  return (
    <div className={classes.stage}>
      <audio id="clickSound" src={Click} />
      <audio id="winSound" src={Victory} />
      <img className={classes[game.phase]} alt='Game Tutorial' src={GameVideo} />
        <Table className={classes[game.phase]} bodyStyle={styles.table}>
          <TableBody displayRowCheckbox={false} >
            {game.pieces.slice(0, game.options.size).map((p, row) => (
              <TableRow
              selectable={false}
              onMouseUp={() => clearSelection()}>
                  {game.pieces.slice(row * game.options.size, row * game.options.size + game.options.size).map((piece, cell) => (
                    <TableRowColumn style={styles.tile} id={classes[game.text]}
                    onMouseDown={(ev) => onLeftClick(ev, piece, row, cell)}
                    onMouseOver={() =>onDrag(piece, row, cell)}>
                      <Paper
                      zDepth={5} circle={piece.type=='obstacle'? false: true}
                      style={piece.type=='selected' ? styles[piece.type][game.text.substring(0, 7)] : styles[piece.type]}
                      />
                    </TableRowColumn>
                  ))}
              </TableRow>
                ))}
          </TableBody>
        </Table>
    </div>
      );
};

Board.propTypes = {
  game: React.PropTypes.object.isRequired,
  markPiece: React.PropTypes.func.isRequired,
  removePieces: React.PropTypes.func.isRequired,
  removeMarks: React.PropTypes.func.isRequired,
  playComp: React.PropTypes.func.isRequired,
};

export default Board;
