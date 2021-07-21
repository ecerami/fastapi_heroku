from typing import List

from fastapi import Body, Depends, FastAPI
from pydantic import BaseModel
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)
app = FastAPI()
# Dependency


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/products/{name}", response_model=List[schemas.Product])
def get_products(name: str, db: Session = Depends(get_db)):
    """Get list of products"""
    products = crud.get_products(db, name)

    return products


@app.post('/products', response_model=schemas.Product)
def create_product(product: schemas.ProductBase, db: Session = Depends(get_db)):
    """Create new product"""

    new_product = crud.create_product(db, product)

    return new_product


@app.get("/clients/{name}", response_model=List[schemas.Client])
def get_clients(name: str, db: Session = Depends(get_db)):
    """Get list of clients"""
    clients = crud.get_clients(db, name)

    return clients


@app.post('/clients', response_model=schemas.Client)
def create_client(client: schemas.ClientBase, db: Session = Depends(get_db)):
    """Create new client"""

    new_client = crud.create_client(db, client)

    return new_client


@app.post('/note', response_model=schemas.NoteCreate)
def create_note(note: schemas.NoteCreate, db: Session = Depends(get_db)):
    """create note"""
    return note


@app.get('/note/last')
def create_note(db: Session = Depends(get_db)):
    """get last id note"""
    return 1


# TODO:
# download products
