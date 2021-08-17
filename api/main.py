from datetime import date
<<<<<<< HEAD
from typing import List
=======
from typing import List, Tuple
>>>>>>> 2d27b56719f080b5fc46b7340bc5ce4e2b767ed3

from fastapi import Body, Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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


@app.get('/')
def main():
    return {"info": "hola soy una api"}


@app.get('/note', response_model=List[schemas.Note])
def get_notes(fecha: str, db: Session = Depends(get_db)):
    notes = crud.get_notes(fecha, db)
    return notes


@app.post('/note', response_model=schemas.Note)
def create_note(note: schemas.NoteCreate, db: Session = Depends(get_db)):
    """create note"""
    new_nota = crud.create_note(db, note)
    return new_nota
