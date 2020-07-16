import React from "react";
import { Link, NavLink } from "react-router-dom";

import style from "./Header.css";

export default function Header() {
	return (
		<header className={ style.Header }>
			<div className={ style.HeaderInner }>
				<Link className={ style.Title } to="/">
					lpg
				</Link>

				<nav className={ style.Nav }>
					<NavLink activeClassName={ style.ActiveNavLink } exact to="/">home</NavLink>
					<NavLink activeClassName={ style.ActiveNavLink } to="/about/">about</NavLink>
				</nav>
			</div>
		</header>
	);
}