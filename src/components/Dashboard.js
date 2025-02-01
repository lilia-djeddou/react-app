import React from 'react';

const Dashboard = ({ totalFees }) => {
  return (
    <div>
      <h2>Tableau de Bord</h2>
      <p>Total des frais collectés: {totalFees} €</p>
    </div>
  );
};

export default Dashboard;