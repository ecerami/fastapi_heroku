from app.api.endpoints import note, product
from fastapi import APIRouter

api_router = APIRouter()


@api_router.get('/')
def main():
    return {"info": "hola soy una api"}


api_router.include_router(note.router, tags=["note"])
api_router.include_router(product.router, tags=["product"])
