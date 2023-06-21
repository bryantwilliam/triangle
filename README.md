## Run these commands:
- cd {folder}
- docker build . -t triangle
- docker run -p 8080:8080 triangle
Navigate to http://localhost:8080/triangle?a=10&b=10&c=3
Or check bad parameters for example: http://localhost:8080/triangle?a=1

### To stop:
- docker ps
Find the containerid
- docker stop {container id}
