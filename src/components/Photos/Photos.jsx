import React from 'react';
import Photo from './Photo/Photo';
import styles from './Photos.module.scss';



const Photos = (props) => {


	return (<div className={styles.photos} >
		{ props.photos.map((photo) => <Photo key={photo.id} id={photo.id} url={photo.url} title={photo.title} comments={photo.comments} countHeart={photo.countHeart} addComment={props.addComment} addCountHeart={props.addCountHeart} />)}


	</div>
	)
}

export default Photos;
