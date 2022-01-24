from datetime import date
from typing import List

from fastapi import Body, Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

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
    if len(notes) < 1:
        raise HTTPException(status_code=404, detail="Items not found")
    return notes[0]


@app.post('/note', response_model=schemas.Note)
def create_note(note: schemas.NoteCreate, db: Session = Depends(get_db)):
    """create note

        actualizar que reciba el id del producto
    """
    __import__('ipdb').set_trace()
    new_nota = crud.create_note(db, note)
    return new_nota


@app.get('/product', response_model=List[schemas.Product])
def get_Product(name: str, db: Session = Depends(get_db)):
    __import__('ipdb').set_trace()
    # notes = crud.get_notes(fecha, db)
    # if len(notes) < 1:
    #     raise HTTPException(status_code=404, detail="Items not found")
    # return notes[0]
