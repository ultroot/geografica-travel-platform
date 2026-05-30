from fastapi import APIRouter

from app.schemas.package import PackageResponse
from app.services.package_service import search_packages

router = APIRouter(tags=["Packages"])


@router.get(
    "/packages/",
    response_model=PackageResponse
)
def get_packages():
    return search_packages()