import React from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import MDXComponents from "./MDXComponents";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import posts from "./posts";

export default function App() {
	const blogRoutes = posts.map(([body, metadata]) => {
		return (
			<Route exact key={ metadata.slug() } path={ metadata.route() }>
				<BlogPost body={ body } metadata={ metadata } />
			</Route>
		);
	});

	return (
		<MDXComponents>
			<Helmet
				titleTemplate="%s | lpg.space"
				defaultTitle="lpg.space"
			>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="description" content="Website for Lucien Greathouse, also known as lpg." />
			</Helmet>

			<Header />

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/about">
					<About />
				</Route>

				{ blogRoutes }

				<Route path="*">
					<NotFound />
				</Route>
			</Switch>

			<Footer />
		</MDXComponents>
	);
}