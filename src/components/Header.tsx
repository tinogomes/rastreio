import React from 'react';
import { Truck } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-900 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center">
        <Truck className="h-6 w-6 mr-2" />
        <h1 className="text-xl font-bold">Rastreador</h1>
      </div>
    </header>
  );
};

export default Header;