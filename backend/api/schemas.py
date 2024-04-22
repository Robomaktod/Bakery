from pydantic import BaseModel
from datetime import date

class UserCreate(BaseModel) :
    first_name : str
    last_name : str
    middle_name : str
    date_of_birth : date
    address : str
    phone_number : str
    email : str
    password : str