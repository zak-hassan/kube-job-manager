package jobapi

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

// Jobmetadata - fields are subject to change
type Jobmetadata struct {
	Name    string `json:"Name"`
	Desc    string `json:"desc"`
	Content string `json:"content"`
}

// Joblist - Contains a collection of job metadata
type Joblist []Jobmetadata

// GetAllJobs - Web service that returns job metadata
func GetAllJobs(w http.ResponseWriter, r *http.Request) {
	// TODO replace mock data to calls to kubernetes api to retrieve metadata about jobs
	jlist := Joblist{
		Jobmetadata{Name: "j1", Desc: "Description...1", Content: "Content...1"},
		Jobmetadata{Name: "j2", Desc: "Description...2", Content: "Content...2"},
	}
	json.NewEncoder(w).Encode(jlist)
}

// GetJob - Function returns 1 job by id
func GetJob(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]
	result := GetJobByName(key)
	json.NewEncoder(w).Encode(result)

}
