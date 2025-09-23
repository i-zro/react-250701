# 프론트엔드 Dockerfile
FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 포트 노출
EXPOSE 5173

# 개발 서버 실행
CMD ["npm", "run", "dev", "--", "--host"]