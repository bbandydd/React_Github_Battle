import React from 'react';
import { Link } from 'react-router';
import UserDetails from '../UserDetail';

const styles = {
    startOver: {
        marginTop: '20px'
    }
}

const Results = ({ playersInfo, scores }) => {

    const winnerIndex = scores[0] > scores[1] ? 0 : 1;
    const loserIndex = winnerIndex === 0 ? 1 : 0; 

    return (
        <div className="jumbotron col-sm-12 text-center">
            <h1>Results</h1>
            <UserDetails header='Winner' score={scores[winnerIndex]} user={playersInfo[winnerIndex]} />
            <UserDetails header='Loser' score={scores[loserIndex]} user={playersInfo[loserIndex]} />
            <div className='col-sm-12'>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-danger' style={styles.startOver}>
                        Start Over
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Results;