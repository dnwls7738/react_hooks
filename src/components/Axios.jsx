import React from "react";
import useAxios from "./useAxios";

function Axios() {
	const { loading, data, refetch } = useAxios({
		url: "https://yts.mx/api/v2/list_movies.json",
	});
	//   console.log(`Loading:${loading}\nError:${error}\nData:${JSON.stringify(data)}`);
	return (
		<div>
			<p>네트워크 연결을 확인 할 수 있음</p>
			<h1>{data && data.status}</h1>
			<h2>{loading && "Loading"}</h2>
			<button onClick={refetch}>Refetch</button>
		</div>
	);
}

export default Axios;
