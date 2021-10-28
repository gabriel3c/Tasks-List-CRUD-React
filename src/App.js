import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from './routes/Home'
import NewTask from './routes/NewTask'
import EditTask from './routes/EditTask'

import './styles/global.css'

export default function App() {
	return (
		<div className='App'>
			<Wrapper>
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/new-task' component={NewTask} />
						<Route exact path='/edit-task/:idTask' component={EditTask} />
					</Switch>
				</Router>
			</Wrapper>
		</div>
	)
}

const Wrapper = styled.div`
	margin: auto;
	padding-top: 50px;
	min-height: 100vh;
`
