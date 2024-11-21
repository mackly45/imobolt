import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">
        Créez votre plaque d'immatriculation personnalisée
      </h1>
      
      <p className="text-xl text-gray-600 mb-12">
        Design unique, matériaux de qualité et livraison rapide partout au Congo
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Personnalisation</h3>
          <p className="text-gray-600">Choisissez vos couleurs et votre style</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Qualité Premium</h3>
          <p className="text-gray-600">Matériaux durables et finition professionnelle</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Livraison Rapide</h3>
          <p className="text-gray-600">Livraison ou retrait en point relais</p>
        </div>
      </div>
      
      <Link 
        to="/customize"
        className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Commencer maintenant
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  );
}