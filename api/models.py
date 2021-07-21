from sqlalchemy import Boolean, Column, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base


class Note(Base):
    __tablename__ = "note"

    id = Column(Integer, primary_key=True, index=True)
    pk = Column(Integer)
    cliente = Column(String)
    total = Column(Float)
    anticipo = Column(Float)
    date = Column(String)

    ventas = relationship("Venta")


class Venta(Base):
    __tablename__ = "venta"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String)
    cantidad = Column(Float)
    total = Column(Float)
    note_id = Column(Integer, ForeignKey("note.id"))
