NODE_BIN     = node_modules/.bin
GULP         = $(NODE_BIN)/gulp
CONCURRENTLY = $(NODE_BIN)/concurrently

setup:
	npm install

assets: setup
	$(GULP) assets

develop-assets:
	$(GULP) develop-assets

submodules:
	git submodule update --init --recursive

serve:
	hugo server --buildDrafts --buildFuture

build: assets
	hugo --verbose

develop:
	$(CONCURRENTLY) "make serve" "make develop-assets"
