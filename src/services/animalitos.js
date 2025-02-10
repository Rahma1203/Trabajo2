export const obtenerMascotas = async () => {
    try {
      const response = await fetch('https://huachitos.cl/api/animales');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
        
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error al obtener los datos de las mascotas:', error);
      throw error;
    } }