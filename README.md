# Lion's Vision


docker build -t batking74/lions-vision:1.0 .

docker run -p 8000:8000 -d --name lion batking74/lions-vision:1.0

docker push batking74/lions-vision:1.0