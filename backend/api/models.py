from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float, Text, Date
from sqlalchemy.orm import relationship
from datetime import datetime

from ..database import Base


class Product(Base):
    __tablename__ = 'product'
   
    product_name = Column(String(100), unique=True, nullable=False)
    price = Column(Float, nullable=False)
    image = Column(Text)
    product_id = Column(Integer, primary_key=True)
    
    

class Ingredient(Base):
    __tablename__ = 'ingredient'
   
    ing_name = Column(String(100), nullable=False)
    price = Column(Float, nullable=False)
    allergic = Column(Boolean)
    ingredient_id = Column(Integer, primary_key=True)
    ing_visible = Column(Boolean)
    
    
class User(Base):
    __tablename__ = 'user'
   
    user_id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    middle_name = Column(String)
    date_of_birth = Column(Date, nullable=False)
    date_of_reg = datetime.now()
    address = Column(Text)
    phone_number = Column(String, nullable=False)
    email = Column(Text, nullable=False, unique=True)
    password = Column(Text, nullable=False)
    