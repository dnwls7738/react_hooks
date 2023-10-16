import React from "react";
import {
	BrowserRouter as Route,
	HashRouter,
	Switch,
} from "react-router-dom";
import State from "./components/State";
import Input from "./components/Input";
import Main from "./components/Main";
import Tab from "./components/Tab";
import Header from "./layout/Header";
import Effect from "./components/Effect";
import Title from "./components/Title";
import Click from "./components/Click";
import Confirm from "./components/Confirm";
import PreventLeave from "./components/PreventLeave";
import BeforeLeave from "./components/BeforeLeave";
import Fade from "./components/Fade";
import Network from "./components/Network";
import Scroll from "./components/Scroll";
import Fullscreen from "./components/Fullscreen";
import Notification from "./components/Notification";
import Axios from "./components/Axios";

function App() {
	return (
		<HashRouter>
			<Header />
			<Switch>
				<Route path="/" exact>
					<Main />
				</Route>
				<Route path="/state" exact>
					<State />
				</Route>
				<Route path="/input" exact>
					<Input />
				</Route>
				<Route path="/tab" exact>
					<Tab />
				</Route>
				<Route path="/effect" exact>
					<Effect />
				</Route>
				<Route path="/title" exact>
					<Title />
				</Route>
				<Route path="/click" exact>
					<Click />
				</Route>
				<Route path="/confirm" exact>
					<Confirm />
				</Route>
				<Route path="/preventleave" exact>
					<PreventLeave />
				</Route>
				<Route path="/beforeleave" exact>
					<BeforeLeave />
				</Route>
				<Route path="/fade" exact>
					<Fade />
				</Route>
				<Route path="/network" exact>
					<Network />
				</Route>
				<Route path="/scroll" exact>
					<Scroll />
				</Route>
				<Route path="/fullscreen" exact>
					<Fullscreen />
				</Route>
				<Route path="/notification" exact>
					<Notification />
				</Route>
				<Route path="/axios" exact>
					<Axios />
				</Route>
			</Switch>
		</HashRouter>
	);
}

export default App;
