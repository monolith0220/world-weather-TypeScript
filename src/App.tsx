import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { Title } from "./components/Title/Title";
import { Form } from "./components/Form/Form";
import { Results } from "./components/Results/Results";
import "./app.scss";

const App = () => {
	const [city, setCity] = useState("");
	const [results, setResults] = useState({
		country: "",
		cityName: "",
		temperature: "",
		conditionText: "",
		icon: "",
	});
	const getWeather = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		axios.get(`https://api.weatherapi.com/v1/current.json?key=b07cc7ab6c12478b97f142240222502&q=${city}&aqi=no`).then((res) => {
			setResults({
				country: res.data.location.country,
				cityName: res.data.location.name,
				temperature: res.data.current.temp_c,
				conditionText: res.data.current.condition.text,
				icon: res.data.current.condition.icon,
			});
		});
	};

	return (
		<div className="wrapper">
			<div className="container">
				<Title />
				<Form setCity={setCity} getWeather={getWeather} />
				<Results results={results} />
			</div>
		</div>
	);
};

export default App;
