from fastapi import APIRouter
from app.services.flight_service import search_flights

router = APIRouter(
    prefix="/flights",
    tags=["Flights"]
)

@router.get("/")
def get_flights():
    return search_flights()