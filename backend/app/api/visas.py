from fastapi import APIRouter

from app.schemas.visa import VisaResponse
from app.services.visa_service import search_visas

router = APIRouter(tags=["Visas"])


@router.get(
    "/visas/",
    response_model=VisaResponse
)
def get_visas():
    return search_visas()