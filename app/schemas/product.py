from typing import List

from pydantic import BaseModel

from .base import Compra, Venta


class ProductBase(BaseModel):
    nombre: str
    categoria: str
    precio: float


class Product(ProductBase):
    id: int
    ventas: List[Venta] = []
    compras: List[Compra] = []

    class Config:
        orm_mode = True


class ProductCreate(ProductBase):
    pass


class ProductUpdate(ProductBase):
    pass
