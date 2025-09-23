# React + FastAPI + Docker 프로젝트 설정 완료

React 프론트엔드와 FastAPI 백엔드를 Docker Compose로 통합한 풀스택 개발 환경이 구성되었습니다.

## 프로젝트 구조

```
../                    # 프로젝트 루트
├── frontend/          # React + Vite 프론트엔드 (현재 워크스페이스)
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── backend/           # FastAPI 백엔드
│   ├── main.py
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml # Docker Compose 설정
└── start-dev.sh      # 개발 환경 실행 스크립트
```

## 빠른 시작

프로젝트 루트 디렉토리에서 다음 명령어를 실행하세요:

```bash
# 프로젝트 루트로 이동
cd ../

# Docker Compose로 실행
docker-compose up --build

# 또는 개발 스크립트 사용
./start-dev.sh
```

## 서비스 접속

- **프론트엔드**: http://localhost:5173
- **백엔드 API**: http://localhost:8000
- **API 문서**: http://localhost:8000/docs

## 구성된 기능

### 백엔드 (FastAPI)
- CORS 설정으로 프론트엔드와 통신 가능
- 카운터 API 엔드포인트
- 자동 API 문서 생성

### 프론트엔드 (React)
- 백엔드 API와 연동된 카운터
- 환경 변수를 통한 API URL 설정
- 에러 핸들링 및 로딩 상태

### Docker 환경
- 개발 환경에 최적화된 설정
- 볼륨 마운트로 실시간 코드 변경 반영
- 네트워크 설정으로 서비스 간 통신