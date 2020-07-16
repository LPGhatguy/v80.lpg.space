import React from "react";
import { Helmet } from "react-helmet";

import PageBody from "../components/PageBody";
import Article from "../components/Article";

export default function BlogPost({ body, metadata }) {
	const Body = body;

	return (
		<PageBody>
			<Helmet>
				<title>{ metadata.title }</title>
			</Helmet>

			<Article metadata={ metadata }>
				<Body />
			</Article>
		</PageBody>
	);
}