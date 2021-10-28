import { useHistory } from 'react-router'
import styled from 'styled-components'

import icon from './../assets/icons/edit-btn.png'

export default function BtnEdit({ id }) {
	const history = useHistory()

	return (
		<Button onClick={() => history.push(`/edit-task/${id}`)}>
			<img src={icon} alt='botão editar'></img>
		</Button>
	)
}

const Button = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: none;

	img {
		height: 25px;
	}
`
