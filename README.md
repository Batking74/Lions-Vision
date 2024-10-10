# Lion's Vision


docker build -t batking74/lions-vision:1.1 .

docker run -p 8000:8000 -d --name lion batking74/lions-vision:1.1

docker push batking74/lions-vision:1.1

remove pydantic==2.9.2 and just leave pydantic