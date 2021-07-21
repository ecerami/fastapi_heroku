from typing import List, Optional

from pydantic import BaseModel


class VentaBase(BaseModel):
    nombre: str
    cantidad: float
    total: float


class Venta(VentaBase):
    id: int
    note_id: int

    class Config:
        orm_mode = True


class NoteBase(BaseModel):
    pk: int
    cliente: str
    total: float
    anticipo: float


class NoteCreate(NoteBase):
    ventas: List[VentaBase]


class Note(NoteBase):
    id: int
    date: str
    ventas: List[Venta] = []

    class Config:
        orm_mode = True
