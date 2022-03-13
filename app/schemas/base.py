from datetime import date
from typing import List

from pydantic import BaseModel


class VentaBase(BaseModel):
    cantidad: float
    total: float


class Venta(VentaBase):
    id: int
    note_id: int
    product_id: int

    class Config:
        orm_mode = True


class CompraBase(BaseModel):
    cantidad: float
    total: float
    factura: str


class Compra(VentaBase):
    id: int
    product_id: int

    class Config:
        orm_mode = True


class NoteBase(BaseModel):
    cliente: str
    total: float
    anticipo: float
    date: date


class NoteCreate(NoteBase):
    ventas: List[VentaBase]


class Note(NoteBase):
    id: int
    ventas: List[Venta] = []

    class Config:
        orm_mode = True
