import styled from 'styled-components'

import BtnEdit from './BtnEdit'
import BtnDelete from './BtnDelete'

function Task({ setTasksList, id, title, description }) {
	return (
		<TaskBody>
			<DivTop>
				<p>Task</p>
				<h2>{title}</h2>
			</DivTop>

			<DivDescription>
				<p>{description}</p>
			</DivDescription>

			<DivBtn>
				<BtnEdit id={id} />
				<BtnDelete id={id} setTasksList={setTasksList} />
			</DivBtn>
		</TaskBody>
	)
}

const TaskBody = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 250px;
	height: 100%;
	width: 300px;
	padding: 15px;
	justify-content: space-between;
	background-color: #0c0c0ccc;
	border-radius: 10px;
	box-shadow: 5px 5px 15px #000000cc;
`
const DivTop = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;

	h2 {
		align-self: center;
		color: #e7e7e7;
		text-align: center;
	}

	p {
		color: gray;
	}
`

const DivDescription = styled.div`
	height: 100%;
	align-self: flex-start;
	p {
		padding: 0 10px;
		font-size: 18px;
		text-align: justify;
		color: #e7e7e7;
		white-space: break-spaces;
	}
`

const DivBtn = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`
export default Task
