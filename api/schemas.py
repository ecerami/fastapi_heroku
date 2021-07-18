from typing import List, Optional

from pydantic import BaseModel


class VentaBase(BaseModel):
    cantidad: float
    total: float


class VentaCreate(VentaBase):
    product_id: int


class Venta(VentaBase):
    id: int
    note_id: int
    product_id: int

    class Config:
        orm_mode = True


class NoteBase(BaseModel):
    date: str
    total: float
    anticipo: float


class NoteCreate(NoteBase):
    ventas: List[VentaCreate]


class Note(NoteBase):
    id: int
    client_id: int
    ventas: List[Venta] = []

    class Config:
        orm_mode = True


class ClientBase(BaseModel):
    name: str
    phone: Optional[str] = None


class Client(ClientBase):
    id: int
    notes: List[Note] = []

    class Config:
        orm_mode = True


class ProductBase(BaseModel):
    name: str
    price: float


class Product(ProductBase):
    id: int
    Ventas: List[Venta] = []

    class Config:
        orm_mode = True
