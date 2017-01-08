import React from 'react';

const styles = {
    photo: {
        width: '200px',
        margin: '20px auto'
    }
}

const UserDetail = ({ header, user, score }) => (
    <div className="col-sm-6">
        <p className="lead">{header}</p>
        <li className="list-group-item">
            {score && <li className="list-group-item"><h3>Score: {score}</h3></li>}
            <img src={user.avatar_url} className="img-rounded img-responsive" style={styles.photo}/>
            {user.name && <li className="list-group-item">Name: {user.name}</li>}
            <li className="list-group-item">Username: {user.login}</li>
            {user.location && <li className="list-group-item">Location: {user.location}</li>}
            {user.company && <li className="list-group-item">Company: {user.company}</li>}
            <li className="list-group-item">Followers: {user.followers}</li>
            <li className="list-group-item">Following: {user.following}</li>
            <li className="list-group-item">Public Repos: {user.public_repos}</li>
            {user.blog && <li className="list-group-item">Blog: <a href={user.blog}> {user.blog}</a></li>}
        </li>
    </div>
)

export default UserDetail;