from fastapi import APIRouter

from app.schemas.flight import FlightResponse
from app.services.flight_service import search_flights

router = APIRouter(tags=["Flights"])


@router.get(
    "/flights/",
    response_model=FlightResponse
)
def get_flights():
    return search_flights()