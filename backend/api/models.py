from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float, Text
from sqlalchemy.orm import relationship

from .database import Base


class Product(Base):
    __tablename__ = 'product'

    product_id = Column(Integer, primary_key=True)
    product_name = Column(String(100), unique=True, nullable=False)
    price = Column(Float, nullable=False)
    quantity = Column(Float, nullable=False)
    weight = Column(Float, nullable=False)
    description = Column(Text)
    category = Column(String(50))
    image = Column(Text)