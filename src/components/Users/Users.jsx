import React from 'react';
import styles from './Users.module.scss'
import userPhoto from '../../jpg/1.jpg';
import { NavLink } from 'react-router-dom';
import Pagination from '../common/Pagination/Pagination';


const Users = (props) => {



	return (

		<div>
			<Pagination
				totalCount={props.totalUsersCount}
				pageSize={props.pageSize}
				setNewCurrentPage={props.setNewCurrentPage} />

			{props.users.map(user => <div key={user.id}>
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


export default Users;
