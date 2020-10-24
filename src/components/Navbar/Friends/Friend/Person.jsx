import React from 'react';
import styles from './Person.module.scss';
import userPhoto from '../../../../jpg/1.jpg';

const Person = (props) => {
  return (
    <div className={styles.person}>
      <div className={styles.person__photo}>
        <img src={props.photo || userPhoto} />
      </div>
      <div className={styles.person__name}>{props.name}</div>
    </div>
  );
};

export default Person;
