import React from 'react';


const Data = () => {
	let now = new Date();
	let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

	return (
		<>
			{`${now.getDate()}  ${months[now.getMonth()]} ${now.getFullYear()} `}
		</>
	)
}

export default Data;