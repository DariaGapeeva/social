import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../jpg/1.jpg';


const Users = (props) => {
	if (props.users.length === 0) {
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			props.setUsers(response.data.items)
		})
		// props.setUsers([
		// 	{ id: 1, photoUrl: 'https://vignette.wikia.nocookie.net/fabulous-patrol/images/e/ed/%D0%90%D0%BB%D1%91%D0%BD%D0%BA%D0%B0.png/revision/latest/top-crop/width/360/height/450?cb=20200122132618&path-prefix=ru', followed: false, fullName: 'Daria', status: 'I am a superstar', location: { country: 'Russia', city: 'Novosibirsk' } },
		// 	{ id: 2, photoUrl: 'https://vignette.wikia.nocookie.net/fabulous-patrol/images/e/ed/%D0%90%D0%BB%D1%91%D0%BD%D0%BA%D0%B0.png/revision/latest/top-crop/width/360/height/450?cb=20200122132618&path-prefix=ru', followed: true, fullName: 'Misha', status: 'I am here', location: { country: 'Russia', city: 'Moscow' } },
		// 	{ id: 3, photoUrl: 'https://vignette.wikia.nocookie.net/fabulous-patrol/images/e/ed/%D0%90%D0%BB%D1%91%D0%BD%D0%BA%D0%B0.png/revision/latest/top-crop/width/360/height/450?cb=20200122132618&path-prefix=ru', followed: false, fullName: 'Lada', status: 'I am from Mars', location: { country: 'Russia', city: 'Novosibirsk' } },
		// 	{ id: 4, photoUrl: 'https://vignette.wikia.nocookie.net/fabulous-patrol/images/e/ed/%D0%90%D0%BB%D1%91%D0%BD%D0%BA%D0%B0.png/revision/latest/top-crop/width/360/height/450?cb=20200122132618&path-prefix=ru', followed: true, fullName: 'Mila', status: 'Hi', location: { country: 'Russia', city: 'Novosibirsk' } },
		// 	{ id: 5, photoUrl: 'https://vignette.wikia.nocookie.net/fabulous-patrol/images/e/ed/%D0%90%D0%BB%D1%91%D0%BD%D0%BA%D0%B0.png/revision/latest/top-crop/width/360/height/450?cb=20200122132618&path-prefix=ru', followed: false, fullName: 'Anton', status: 'I am just your dream', location: { country: 'Russia', city: 'Novosibirsk' } },
		// ])
	}

	return (
		<div> {
			props.users.map(user => <div key={user.id}>
				<span>
					<div>
						<img src={user.photos.small || userPhoto} />
					</div>
					<div>

						{user.followed ? <button onClick={() => { props.unfollow(user.id) }}>Followed</button> : <button onClick={() => { props.follow(user.id) }}>Unfollowed</button>}

					</div>
				</span>
				<span>
					<span>
						<div>{user.name}</div>
						<div>{user.status}</div>
					</span>
					<span>
						<div>
							{/* "{user.location.city}" */}
						</div>
						<div>
							{/* "{user.location.country}" */}
						</div>
					</span>
				</span>
			</div>)
		}
		</div>
	)
}




export default Users;
