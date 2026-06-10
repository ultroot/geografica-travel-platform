from fastapi import APIRouter

from app.schemas.health import HealthResponse
from app.core.settings import APP_VERSION
from app.providers.provider_manager import get_all_flight_providers
from app.database.connection import (
    test_connection,
    save_flight_search
)

router = APIRouter()


@router.get(
    "/health",
 
    response_model=HealthResponse
)
def health_check():

    providers = get_all_flight_providers()

    return {
        "status": "healthy",
        "service": "geografica-backend",
        "version": APP_VERSION,
        "active_providers": len(providers)
    }



@router.get("/health/db")
def database_health_check():
    return test_connection()

@router.get("/health/db/insert")
def database_insert_test():
    return save_flight_search(
        origin="HYD",
        destination="DXB",
        departure_date="2026-07-01"
    )