import React from 'react';
import styled from 'styled-components';

const User = styled.div`
	margin: 0px 0px 20px 0px;
	text-align: ${props => (props.user === 'me' ? 'right' : 'left')}};
`
const Item = styled.div`
	display: inline-block;	
`
const MessageBox = styled.div`
    margin: 10px 0px 10px 0px;
	padding: 10px;
	width: 300px;
	border: 1px solid rgb(52, 151, 151);
	box-shadow: 0 0 5px rgba(52, 151, 151, 0.5);
	border-radius: 15px;	
`
const Name = styled.div`
    width: 300px;
	padding: 0px 0px 0px 10px;	
`
const Message = ({ user, message }) => {

	return (
		<User user={user}>
			<Item>
				<Name>
					{user}
				</Name>
				<MessageBox>
					{message}
				</MessageBox>
			</Item>
		</User>
	)

}

export default Message;