import React from "react";
import { Link } from "react-router-dom";

import style from "./Article.css";

const dateToString = date => {
	const year = date[0].toString();
	const month = date[1].toString().padStart(2, "0");
	const day = date[2].toString().padStart(2, "0");

	return `${ year }-${ month }-${ day }`;
};

export default function Article({ children, metadata }) {
	return (
		<article className={ style.Article }>
			<h1 className={ style.Title }>
				<Link to={ metadata.route() }>{ metadata.title }</Link>
			</h1>
			<div className={ style.Date }>{ dateToString(metadata.date) }</div>

			{ children }

			<div className={ style.Fade } />
		</article>
	);
}