import React from 'react';
import { Package2 } from 'lucide-react';

export default function Orders() {
  // Simulation de commandes pour la démo
  const orders = [
    {
      id: '1',
      date: '2024-03-15',
      status: 'En production',
      price: 17000,
    },
    {
      id: '2',
      date: '2024-03-10',
      status: 'Livré',
      price: 15000,
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Mes commandes</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Package2 className="w-6 h-6 text-blue-600 mr-3" />
                <div>
                  <div className="font-semibold">Commande #{order.id}</div>
                  <div className="text-sm text-gray-500">{order.date}</div>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold">
                  {order.price.toLocaleString()} FCFA
                </div>
                <div className="text-sm text-green-600">{order.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}