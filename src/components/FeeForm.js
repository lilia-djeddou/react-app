import React, { useState } from 'react';

const FeeForm = ({ addFee }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;
    addFee(parseFloat(amount));
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant des frais"
      />
      <button type="submit">Ajouter Frais</button>
    </form>
  );
};

export default FeeForm;