import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Bienvenido al Hotel Lunita Encantada</h1>
      <Link to="/booking">Reservar Habitación</Link>
    </div>
  );
}

export default HomePage;
