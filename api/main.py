from typing import List

from fastapi import Depends, FastAPI
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


@app.get("/products/{name}")
def get_products(name: str, db: Session = Depends(get_db)):
    """Get list of products"""
    products = crud.get_user(db, 1)

    return {'status': name}
