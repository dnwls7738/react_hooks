import React from "react";

const usePreventLeave = () => {
	const listener = (e) => {
		e.preventDefault();
		e.returnValue = "";
	};
	const enablePrevent = () =>
		window.addEventListener("beforeunload", listener);
	const disablePrevent = () =>
		window.removeEventListener("beforeunload", listener);
	return { enablePrevent, disablePrevent };
};

function PreventLeave() {
	const { enablePrevent, disablePrevent } = usePreventLeave();
	return (
		<div>
			<p>Protect버튼 클릭 후 현재 페이지 새로고침 클릭시 알림</p>
			<button onClick={enablePrevent}>Protect</button>
			<button onClick={disablePrevent}>UnProtect</button>
		</div>
	);
}

export default PreventLeave;
