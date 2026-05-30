from fastapi import APIRouter
from app.services.visa_service import search_visas

router = APIRouter(
    prefix="/visas",
    tags=["Visas"]
)

@router.get("/")
def get_visas():
    return search_visas()