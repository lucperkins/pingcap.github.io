NODE_BIN = node_modules/.bin
GULP     = $(NODE_BIN)/gulp

setup:
	npm install

assets: setup
	$(GULP) assets

submodules:
	git submodule update --init --recursive

serve: assets
	hugo server