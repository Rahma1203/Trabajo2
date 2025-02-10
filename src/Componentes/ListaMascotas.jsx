import React, { useState, useEffect } from 'react';
import MascotaCd from './mascotatg';
import FormularioSolicitud from './Formulario';
import { obtenerMascotas } from '../services/animalitos';
import { filtrarMascotas } from './filtro';

const ListaMascotas = () => {
    const [mascotas, setMascotas] = useState([]);
    const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);
    const [filtros, setFiltros] = useState({});

    useEffect(() => {
        const fetchMascotas = async () => {
            try {
                const mascotasData = await obtenerMascotas();
                setMascotas(mascotasData);
            } catch (error) {
                console.error('Error al obtener las mascotas:', error);
            }
        };

        fetchMascotas();
    }, []);

    const handleAdopcion = (mascota) => {
        setMascotaSeleccionada(mascota);
    };

    const handleFiltroCambio = (e) => {
        const { name, value } = e.target;
        setFiltros((prevFiltros) => ({
            ...prevFiltros,
            [name]: value,
        }));
    };

    const mascotasFiltradas = filtrarMascotas(mascotas, filtros);

    return (
        <div className="pet-adoption-container">
            <div className="filtros">
                <select
                    name="tipo"
                    onChange={handleFiltroCambio} 
                    className="p-2 border rounded"
                >
                    <option value="">Selecciona un tipo</option>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Conejo">Conejo</option>
                    
                </select>

                <select
                    name="region" 
                    onChange={handleFiltroCambio} 
                    className="p-2 border rounded"
                >
                    <option value="">Selecciona una región</option>
                    <option value="RM">RM</option>
                    <option value="O'Higgins">O'Higgins</option>
                    <option value="Valparaíso">Valparaíso</option>
                    <option value="Tarapacá">Tarapacá</option>
                    <option value="Atacama">Atacama</option>
                    <option value="Bio-Bio">Bio-Bio</option>
                    <option value="Coquimbo">Coquimbo</option>
                    <option value="La Araucanía">La Araucanía</option>
                    <option value="Maule">Maule</option>
                </select>

                <select
                    name="genero" 
                    onChange={handleFiltroCambio} 
                    className="p-2 border rounded"
                >
                    <option value="">Selecciona el genero</option>
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>
                </select>
                 
            </div>

            <div className="pet-list-container">
                {mascotasFiltradas.length > 0 ? (
                    mascotasFiltradas.map((mascota) => (
                        <MascotaCd
                            key={mascota.id}
                            mascota={mascota}
                            onAdopt={handleAdopcion}
                        />
                    ))
                ) : (
                    <p>No hay mascotas que coincidan con los filtros.</p>
                )}
            </div>

            {mascotaSeleccionada && (
                <FormularioSolicitud
                    mascotaSeleccionada={mascotaSeleccionada}
                    onClose={() => setMascotaSeleccionada(null)}
                />
            )}
        </div>
    );
};

export default ListaMascotas;
