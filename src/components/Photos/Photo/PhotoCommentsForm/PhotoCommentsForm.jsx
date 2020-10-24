import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../../common/Button/Button';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './PhotosCommentsForm.module.scss';
import styleform from '../../../common/formControl/formControl.module.scss';
import Comment from './Comment/Comment';
import photoSmall from '../../../../jpg/profile1.png';

const PhotosCommentsForm = ({
  id,
  url,
  title,
  comments,
  countHeart,
  addComment,
  addCountHeart,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    addComment(id, data.comment);
    e.target.reset();
  };

  return (
    <div className={styles.box}>
      <div className={styles.box__header}>
        <img src={url} className={styles.box__photo} />
        <div className={styles.box__item}>
          <div className={styles.box__title}>{title}</div>
          <div>
            {' '}
            <span className={styles.box__counter}>{countHeart} </span>{' '}
            <span
              className={styles.box__heart}
              onClick={() => addCountHeart(id)}
            >
              &#9825;
            </span>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.box__item}>
          <div className={styles.box__photoSmall}>
            <img src={photoSmall} />
          </div>
          <div className={styles.box__textarea}>
            <TextareaAutosize
              name="comment"
              ref={register({ required: true })}
              autoFocus
            />
          </div>
        </div>
        <div className={styles.box__button}>
          <Button valueButton="Отправить" type="submit" />
        </div>
      </form>

      {comments
        .map((comment, index) => (
          <Comment key={index} comment={comment} photoSmall={photoSmall} />
        ))
        .reverse()}
    </div>
  );
};

export default PhotosCommentsForm;
