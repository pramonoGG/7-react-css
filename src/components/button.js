import React, { useEffect, useRef, useState } from "react";

function CustomizedButton() {
	const [counter, setcounter] = useState(0);
	// const counterRef = useRef(0);

	useEffect(() => {}, []);

	function plusButton() {
		setcounter((prev) => prev + 1);
		console.log("refresh?? plus");
		// counterRef.current.value++;
	}
	function minusButton() {
		setcounter((prev) => prev - 1);
		console.log("refresh?? minus");
		// counterRef.current.value--;
	}

	return (
		<div
			style={{
				display: "flex",
				// flex: 1,
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				border: "1px solid black",
				// backgroundColor: "#a6a6a6",
				flexDirection: "row",
			}}
		>
			<div
				style={{
					display: "flex",
					border: "1px solid black",
					flexDirection: "row",
					padding: "5px 20px",
				}}
			>
				<button style={{ margin: "auto", padding: "auto" }} onClick={minusButton}>
					-
				</button>
				<p style={{ color: "black" }}>{counter}</p>
				<button style={{ margin: "auto", padding: "auto", justifyContent: "center" }} onClick={plusButton}>
					+
				</button>
			</div>
		</div>
	);
}

export default CustomizedButton;
