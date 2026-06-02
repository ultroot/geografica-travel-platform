from pydantic import BaseModel


class FlightResult(BaseModel):
    provider: str
    airline: str
    price: int
    departure_time: str
    arrival_time: str
    duration: str


class FlightResponse(BaseModel):
    success: bool

    from_city: str
    to_city: str
    travel_date: str

    total_providers: int
    cheapest: FlightResult
    results: list[FlightResult]