import axios from 'axios';

export default {
	// Gets all saved users
	getUsers: () => {
		return axios.get("/api/user");
	},
	// Get by email
	getEmail: (email) => {
		return axios.get("/api/user/" + email);
	},
	// Gets user data by id number
	getById: (id) => {
		console.log(id)
		return axios.get("/api/user/" + id);
	},
	// Deletes the saved user with the given id
	deleteUser: (id) => {
		return axios.delete("/api/user/" + id);
	},
	// Adds a user to database
	createUser: (userData) => {
		return axios.post("/api/user", userData);
	},
	// Authenticates user login
	loginUser: (userData) => {
		return axios.post("/api/signin/", userData);
	},
	// Logs out the current user
	logoutUser: () => {
		return axios.post("/api/signout");
	},
	// Updates the users score with a new highscore
	updateUserScore: (id, score, difficulty, subject) => {
		return axios.put("/api/user/" + id, (score, difficulty, subject));
	}
};
