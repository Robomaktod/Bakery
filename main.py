from fastapi import FastAPI
import sqlalchemy
# You are the best

app = FastAPI()


@app.get("/")
def root():
    return {"Hello": "World"}

