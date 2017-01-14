#!/bin/sh
VERSION="1.0.0-SNAPSHOT"
MAINTAINERS="Zak Hassan"
COMPONENT="openshift-spark-job-server"


echo "Pulling Down Images"
echo "Maintainers: $MAINTAINERS"
echo " "
echo "Version: $VERSION"
echo " "
echo "Component: $COMPONENT"
echo " "
echo "Building Containers and pushing docker images to docker registry"
echo " "
docker   build  --rm -t  $COMPONENT  .
docker tag  $COMPONENT  docker.io/zmhassan/openshift-spark-job-server
docker push  docker.io/zmhassan/openshift-spark-job-server
