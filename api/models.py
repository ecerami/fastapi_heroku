from sqlalchemy import Boolean, Column, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base


class Note(Base):
    __tablename__ = "notes"

    id = Column(Integer, primary_key=True, index=True)
    pk = Column(Integer)
    cliente = Column(String)
    total = Column(Float)
    anticipo = Column(Float)
    date = Column(String)

    ventas = relationship("Venta", back_populates="note")


class Venta(Base):
    __tablename__ = "ventas"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String)
    cantidad = Column(Float)
    total = Column(Float)
    note_id = Column(Integer, ForeignKey("notes.id"))

    note = relationship("Note", back_populates="ventas")
