import React from "react";
import { Link } from "react-router-dom";

import PageBody from "../components/PageBody";
import Article from "../components/Article";
import Splash from "../components/Splash";
import allBlogPosts from "../allBlogPosts";

import style from "./Home.css";

export default function Home() {
	const postList = allBlogPosts
		.filter(({ hidden }) => !hidden)
		.map(({ slug, title, date, Body }) => (
			<Article key={ slug } title={ title } slug={ slug } date={ date }>
				<Body />
			</Article>
		));

	return (
		<React.Fragment>
			<Splash title="Latest Blog Posts" />

			<PageBody>
				{ postList }
			</PageBody>
		</React.Fragment>
	);
}
