package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/zmhassan/kube-job-manager/handler/jobapi"
	"github.com/zmhassan/kube-job-manager/helper/banner"
)

func main() {
	r := mux.NewRouter().StrictSlash(true)
	r.HandleFunc("/", jobapi.GetAllJobs)
	r.HandleFunc("/{id}", jobapi.GetJob)

	fmt.Println(banner.GetBanner())
	fmt.Println("Starting Kube Job Manager ...")
	log.Fatal(http.ListenAndServe(":8001", r))

}
