import { useState } from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'

import styled from 'styled-components'
import icon from './../assets/icons/delete-btn2.png'
import { deleteTask } from '../services/tasks'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

function BtnDelete({ id, setTasksList }) {
	// Abrir e fechar modal
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	// deletar task
	const del = async id => {
		try {
			const resp = await deleteTask(id)
			setTasksList(resp.data.reverse())
			handleClose()
		} catch (error) {
			console.log(error.message)
			handleClose()
			alert('Não foi possível deletar')
		}
	}

	return (
		<>
			<BtnDel onClick={handleOpen}>
				<img src={icon} alt='botão deletar'></img>
			</BtnDel>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'
						sx={{ textAlign: 'center' }}
					>
						Voce deseja excluir a task selecionada?
					</Typography>
					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						<WrapperBtnModal>
							<button onClick={() => del(id)}>Excluir</button>
							<button onClick={handleClose}>Cancelar</button>
						</WrapperBtnModal>
					</Typography>
				</Box>
			</Modal>
		</>
	)
}

const BtnDel = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: none;
	/* width:50px;
  height:50px; */

	img {
		max-height: 22px;
	}
`
const WrapperBtnModal = styled.div`
	display: flex;
	gap: 25px;
	justify-content: space-evenly;

	button {
		padding: 10px;
		border: none;
		color: white;
		border-radius: 10px;
		font-weight: bold;
		width: 100px;
		cursor: pointer;
	}

	button:first-child {
		background-color: red;
	}
	button:last-child {
		background-color: black;
	}
`

export default BtnDelete
