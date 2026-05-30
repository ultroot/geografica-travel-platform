from fastapi import APIRouter
from app.services.package_service import search_packages

router = APIRouter(
    prefix="/packages",
    tags=["Packages"]
)

@router.get("/")
def get_packages():
    return search_packages()