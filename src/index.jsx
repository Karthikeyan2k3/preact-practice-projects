import { render } from 'preact';
import NameComponent from '/src/beginner-level-components/NameComponent.jsx';
import ClockComponent from '/src/beginner-level-components/ClockComponent.jsx';
import EventComponent from './beginner-level-components/EventComponents';


export function App() {
	return (
		<>
		<NameComponent />
		<ClockComponent />
		<EventComponent />
		</>
	);
}

render(<App />, document.getElementById('app'));
