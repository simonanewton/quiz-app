import axios from 'axios';

export default {
	authenticate: () => {
		return axios.get("/api/user/authenticate");
	},
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
		return axios.post("/api/user/create", userData);
	},
	// Authenticates user login
	loginUser: (userData) => {
		return axios.post("/api/user/login", userData);
	},
	// Logs out the current user
	logoutUser: () => {
		return axios.post("/api/signout");
	},
	// Gets data for currently logged in user
	getUserData: () => {
		return axios.get("/api/user/data");
	},
	// Updates the users score with a new highscore
	updateUserScore: (id, userScore) => {
		return axios.put("/api/user/" + id, userScore);
	}
};
