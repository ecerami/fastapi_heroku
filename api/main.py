from typing import List

from fastapi import Body, Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)
app = FastAPI()
# Dependency
origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
    __import__('ipdb').set_trace()
    return note
