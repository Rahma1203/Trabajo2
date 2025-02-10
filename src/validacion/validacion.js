

export const validateForm = (solicitud) => {
    const newErrors = {};
  
    if (!solicitud.nombre || !solicitud.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (solicitud.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
    }
  
    if (!solicitud.ocupacion || !solicitud.ocupacion.trim()) {
      newErrors.ocupacion = 'La ocupación es requerida';
    } else if (solicitud.ocupacion.trim().length < 10) {
      newErrors.ocupacion = 'Por favor proporciona más detalles sobre tu ocupación';
    }
  
    if (!solicitud.contacto || !solicitud.contacto.trim()) {
      newErrors.contacto = 'El contacto es requerido';
    } else if (!validateContact(solicitud.contacto)) {
      newErrors.contacto = 'Ingresa un email o teléfono válido';
    }
  
    return newErrors;
  };
  
  
  export const validateContact = (contact) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return emailRegex.test(contact) || phoneRegex.test(contact);
  };
  