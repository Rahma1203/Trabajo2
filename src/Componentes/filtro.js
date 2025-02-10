
// import { Button} from '../style.js';
export const filtrarMascotas = (mascotas, filtros) => {
  return mascotas.filter(mascota => {
    return Object.keys(filtros).every(key => {
      // Si existe un filtro para la propiedad, se compara
      if (filtros[key]) {
        // Convertir todo a minúsculas para hacer la comparación 
        return mascota[key].toLowerCase() === filtros[key].toLowerCase();
      }
      
      return true;
    });
  });
};
