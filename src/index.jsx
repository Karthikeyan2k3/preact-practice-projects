import { render } from 'preact';
import NameComponent from '/src/beginner-level-components/NameComponent.jsx';
import ClockComponent from '/src/beginner-level-components/ClockComponent.jsx';
import EventComponent from './beginner-level-components/EventComponents';
import FormComponent from './beginner-level-components/FormComponent';

export function App() {
	return (
		<>
		<NameComponent />
		<ClockComponent />
		<EventComponent />
		<FormComponent />
		</>
	);
}

render(<App />, document.getElementById('app'));
