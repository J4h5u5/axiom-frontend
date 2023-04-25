DOCKER_IMAGE ?= axiom-frontend
CURRENT_BRANCH ?= $(shell git symbolic-ref --short -q HEAD)

.PHONY: build
build:
	echo "Building ${DOCKER_IMAGE}:${CURRENT_BRANCH}"
	docker build -t ${DOCKER_IMAGE}:${CURRENT_BRANCH} .
