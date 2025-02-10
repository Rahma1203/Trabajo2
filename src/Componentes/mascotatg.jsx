// Informacion indicual de la mascota
import React from 'react';
import { Button}  from './Button';

const MascotaCd = ({ mascota, onAdopt }) => {
  return (
    <div className="pet-card">
      <img src={mascota.imagen} alt={mascota.nombre} className="pet-image" />
      <h3>{mascota.nombre} ({mascota.tipo})</h3>
      <p><strong>Edad:</strong> {mascota.edad}</p>
      <p><strong>Estado:</strong> {mascota.estado}</p>
      <p><strong>Género:</strong> {mascota.genero}</p>
      <p dangerouslySetInnerHTML={{ __html: mascota.desc_fisica }}></p>
      <p dangerouslySetInnerHTML={{ __html: mascota.desc_personalidad }}></p>
      <p><strong>Región:</strong> {mascota.region}, {mascota.comuna}</p>
      <div className="pet-actions">
        <Button onClick={() => onAdopt(mascota)}>Adoptar</Button>
      </div>
    </div>
  );
};

export default MascotaCd;