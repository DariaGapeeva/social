import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogsItem.jsx';
import Message from './Message/Message.jsx';
import { reduxForm, Field, reset } from 'redux-form';
import { required } from '../../utilits/validators/validator';
import { Button } from '../common/Button/Button';
import { Textarea } from '../common/formControl/formControls';
import { useRef } from 'react';
import { useEffect } from 'react';





const Dialogs = (props) => {
	const refDialogs = useRef(null);

	useEffect(() => {
		// refDialogs.current.scrollTop = refDialogs.current.scrollHeight;
		refDialogs.current.scrollTop = Infinity;
		console.log(refDialogs);
		console.log(refDialogs.current.scrollHeight);

	})





	let dialogsElements = props.dataPerson.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} url={dialog.url} />)

	let messagesElements = props.dataMessage.map(message => <Message key={message.id} message={message.message} user={message.user} user={message.user} />)


	const addMessage = (formData) => {

		props.addMessage(formData.message)

	}

	// if (!props.authed) { return <Redirect to='/login' /> }
	return (
		<div ref={refDialogs} className={styles.dialogs}>
			<div className={styles.dialogs__items}>
				{dialogsElements}
			</div>

			<div className={styles.dialogs__messages}>
				{messagesElements}

				<div className={styles.dialogs__newPost}>
					<div className={styles.dialogs__title}>me</div>.

					<DialogsReduxForm onSubmit={addMessage} />
				</div>

			</div>
		</div>
	)
}


const DialogsForm = (props) => {

	return <form onSubmit={props.handleSubmit}>
		<div className={styles.dialogs__textarea}>
			<Field
				name='message'
				component={Textarea}
				wrap='hard'
				cols='10'
				type='text'
				validate={[required]} />
		</div>
		{/* <button className={styles.dialogs__btn}>Send</button> */}
		<div className={styles.dialogs__button}>
			<Button valueButton={'Отправить'} />
		</div>
	</form>
}

const afterSubmit = (result, dispatch) =>
	dispatch(reset('dialogs'));




const DialogsReduxForm = reduxForm({
	form: 'dialogs',
	onSubmitSuccess: afterSubmit,
})(DialogsForm)

export default Dialogs;