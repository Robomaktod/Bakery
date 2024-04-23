from sqlalchemy.orm import Session

from . import models, schemas

def get_katalog(db: Session):
    return db.query(models.Product).all()


def get_ingridient(db: Session):
    return db.query(models.Ingredient).where(models.Ingredient.ing_visible==True).all()

def check_user_existance(db: Session, user: schemas.UserCreate):
    return db.query(models.User).filter_by(email=user.email).first()


def return_users(db: Session):
    return db.query(models.User).all()

def return_user(db: Session, id: int):
    return db.query(models.User).where(models.User.user_id == id).first()