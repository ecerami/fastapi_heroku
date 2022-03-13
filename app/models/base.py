from app.database import Base
from sqlalchemy import Column, Date, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship


class Note(Base):
    __tablename__ = "note"

    id = Column(Integer, primary_key=True, index=True)
    cliente = Column(String)
    total = Column(Float)
    anticipo = Column(Float)
    date = Column(Date)

    ventas = relationship("Venta")


class Venta(Base):
    __tablename__ = "venta"

    id = Column(Integer, primary_key=True, index=True)
    cantidad = Column(Float)
    total = Column(Float)
    note_id = Column(Integer, ForeignKey("note.id"))
    product_id = Column(Integer, ForeignKey("product.id"))


class Compra(Base):
    __tablename__ = "compra"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String)
    cantidad = Column(Float)
    total = Column(Float)
    factura = Column(String)
    product_id = Column(Integer, ForeignKey("product.id"))


class Product(Base):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String)
    categoria = Column(String)
    precio = Column(Float)

    ventas = relationship("Venta")
    compras = relationship("Compra")
