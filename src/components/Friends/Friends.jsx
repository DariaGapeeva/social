import React from 'react';
import styles from '../Users/Users.module.scss';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../jpg/1.jpg';
import Pagination from '../common/Pagination/Pagination';


const Friends = (props) => {

	return (
		<div>

			<div>
				You have {props.totalCountFriends} friends
			</div>
			<Pagination
				totalCount={props.totalCountFriends}
				pageSize={props.pageSize}
				setNewCurrentPage={props.setNewCurrentPage}
			/>


			{props.followedUsers.map(user => <div key={user.id}>
				<span>
					<div>
						<NavLink to={'/profile/' + user.id}><img src={user.photos.small || userPhoto} /></NavLink>
					</div>
					<div>

						{user.followed ?

							<button disabled={props.followingInProgress.includes(user.id)}
								onClick={() => {
									props.unfollowThunk(user.id)
								}}>Unfollowed</button> :
							<button disabled={props.followingInProgress.includes(user.id)}
								onClick={() => {
									props.followThunk(user.id)
								}}>Followed</button>}

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




export default Friends;