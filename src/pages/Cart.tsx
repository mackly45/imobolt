import React, { useState } from 'react';
import { usePlateStore } from '../store/plateStore';
import PlatePreview from '../components/PlatePreview';

export default function Cart() {
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('mtn');
  const { price } = usePlateStore();

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Intégration du paiement à implémenter
    alert('Paiement simulé - Commande validée !');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Votre panier</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <PlatePreview />
          <div className="mt-4 text-xl font-semibold text-center">
            Prix: {price.toLocaleString()} FCFA
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleCheckout} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Mode de livraison</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="delivery"
                    checked={deliveryMethod === 'delivery'}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    className="mr-2"
                  />
                  Livraison à domicile (+2000 FCFA)
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="pickup"
                    checked={deliveryMethod === 'pickup'}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    className="mr-2"
                  />
                  Retrait en point relais
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Mode de paiement</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="mtn"
                    checked={paymentMethod === 'mtn'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  MTN Money
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="airtel"
                    checked={paymentMethod === 'airtel'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  Airtel Money
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
            >
              Payer maintenant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}