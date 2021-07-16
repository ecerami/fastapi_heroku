from sqlalchemy import Boolean, Column, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base


class Client(Base):
    __tablename__ = "clients"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    phone = Column(String, index=True)

    notes = relationship("Note", back_populates="client")


class Note(Base):
    __tablename__ = "notes"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(String, unique=True, index=True)
    total = Column(Float)
    anticipo = Column(Float)
    client_id = Column(Integer, ForeignKey("clients.id"))

    client = relationship("Client", back_populates="notes")
    ventas = relationship("Venta", back_populates="note")


class Venta(Base):
    __tablename__ = "ventas"

    id = Column(Integer, primary_key=True, index=True)
    cantidad = Column(Float)
    total = Column(Float)
    note_id = Column(Integer, ForeignKey("notes.id"))
    product_id = Column(Integer, ForeignKey("products.id"))

    note = relationship("Note", back_populates="ventas")
    product = relationship("Product", back_populates="ventas")


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    price = Column(Float)

    ventas = relationship("Venta", back_populates="product")
