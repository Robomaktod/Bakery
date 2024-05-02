import React from 'react';

import "../../css/About.css"

const AboutPage = () => {
  return (
    <div className="container">
      <h1 className="about-title">Ласкаво просимо до нашої пекарні!</h1>
      <div className="section">
        <h2 className="section-title">Наша місія</h2>
        <p className="section-content">
          Ми прагнемо створювати найкращі випічкові вироби, які не лише насичують ваші смакові рецептори, а й надихають насолоджуватися моментом.
        </p>
      </div>
      <div className="section">
        <h2 className="section-title">Наші цінності</h2>
        <ul className="value-list">
          <li>Свіжість</li>
          <li>Творчість</li>
          <li>Доступність</li>
        </ul>
      </div>
      <div className="section">
        <h2 className="section-title">Наші послуги</h2>
        <p className="section-content">
          Ми пропонуємо широкий вибір випічкових виробів, замовлення на замовлення та доставку прямо до вашого порогу.
        </p>
      </div>
      <div className="section">
        <h2 className="section-title">Зв'яжіться з нами</h2>
        <p className="section-content contact-info">
          Ми завжди відкриті до співпраці та готові відповісти на всі ваші запитання.
        </p>
        <a href="/contact" className="contact-button">Зв'язатися з нами</a>
      </div>
    </div>
  );
}

export default AboutPage;
