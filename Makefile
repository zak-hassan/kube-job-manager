#GOBIN=$GOPATH/bin

.PHONY: all build clean dev-run

build:
	 ./scripts/build.sh
install:
	./scripts/install.sh
clean:
	./scripts/clean.sh
dev-run:
	./_output/kube-job-manager
