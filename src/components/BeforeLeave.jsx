import React, { useEffect } from "react";

const useBeforeleave = (onBefore) => {
	const handle = (e) => {
		const { clientY } = e;
		if (clientY <= 0) onBefore();
	};
	useEffect(() => {
		if (typeof onBefore !== "function") {
			return;
		}
		document.addEventListener("mouseleave", handle);
		return () => {
			document.removeEventListener("mouseleave", handle);
		};
	}, []);
};

function BeforeLeave() {
	const beForLife = () => console.log("Plz dont leave");
	useBeforeleave(beForLife);
	return (
		<div>
			<p>
				마우스 포인터가 브라우저 주소창 헤더부분으로 가면 콘솔창에 결과가
				뜸
			</p>
			<h1>Hello</h1>
		</div>
	);
}

export default BeforeLeave;
