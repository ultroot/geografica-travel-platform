from fastapi import FastAPI

app = FastAPI(
    title="Geografica Travel API",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Geografica Backend Running"
    }