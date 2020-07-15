import React from "react";
import { Link } from "react-router-dom";

import PageBody from "../PageBody";
import posts from "../posts";
import Article from "../components/Article";

import style from "./Home.css";

function Splash() {
	return (
		<div className={ style.Splash }>
			<div className={ style.SplashInner }>
				<h1 className={ style.SplashTitle }>
					Wow!
				</h1>

				<h2 className={ style.SplashSubtitle }>
					What a website!
				</h2>
			</div>
		</div>
	);
}

export default function Home() {
	const postList = posts.map(([Body, metadata]) => {
		return (
			<Article key={ metadata.slug() } metadata={ metadata }>
				<Body />
			</Article>
		);
	})

	return (
		<React.Fragment>
			<Splash />

			<PageBody>
				{ postList }
			</PageBody>
		</React.Fragment>
	);
}