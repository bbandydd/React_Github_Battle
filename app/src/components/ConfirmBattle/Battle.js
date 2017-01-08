import React from 'react';
import { Link } from 'react-router';
import UserDetail from '../UserDetail';

const styles = {
    space: {
        marginTop: '25px'
    }
}

const Battle = ({ playersInfo, onInitialBattle }) => (
    <div className="jumbotron col-sm-12 text-center">
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
            <UserDetail header="Player One" user={playersInfo[0]}/>
            <UserDetail header="Player Two" user={playersInfo[1]}/>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}>
            <button type="button" className="btn btn-lg btn-success" onClick={onInitialBattle}>Initiate Battle!</button>
          </div>
          <div className="col-sm-12" style={styles.space}>
            <Link to="/playerOne">
              <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
            </Link>
          </div>
        </div>
    </div>
)

export default Battle;