import { MouseEventHandler } from "react";
import "./form.scss";

export const Form = (props: { setCity: (arg0: string) => void; getWeather: MouseEventHandler<HTMLButtonElement> }) => {
	return (
		<form>
			<input type="text" name="city" placeholder="都市名" onChange={(e) => props.setCity(e.target.value)} />
			<button type="submit" onClick={props.getWeather}>
				Get Weather
			</button>
		</form>
	);
};
