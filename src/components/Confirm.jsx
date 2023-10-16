import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
	if (!onConfirm || typeof onConfirm !== "function") {
		return;
	}
	if (onCancel && typeof onCancel !== "function") {
		return;
	}

	const cofirmAction = () => {
		if (window.confirm(message)) {
			onConfirm();
		} else {
			onCancel();
		}
	};
	return cofirmAction;
};

function Confirm() {
	const deleteWorld = () => console.log("Deleting the world...");
	const abort = () => console.log("Aborted");
	const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

	return (
		<div>
			<p>버튼 클릭시 confirm을 받을 수 있음</p>
			<button onClick={confirmDelete}>Delete the world</button>
		</div>
	);
}

export default Confirm;
