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
