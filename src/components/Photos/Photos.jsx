import React from 'react';
import Photo from './Photo/Photo';
import styles from './Photos.module.scss';


const Photos = (props) => {


	return (<div className={styles.photos} >
		{ props.photos.map((photo) => <Photo key={photo.id} id={photo.id} url={photo.url} title={photo.title} comments={photo.comments} addComment={props.addComment} />)}


	</div>
	)
}

export default Photos;
