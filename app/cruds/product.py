from sqlalchemy import select
from sqlalchemy.orm import Session

from . import models, schemas


def get_Products(db: Session, name: str):
    query = select(models.Product).where(models.Product.like(f'%{name}%'))
    products = db.execute(query).all()
    result = list(zip(*products))
    return result
