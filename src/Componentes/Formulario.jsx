import React, { useState } from 'react';
import  { validateForm } from '../validacion/validacion'; 
const FormularioSolicitud = ({ mascotaSeleccionada, onClose }) => {
  const [solicitud, setSolicitud] = useState({
    nombre: '',
    hogar: '',
    contacto: '',
    mascotaId: mascotaSeleccionada.id
  });


  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(solicitud);  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      console.log('Solicitud de adopción:', solicitud);
      alert('Solicitud enviada exitosamente');
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSolicitud((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
  };
  
  
  return (
    <div className="modal-adopcion">
      <form onSubmit={handleSubmit}>
        <h2>Solicitud de Adopción</h2>
        
        <div>
          <label>Nombre Completo</label>
          <input
            type="text"
            name="nombre"
            placeholder= "Ej: Rahma Fellah"
            value={solicitud.nombre}
            onChange={handleChange}
            className={errors.nombre ? 'error' : ''}
          />
          {errors.nombre && <span className="error-message">{errors.nombre}</span>}
        </div>

        <div>
          <label>¿A qué te dedicas?</label>
          <textarea
            name="ocupacion"
            placeholder= "Ej: Estudiante de Ingeniería en Informática y me gusta mucho los animales"
            value={solicitud.ocupacion}
            onChange={handleChange}
            className={errors.ocupacion ? 'error' : ''}
          />
          {errors.ocupacion && <span className="error-message">{errors.ocupacion}</span>}
        </div>

        <div>
          <label>Contacto (Email o Teléfono)</label>
          <input
            type="text"
            name="contacto"
            placeholder= "Ej: Rahma@example.com o +34 123 456 789"
            value={solicitud.contacto}
            onChange={handleChange}
            className={errors.contacto ? 'error' : ''}
          />
          {errors.contacto && <span className="error-message">{errors.contacto}</span>}
        </div>

        <div className="form-actions">
          <button type="submit">Enviar Solicitud</button>
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormularioSolicitud;