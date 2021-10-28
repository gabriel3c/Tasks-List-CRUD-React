import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { yupResolver } from '@hookform/resolvers/yup'

import { createTask } from '../services/tasks'
import { yupSchema } from '../helper/schema'

function NewTask() {
	const history = useHistory()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(yupSchema) })

	const onSubmit = data => {
		try {
			const sendTask = async () => {
				await createTask(data)
				alert('Task criada com sucesso')
				history.push('/')
			}
			sendTask()
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<Wrapper>
			<h2>Crie uma nova task</h2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<input type='text' placeholder='Título' {...register('title')} />
				<p>{errors.title?.message}</p>
				<textarea
					type='text'
					placeholder='Descreva a atividade'
					{...register('description')}
				/>
				<p>{errors.description?.message}</p>
				<div>
					<button onClick={history.goBack}>Voltar</button>
					<button type='submit'>Criar</button>
				</div>
			</form>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	width: max-content;

	h2 {
		color: #e7e7e7;
	}

	form {
		outline: none;
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin: 15px 0;
		width: 100%;

		input {
			padding: 0 10px;
			height: 50px;
			font-size: 18px;
			border-radius: 10px;
		}

		textarea {
			width: 450px;
			height: 200px;
			resize: none;
			padding: 10px;
			font-size: 18px;
			border-radius: 10px;
		}

		p {
			color: red;
			font-size: 15px;
		}

		div {
			display: flex;
			justify-content: space-around;
		}

		button {
			text-decoration: none;
			border: none;
			background-color: #2dd33e;
			border-radius: 10px;
			padding: 10px;
			cursor: pointer;
			width: 150px;
			font-weight: bold;
			font-size: 18px;
			height: 50px;
			outline: none;
		}

		button:first-child {
			background-color: #ff3434;
		}
	}
`

export default NewTask
