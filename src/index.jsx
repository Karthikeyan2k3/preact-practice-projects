import { render } from 'preact';
import NameComponent from '/src/beginner-level-components/NameComponent.jsx';
import ClockComponent from '/src/beginner-level-components/ClockComponent.jsx';


export function App() {
	return (
		<>	
		<NameComponent />
		<ClockComponent />
		</>
	);
}

render(<App />, document.getElementById('app'));
