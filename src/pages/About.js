import React from "react";
import { Helmet } from "react-helmet";

import PageBody from "../components/PageBody";
import Splash from "../components/Splash";

import AboutContent from "./AboutContent.mdx";

export default function About() {
	return (
		<React.Fragment>
			<Helmet>
				<title>About</title>
			</Helmet>
			<Splash title="About" />

			<PageBody>
				<AboutContent />
			</PageBody>
		</React.Fragment>
	);
}