import React from "react";

function titleCase(str) {
	str = str.toLowerCase().split(" ");
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(" ");
}

const colors = {
	text3: "#5B5B5B",
	text2: "#7D7C7A",
	neutral: "#7D7C7A",
	base2: "#EDF7D2",
	base1: "#EDF7B5",
};

const BodyTheme = ({ children }) => {
	return (
		<div
			style={{
				backgroundColor: colors.base2,
			}}
		>
			{children}
		</div>
	);
};

function TryParagraph() {
	const bodyTitleStyle = {
		textAlign: "left",
		color: colors.text3,
	};
	const BodyTitles = (props) => {
		const { id } = props;
		// titleCounter++;
		const title = "title ";
		return <h2 style={bodyTitleStyle}>{titleCase(title + id)}</h2>;
	};

	return (
		<>
			<BodyTheme>
				<h1
					style={{
						textAlign: "center",
					}}
				>
					Hello World
				</h1>
				<BodyTitles id={1} />
				<p style={{ color: colors.text1 }}>
					Ut ut eu officia excepteur ipsum non labore cillum do adipisicing. Mollit velit eiusmod sunt tempor anim aliqua. Ad in culpa aliquip laboris minim eiusmod proident in laboris incididunt duis aliqua qui cupidatat.
				</p>
				<BodyTitles id={2} />
				<p>Ut ut eu officia excepteur ipsum non labore cillum do adipisicing. Mollit velit eiusmod sunt tempor anim aliqua. Ad in culpa aliquip laboris minim eiusmod proident in laboris incididunt duis aliqua qui cupidatat.</p>
				<BodyTitles id={3} />
				<p>Ut ut eu officia excepteur ipsum non labore cillum do adipisicing. Mollit velit eiusmod sunt tempor anim aliqua. Ad in culpa aliquip laboris minim eiusmod proident in laboris incididunt duis aliqua qui cupidatat.</p>
				<BodyTitles id={4} />
				<p>Ut ut eu officia excepteur ipsum non labore cillum do adipisicing. Mollit velit eiusmod sunt tempor anim aliqua. Ad in culpa aliquip laboris minim eiusmod proident in laboris incididunt duis aliqua qui cupidatat.</p>
				<BodyTitles id={5} />
				<p>Ut ut eu officia excepteur ipsum non labore cillum do adipisicing. Mollit velit eiusmod sunt tempor anim aliqua. Ad in culpa aliquip laboris minim eiusmod proident in laboris incididunt duis aliqua qui cupidatat.</p>
				<BodyTitles id={6} />
				<p>Ut ut eu officia excepteur ipsum non labore cillum do adipisicing. Mollit velit eiusmod sunt tempor anim aliqua. Ad in culpa aliquip laboris minim eiusmod proident in laboris incididunt duis aliqua qui cupidatat.</p>
			</BodyTheme>
		</>
	);
}

export default TryParagraph;
