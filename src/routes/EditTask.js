import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { yupResolver } from '@hookform/resolvers/yup'

import { editTask, getTaskToEdit } from '../services/tasks'
import { yupSchema } from '../helper/schema'

function EditTask() {
	const { idTask } = useParams()
	const history = useHistory()

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({ resolver: yupResolver(yupSchema) })

	useEffect(() => {
		try {
			const fetchTask = async id => {
				const {
					data: { task },
				} = await getTaskToEdit(id)
				setValue('title', task.title)
				setValue('description', task.description)
			}
			fetchTask(idTask)
		} catch (error) {
			console.log(error)
		}
	}, [idTask, setValue])

	const onSubmit = async data => {
		try {
			await editTask(idTask, data)
			alert('editado com sucesso')
			history.push('/')
		} catch (error) {
			alert('houve um erro na edição')
			console.log(error.message)
		}
	}

	return (
		<Wrapper>
			<h2>Edite a task selecionada</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type='text' {...register('title')} />
				<p>{errors.title?.message}</p>
				<textarea type='text' {...register('description')} />
				<p>{errors.description?.message}</p>
				<div>
					<input onClick={history.goBack} value='Voltar' />
					<input type='submit' value='Editar' />
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

	& > button {
		align-self: flex-start;
		margin-top: 30px;
		border: none;
		background-color: #ff3434;
		color: black;
		padding: 10px;
		border-radius: 10px;
		width: 100%;
		cursor: pointer;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin: 15px 0;
		width: 100%;

		p {
			color: red;
			font-size: 15px;
		}
		div {
			display: flex;
			justify-content: space-around;

			//buttons
			input {
				text-decoration: none;
				border: none;
				background-color: #2dd33e;
				border-radius: 10px;
				padding: 10px;
				cursor: pointer;
				width: 150px;
				font-weight: bold;
				text-align: center;
				outline: none;
			}

			input:first-child {
				background-color: #ff3434;
			}
		}

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
	}
`

export default EditTask
