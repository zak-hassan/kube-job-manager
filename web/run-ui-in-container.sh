#!/bin/sh

echo "RUNNING INSIDE A CONTAINER"
echo " <ctrl-c> to exit"

docker run -it -p 8080:8080 zmhassan/openshift-spark-job-server
