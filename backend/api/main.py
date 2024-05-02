from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy.orm import sessionmaker

from . import crud, models, schemas, utils
from ..database import SessionLocal, engine


models.Base.metadata.create_all(bind=engine)
def get_db():
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:5173",
    "http://localhost:5500",
    "http://127.0.0.1",
    "http://127.0.0.1:8080",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def main():
    return {"message": "Hello world!"}


@app.get("/load-katalog")
async def loadKatalog(db: Session = Depends(get_db)):
    products = crud.get_katalog(db)
    return products

@app.get("/get_ingridient")
async def GetIngridient(db: Session = Depends(get_db)):
    ingridient = crud.get_ingridient(db)
    return ingridient


@app.post("/register")
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    existing_user = crud.check_user_existance(db, user)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    encrypted_password = utils.get_hashed_password(user.password)

    new_user = models.User(
        first_name = user.first_name,
        last_name = user.last_name,
        middle_name = user.middle_name,
        date_of_birth = user.date_of_birth,
        address = user.address,
        phone_number = user.phone_number,
        email = user.email,
        password = encrypted_password
        )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message":"user created successfully"}


@app.get("/get-users")
def get_users(db: Session = Depends(get_db)):
    users = crud.return_users(db)
    return users    

@app.get("/get-user-byid")
def get_user(id: int, db: Session = Depends(get_db)):
    user = crud.return_user(db, id)
    if not user: raise HTTPException(status_code=404, detail="User not found")
    return user
    