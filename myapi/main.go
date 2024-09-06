package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"sync"
)

// Define a struct to represent a resource
type user struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

// In-memory data store
var users = []string{"Paul Bert", "John Doe", "Jane Smith", "Bob Johnson"}
var mu sync.Mutex // Mutex to handle concurrent access

// Handler to get all user names
func getusers(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

// Handler to get a single user by ID
func getuser(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()

	id, err := strconv.Atoi(r.URL.Query().Get("id"))
	if err != nil || id <= 0 || id > len(users) {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}
	userName := users[id-1]
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(userName)
}

// Handler to create a new user
func createuser(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()

	var newUserName string
	if err := json.NewDecoder(r.Body).Decode(&newUserName); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}
	users = append(users, newUserName)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(newUserName)
}

// Handler to delete a user by ID
func deleteuser(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()

	id, err := strconv.Atoi(r.URL.Query().Get("id"))
	if err != nil || id <= 0 || id > len(users) {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}
	users = append(users[:id-1], users[id:]...)
	w.WriteHeader(http.StatusNoContent)
}

// Main function to set up the routes and start the server
func main() {
	http.HandleFunc("/users", getusers)
	http.HandleFunc("/user", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			getuser(w, r)
		case http.MethodPost:
			createuser(w, r)
		case http.MethodDelete:
			deleteuser(w, r)
		default:
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})

	fmt.Println("Server is running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
