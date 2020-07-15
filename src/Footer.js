import React from "react";

import style from "./Footer.css";

import twitter from "../resources/iconmonstr-twitter-1.svg";
import github from "../resources/iconmonstr-github-1.svg";
import linkedin from "../resources/iconmonstr-linkedin-3.svg";

const Item = ({ url, title, icon, children }) => (
	<span className={ style.Item }>
		<img className={ style.Icon } src={ icon } />
		<a title={ title } href={ url }>{ children }</a>
	</span>
);

export default function Footer() {
	return (
		<footer className={ style.Footer }>
			<div className={ style.FooterInner }>
				<Item url="https://twitter.com/LPGhatguy"
					icon={ twitter }
					title="My Twitter profile">LPGhatguy</Item>

				<Item url="https://github.com/LPGhatguy"
					icon={ github }
					title="My GitHub profile">LPGhatguy</Item>

				<Item
					url="https://www.linkedin.com/in/lucien-greathouse-539bb73b"
					icon={ linkedin }
					title="My LinkedIn profile">LinkedIn</Item>
			</div>
		</footer>
	);
}