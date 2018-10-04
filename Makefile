install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
brain-even:
	npx babel-node -- src/bin/games/brain-even.js
brain-calc:
	npx babel-node -- src/bin/games/brain-calc.js
publish:
	npm publish
lint:
	npx eslint .
