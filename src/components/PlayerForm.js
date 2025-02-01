import React, { useState } from 'react';

const PlayerForm = ({ addPlayer }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addPlayer(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom du joueur"
      />
      <button type="submit">Ajouter Joueur</button>
    </form>
  );
};

export default PlayerForm;