dev:
	docker compose up dev
clean-dev:
	docker compose down dev

test:
	docker compose run --rm test

build:
	docker compose run --rm dev npm run build

prod:
	docker compose up prod
clean-prod:
	docker compose down prod

clean-all:
	docker compose down -v

github-push:
	git add * 
	git push -u origin main

github-pages-commit:
	git add -f app/dist 
	git subtree push --prefix app/dist origin gh-pages
	git commit -m "Updating github page"       
github-pages-deploy:
	git subtree push --prefix app/dist origin gh-pages
