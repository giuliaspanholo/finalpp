import React, { useState, useEffect } from 'react';

const Alarme = () => {
  const [agora, setAgora] = useState(new Date());
  const [horaAlarme, setHoraAlarme] = useState(null);
  const [horaInput, setHoraInput] = useState('');
  const [alarmeAtivo, setAlarmeAtivo] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAgora(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (horaAlarme && agora >= horaAlarme && !alarmeAtivo) {
      alert('Alarme disparado!');
      setAlarmeAtivo(true); // Desativa o alarme após disparado
    }
  }, [agora, horaAlarme, alarmeAtivo]);

  const definirAlarme = () => {
    const novaHoraAlarme = new Date();
    const [horas, minutos] = horaInput.split(':');
    novaHoraAlarme.setHours(horas, minutos, 0);
    setHoraAlarme(novaHoraAlarme);
    setAlarmeAtivo(false); // Reativa o alarme
  };

  return (
    <div>
      <p>Agora: {agora.toLocaleTimeString()}</p>
      <input
        type="time"
        value={horaInput}
        onChange={(e) => setHoraInput(e.target.value)}
      />
      <button onClick={definirAlarme}>Definir Alarme</button>
      {horaAlarme && <p>Hora do Alarme: {horaAlarme.toLocaleTimeString()}</p>}
    </div>
  );
};

export default Alarme;