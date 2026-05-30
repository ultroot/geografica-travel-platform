from fastapi import APIRouter

from app.schemas.health import HealthResponse
from app.core.settings import APP_VERSION
from app.providers.provider_manager import get_all_flight_providers

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