.PHONY : build image push

build:
	npm install; bower install
image:
	./build.container.sh
push:
	./docker.io.push.sh
run-container:
	./run-container.sh
