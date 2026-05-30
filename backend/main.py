from fastapi import FastAPI
from app.api.health import router as health_router
from app.api.flights import router as flights_router
from app.api.visas import router as visas_router
from app.api.packages import router as packages_router
from app.core.settings import APP_NAME, APP_VERSION

app = FastAPI(
    title=APP_NAME,
    version=APP_VERSION
)

app.include_router(health_router)
app.include_router(flights_router)
app.include_router(visas_router)
app.include_router(packages_router)

@app.get("/")
def home():
    return {
        "message": "Geografica Backend Running"
    }