from typing import List

from app import schemas
from app.api.deps import get_db
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

router = APIRouter()


@router.get('/product', response_model=List[schemas.Product])
def get_Product(name: str, db: Session = Depends(get_db)):
    __import__('ipdb').set_trace()
    # notes = crud.get_notes(fecha, db)
    # if len(notes) < 1:
    #     raise HTTPException(status_code=404, detail="Items not found")
    # return notes[0]
