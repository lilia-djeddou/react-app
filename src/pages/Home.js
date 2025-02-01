import React, { useState } from 'react';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';
import FeeForm from '../components/FeeForm';
import Dashboard from '../components/Dashboard';

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [fees, setFees] = useState([]);

  const addPlayer = (name) => {
    setPlayers([...players, { name }]);
  };

  const addFee = (amount) => {
    setFees([...fees, amount]);
  };

  const totalFees = fees.reduce((sum, fee) => sum + fee, 0);

  return (
    <div>
      <h1>Gestion du Club de Football</h1>
      <PlayerForm addPlayer={addPlayer} />
      <PlayerList players={players} />
      <FeeForm addFee={addFee} />
      <Dashboard totalFees={totalFees} />
    </div>
  );
};

export default Home;