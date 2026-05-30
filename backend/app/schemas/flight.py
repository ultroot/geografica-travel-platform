from pydantic import BaseModel


class FlightResult(BaseModel):
    provider: str
    price: int


class FlightResponse(BaseModel):
    success: bool
    total_providers: int
    cheapest: FlightResult
    results: list[FlightResult]