  
import axios from "axios";

export default {
  // Gets all saved users
  getUsers: function() {
    return axios.get("/api/user");
  },
  
  //Get by email
  getEmail: function(email) {
    return axios.get("/api/user/" + email);
  },
  getById: function(id) {
    console.log(id)
    return axios.get("/api/user/" + id)
  },
  // Deletes the saved user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Adds a user to database
  createUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  loginUser: function(userData) {
    return axios.post("/api/signin/", userData)
  },
  logoutUser: function() {
    return axios.post("/api/signout")
  }
};