from sqlalchemy.orm import Session

from . import models

def get_katalog(db: Session):
    return db.query(models.Product).all()


def get_ingridient(db: Session):
    return db.query(models.Ingredient).where(models.Ingredient.ing_visible==True).all()
