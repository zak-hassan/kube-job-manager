
#!/bin/sh
VERSION="1.0.0-SNAPSHOT"
AUTHOR="Zak Hassan <zak.hassan1010@gmail.com>"
COMPONENT="Kube Job Manager Server"
echo "building kube job manager ..."
echo ""

export GOBIN=$GOPATH/bin
go install ../cmd/kube-job-manager-server.go
echo ""
echo "Status : Complete. Check $GOPATH/bin directory"
echo ""
echo "To run execute: exec $GOPATH/bin/kube-job-manager-server"
