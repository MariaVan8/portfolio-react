import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import SoftSkills from "./components/SoftSkills/SoftSkills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

import "./App.css";

function App() {
	return (
		<>
			<Header />
			<Skills />
			<About />
			<SoftSkills />
			<Projects />
			<Contact />
		</>
	);
}

export default App;
