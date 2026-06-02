from fastapi import APIRouter

from app.schemas.flight import FlightResponse
from app.services.flight_service import search_flights

router = APIRouter(tags=["Flights"])


@router.get(
    "/flights/",
    response_model=FlightResponse
)
def get_flights(
    from_city: str = "",
    to_city: str = "",
    travel_date: str = ""
):
    return search_flights(
        from_city,
        to_city,
        travel_date
    )