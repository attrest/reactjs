# 운영 빌드 및 배포 Shell
cd ../app

## 소스 PULL
git pull

## 도커 빌드(이미지 생성)
docker-compose build

## 도커 실행(이미지 실행)
docker-compose up -d

## 도커 정리(불필요 컨테이너, 볼륨, 이미지 제거)
docker container prune -f
docker volume prune -f
docker image prune -f
