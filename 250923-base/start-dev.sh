#!/bin/bash
# 개발 환경 실행 스크립트

echo "🚀 Docker Compose로 개발 환경을 시작합니다..."

# Docker Compose로 서비스 시작
docker-compose up --build

echo "✅ 서비스가 종료되었습니다."