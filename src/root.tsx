import { component$ } from "@builder.io/qwik";
import { MaterialButton } from "./components";

export default component$(() => {
	return (
		<>
			<head>
				<title>Qwik Material UI</title>
				{/* You can add meta tags or links here if needed */}
			</head>
			<body>
				<h1>Qwik Material UI - Button Demo</h1>
				<div>
					<MaterialButton
						variant='contained'
						onClick$={() => alert("Contained clicked!")}
					>
						Contained Button
					</MaterialButton>
					<MaterialButton
						variant='outlined'
						onClick$={() => alert("Outlined clicked!")}
					>
						Outlined Button
					</MaterialButton>
					<MaterialButton
						variant='text'
						onClick$={() => alert("Text clicked!")}
					>
						Text Button
					</MaterialButton>
					<MaterialButton variant='contained' disabled>
						Disabled Button
					</MaterialButton>
				</div>
			</body>
		</>
	);
});
