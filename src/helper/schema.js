import * as yup from 'yup'

export const yupSchema = yup.object({
	title: yup.string().required('A task precisa de um título'),
	// .max(20, 'Limite máximo de 20 caracteres'),
	description: yup
		.string()
		.required('A descrição não pode ser em branco')
		.max(120, 'Limite máximo de 120 caracteres'),
})
