from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float
from sqlalchemy.orm import relationship

from .database import Base


class Product(Base):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True, index=True)
    price = Column(Float)
    image = Column(String, default=True)

    #items = relationship("Item", back_populates="owner")