from sqlalchemy.orm import Session

from . import models, schemas


def get_clients(db: Session, user_id: int):
    __import__('ipdb').set_trace()


def create_client(db: Session, client: schemas.ClientBase):
    db_client = models.Client(name=client.name, phone=client.phone)
    db.add(db_client)
    db.commit()
    db.refresh(db_client)
    return db_client
