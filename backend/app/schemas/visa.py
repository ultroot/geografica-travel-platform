from pydantic import BaseModel


class VisaResponse(BaseModel):
    provider: str
    country: str
    visa_type: str
    processing_days: int