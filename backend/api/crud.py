from sqlalchemy.orm import Session

from . import models

def get_katalog(db: Session):
    return db.query(models.Product).all()