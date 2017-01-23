package jobapi

import (
	"fmt"
	"log"
	"os"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

// SaveJobs - Persistant class that will persist job metadata
func SaveJobs(job Jobmetadata) {
	session, err := mgo.Dial(os.Getenv("MONGODB_URL"))
	if err != nil {
		panic(err)
	}
	defer session.Close()
	session.SetMode(mgo.Monotonic, true)
	c := session.DB("jobmanager").C("jobs")
	c.Insert(&job)
}

// Get job by id
func GetJobByName(name string) Jobmetadata {
	session, err := mgo.Dial(os.Getenv("MONGODB_URL"))
	if err != nil {
		panic(err)
	}
	defer session.Close()
	session.SetMode(mgo.Monotonic, true)
	c := session.DB("jobmanager").C("jobs")
	result := Jobmetadata{}
	err = c.Find(bson.M{"name": name}).One(&result)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Description: ", result.Desc)
	return result

}
