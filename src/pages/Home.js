import React from "react";
import { Link } from "react-router-dom";

import posts from "../posts";
import PageBody from "../components/PageBody";
import Article from "../components/Article";
import Splash from "../components/Splash";

import style from "./Home.css";

export default function Home() {
	const postList = posts
		.filter(([Body, metadata]) => {
			return !metadata.hidden;
		})
		.map(([Body, metadata]) => {
			return (
				<Article key={ metadata.slug() } metadata={ metadata }>
					<Body />
				</Article>
			);
		});

	return (
		<React.Fragment>
			<Splash title="Latest Posts" />

			<PageBody>
				{ postList }
			</PageBody>
		</React.Fragment>
	);
}