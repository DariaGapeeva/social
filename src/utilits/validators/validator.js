export const required = formData => (formData ? undefined : 'Required')



const maxLengthCreator = (maxLength) => (
	(formData) => {
		if (formData.length < maxLength) return undefined;
		return `max length is ${maxLength} symbols`
	}

)




export const maxLength30 = maxLengthCreator(30);
