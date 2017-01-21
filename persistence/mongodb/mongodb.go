package mongodb

import (
	"fmt"
	"log"
	"os"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"

	"github.com/zmhassan/kube-job-manager/handler/jobapi"
)

// SaveJobs - Persistant class that will persist job metadata
func SaveJobs(job jobapi.Jobmetadata) boolean {
	session, err := mgo.Dial(os.Getenv("MONGODB_URL"))
	if err != nil {
		panic(err)
	}
	defer session.Close()
	session.SetMode(mgo.Monotonic, true)
	c := session.DB("jobmanager").C("jobs")
	c.Insert(&job)
	return true
}

// Get job by id
func GetJobByName(name string) {
	session, err := mgo.Dial(os.Getenv("MONGODB_URL"))
	if err != nil {
		panic(err)
	}
	defer session.Close()
	session.SetMode(mgo.Monotonic, true)
	c := session.DB("jobmanager").C("jobs")
	result := jobapi.Jobmetadata{}
	err = c.Find(bson.M{"name": "accounting-mllib"}).One(&result)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Description: ", result.Desc)
}
