import React from "react";
import { Link } from "react-router-dom";

import style from "./Article.css";

const dateToString = date => {
	const year = date.getFullYear().toString();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");

	return `${ year }-${ month }-${ day }`;
};

export default function Article({ children, slug, title, date }) {
	return (
		<article className={ style.Article }>
			<h1 className={ style.Title }>
				<Link to={ `/post/${ slug }` }>{ title }</Link>
			</h1>
			<div className={ style.Date }>{ dateToString(date) }</div>

			{ children }

			<div className={ style.Fade } />
		</article>
	);
}
