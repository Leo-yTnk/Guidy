import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));

function App() {
	return (
		<Suspense fallback={<div>Carregando...</div>}>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
