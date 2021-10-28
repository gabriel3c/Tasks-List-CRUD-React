import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import TasksBoard from '../components/TasksBoard'

function Home() {
	return (
		<>
			<Container>
				<h1>Tasks List</h1>
				<Link to='/new-task'>Create new task</Link>
				<TasksBoard />
			</Container>
		</>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	width: max-content;

	h1 {
		color: #e7e7e7;
	}

	a {
		align-self: flex-start;
		text-decoration: none;
		background-color: #2dd33e;
		color: black;
		padding: 10px;
		border-radius: 10px;
		margin-left: 50px;
		margin-top: 20px;
	}
`

export default Home
