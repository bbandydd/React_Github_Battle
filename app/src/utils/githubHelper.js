import axios from 'axios';

const getUserInfo = userName => axios.get(`https://api.github.com/users/${userName}`);
const getRepos = userName => axios.get(`https://api.github.com/users/${userName}/repos`);
const getTotalStars = repos => repos.data.reduce((prev, current) => prev + current.stargazers_count, 0);
const getPlayerData = player => getRepos(player.login)
        .then(getTotalStars)
        .then(totalStars => ({
            followers: player.followers,
            totalStars
        }));
const calculateScores = players => {
    return players.map((player) => player.followers * 3 + player.totalStars);
}

const githubHelper = {
    getPlayerInfo: (players) => {
        return axios
            .all(players.map(userName => getUserInfo(userName)))
            .then(info => info.map(user => user.data))
    },
    battle: (players) => {
        const playerOne = getPlayerData(players[0]);
        const playerTwo = getPlayerData(players[1]);

        return axios
            .all([playerOne, playerTwo])
            .then(calculateScores)
    }
}

export default githubHelper;