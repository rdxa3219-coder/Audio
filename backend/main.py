from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os

app = FastAPI(
    title="Audio Studio PRO API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
async def home():
    return {
        "message": "Audio Studio PRO API is running",
        "status": "success"
    }

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.post("/upload-audio")
async def upload_audio(file: UploadFile = File(...)):
    allowed = [".mp3", ".wav", ".m4a", ".ogg"]

    ext = os.path.splitext(file.filename)[1].lower()

    if ext not in allowed:
        return JSONResponse(
            status_code=400,
            content={"error": "Unsupported audio format"}
        )

    return {
        "filename": file.filename,
        "message": "Audio uploaded successfully"
    }
