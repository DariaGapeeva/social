import React from 'react';
import styles from './BoxFriends.module.scss';
import Person from './Friend/Person';
import { NavLink } from 'react-router-dom';

const Friends = ({ followedUsers }) => {
  return (
    <div className={styles.friends}>
      <div className={styles.friends__block}>
        <div className={styles.friends__item}>
          {followedUsers.map((user) => (
            <Person key={user.id} name={user.name} photo={user.photos.small} />
          ))}
          {/* <Person
            name={followedUsers[0].name}
            // url={props.state.dialogsPage.dataPerson[0].url}
          />
          <Person
            name={followedUsers[1].name}
            // url={props.state.dialogsPage.dataPerson[1].url}
          />
        </div>
        <div className={styles.friends__item}>
          <Person
            name={followedUsers[2].name}
            // url={props.state.dialogsPage.dataPerson[2].url}
          />
          <Person
            name={followedUsers[3].name}
            // url={props.state.dialogsPage.dataPerson[3].url}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Friends;
