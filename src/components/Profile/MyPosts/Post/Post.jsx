import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';
import React from 'react';
import { Button } from '../../../common/Button/Button';
import Data from '../../../common/Data/Data';
import styles from './Post.module.scss';

const Post = (props) => {
  let addLike = () => {
    props.addNewLike(props.id);
  };
  let deletePost = () => {
    props.deletePost(props.id);
  };

  return (
    <div className={styles.box}>
      <div className={styles.box__content}>
        <div className={styles.box__photo}>
          <img src={props.url} />
        </div>
        <div className={styles.box__message}>
          <div className={styles.box__text}> {props.message}</div>
          <div className={styles.box__data}>
            {' '}
            <Data />
          </div>
        </div>
      </div>

      <div className={styles.box__bottom}>
        <div>
          <button onClick={addLike}>&#128077;</button>
          {props.countlike}
        </div>
        <div>
          {' '}
          <Button onClick={deletePost} valueButton={'Удалить'} />{' '}
        </div>
      </div>
    </div>
  );
};

export default Post;
