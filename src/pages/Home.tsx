import * as React from 'react';
import { useState } from 'react';

const [todoData, setTodoData] = useState<string>("")

export default function Home() {
	return (
		<main className="home">
			<div className="home__container">
				<InputField />
			</div>
		</main>
	)
}