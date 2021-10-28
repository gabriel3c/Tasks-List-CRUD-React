import { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'

import Task from './Task'
import { getTasks } from '../services/tasks'

function TasksBoard() {
	const [tasksList, setTasksList] = useState()

	useEffect(() => {
		const fetchTasks = async () => {
			const { data } = await getTasks()
			setTasksList(data.tasks.reverse())
		}
		try {
			fetchTasks()
		} catch (error) {
			console.log(error.message)
		}
	}, [])

	if (!tasksList) return <h2>Loading</h2>
	return (
		<>
			<Board>
				{tasksList.map(({ id, title, description }) => {
					return (
						<Fragment key={id}>
							<Task
								setTasksList={setTasksList}
								id={id}
								title={title}
								description={description}
							/>
						</Fragment>
					)
				})}
			</Board>
		</>
	)
}

const Board = styled.div`
	max-width: 86vw;
	width: 100%;
	margin-bottom: auto;
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	padding: 30px;
	justify-content: center;
	align-items: center;
`

export default TasksBoard
