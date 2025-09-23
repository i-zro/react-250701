from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

app = FastAPI(title="React Backend API", version="1.0.0")

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # React 개발 서버 주소
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 카운터 상태를 저장할 임시 변수 (실제로는 데이터베이스 사용)
counter_state = {"count": 0}

class CountResponse(BaseModel):
    count: int

class CountUpdate(BaseModel):
    count: int

@app.get("/")
async def root():
    return {"message": "FastAPI Backend is running!"}

@app.get("/api/count", response_model=CountResponse)
async def get_count():
    return CountResponse(count=counter_state["count"])

@app.post("/api/count", response_model=CountResponse)
async def update_count(count_update: CountUpdate):
    counter_state["count"] = count_update.count
    return CountResponse(count=counter_state["count"])

@app.post("/api/count/increment", response_model=CountResponse)
async def increment_count():
    counter_state["count"] += 1
    return CountResponse(count=counter_state["count"])

@app.post("/api/count/reset", response_model=CountResponse)
async def reset_count():
    counter_state["count"] = 0
    return CountResponse(count=counter_state["count"])

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)