import styled from 'styled-components';


// Estilos para el contenedor del botón
export const PetActions = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding: 10px;
    background: #f8f9fa; /* Un fondo sutil */
    border-radius: 8px; /* Bordes redondeados */
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); /* Sombra ligera */ 
`;

// Estilos del botón de adopción
export const Button = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: #4CAF50;
  color: white;

  &:hover {
    background-color: #45a049;
  }
`;

