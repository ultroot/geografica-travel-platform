from pydantic import BaseModel


class PackageResponse(BaseModel):
    provider: str
    destination: str
    days: int
    price: int