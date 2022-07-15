import React, { useEffect, useState } from "react"


console.log("App.js is working.")

function App() {

	return (
			<Students/>
	);
}

export default App;

// Students component
const Students = () => {

    const [students, setStudents] = useState([]); // initial state is an empty array

	// Effect only runs once
    useEffect(() => {
        fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
        .then((res) => res.json())
        .then((data) => {
            setStudents(data);
        });
    }, []); // [conditions to run the effect] <-- if empty, nothing can make it run again

	return (
		<>
			<p>&nbsp; &nbsp; <strong>Kekambas-91 students</strong></p>
			<ul>
				{students.map((student) => 
					<li>
						{student.id}: &nbsp; &nbsp; {student.first_name} {student.last_name} 
					</li>
				)}
			</ul>
		</>
	)
}
