/*package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
)

// Define a struct to represent a resource
type user struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

// In-memory data store
var users = map[int]user{
	1: {ID: 1, Name: "user One"},
	2: {ID: 2, Name: "user Two"},
}

// Handler to get all users
func getusers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

// Handler to get a single user by ID
func getuser(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.URL.Query().Get("id"))
	if err != nil || id <= 0 {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}
	user, exists := users[id]
	if !exists {
		http.Error(w, "user not found", http.StatusNotFound)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(user)
}

// Handler to create a new user
func createuser(w http.ResponseWriter, r *http.Request) {
	var newuser user
	if err := json.NewDecoder(r.Body).Decode(&newuser); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}
	newuser.ID = len(users) + 1
	users[newuser.ID] = newuser
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(newuser)
}

// Handler to delete an user by ID
func deleteuser(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.URL.Query().Get("id"))
	if err != nil || id <= 0 {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}
	_, exists := users[id]
	if !exists {
		http.Error(w, "user not found", http.StatusNotFound)
		return
	}
	delete(users, id)
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
*/

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
var users = []string{"user One", "user Two"}
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
