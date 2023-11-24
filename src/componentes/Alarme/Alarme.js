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
      alert('Alarme!!!');
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
      <p style={{ color: 'white', fontFamily: 'Inika-Bold' }}>Agora: {agora.toLocaleTimeString()}</p>


      <input
      style={{ width:'50vw', height:'5vh', marginLeft: '80px', borderRadius:'10px'}}
        type="time"
        value={horaInput}
        onChange={(e) => setHoraInput(e.target.value)}
      />



      <button style={{ background:'#05445E',color: 'white', fontFamily: 'Inika-Bold', marginTop:'50px' }}onClick={definirAlarme}>Definir Alarme</button>
      {horaAlarme && <p style={{ color: 'white', fontFamily: 'Inika-Bold' }}>Hora do Alarme: {horaAlarme.toLocaleTimeString()}</p>}
    </div>
  );
};

export default Alarme;