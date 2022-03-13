from typing import List

from app import schemas
from app.api.deps import get_db
from app.crud import crudProduct
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

router = APIRouter()


@router.get('/product', response_model=List[schemas.Product])
def get_Product(name: str, db: Session = Depends(get_db)):
    products = crudProduct.find_by_name(db=db, name=name)
    if len(products) < 1:
        raise HTTPException(status_code=404, detail="Items not found")
    return products


@router.get('/product', response_model=List[schemas.Product])
def create_product(new_product: schemas.ProductCreate, db: Session = Depends(get_db)):
    products = crudProduct.find_by_name(db=db, obj_in=new_product)
    if len(products) < 1:
        raise HTTPException(status_code=404, detail="Items not found")
    return products
