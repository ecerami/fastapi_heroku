from typing import List

from app.models import Product
from app.schemas.product import ProductCreate, ProductUpdate
from sqlalchemy import select
from sqlalchemy.orm import Session

from .base import CRUDBase


class CrudProduct(CRUDBase[Product, ProductCreate, ProductUpdate]):
    def find_by_name(self, db: Session, name: str) -> List[Product]:
        query = select(self.model).where(self.model.nombre.like(f'%{name}%'))
        products = db.execute(query).all()
        result = list(zip(*products))
        return result[0]


crudProduct = CrudProduct(Product)
