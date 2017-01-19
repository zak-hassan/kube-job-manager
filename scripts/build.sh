#!/bin/sh
VERSION="1.0.0-SNAPSHOT"
AUTHOR="Zak Hassan <zak.hassan1010@gmail.com>"
COMPONENT="Kube Job Manager Server"
echo "Building kube job manager ..."
echo ""
go build -o ../_output/kube-job-manager ../cmd/kube-job-manager-server.go
echo ""
echo "Status : Complete. Check _output directory"
echo ""
echo "To run execute: ./_output/kube-job-manager"
