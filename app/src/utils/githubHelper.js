import axios from 'axios';

const getUserInfo = userName => axios.get(`https://api.github.com/users/${userName}`);

const githubHelper = {
    getPlayerInfo: (players) => {
        return axios
            .all(players.map(userName => getUserInfo(userName)))
            .then(info => info.map(user => user.data))
    }
}

export default githubHelper;