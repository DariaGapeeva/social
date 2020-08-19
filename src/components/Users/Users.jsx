import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../jpg/1.jpg';


const Users = (props) => {

	let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pageCountArray = [];
	for (let i = 1; i <= pageCount; i++) {
		pageCountArray.push(i);
	}
	console.log(pageCountArray)
	return (
		<div>

			<div className={styles.box}>
				{pageCountArray.map(element => {
					return <span key={element} onClick={(event) => { props.setNewCurrentPage(element) }} className={element === props.currentPage ? styles.selectedPage : ''}>{element}</span>
				})}
			</div>
			{props.users.map(user => <div key={user.id}>
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
