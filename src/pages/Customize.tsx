import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlateStore } from '../store/plateStore';
import PlatePreview from '../components/PlatePreview';

export default function Customize() {
  const navigate = useNavigate();
  const { 
    text, 
    backgroundColor,
    textColor,
    material,
    size,
    updateText,
    updateBackgroundColor,
    updateTextColor,
    updateMaterial,
    updateSize
  } = usePlateStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/cart');
  };

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Personnalisez votre plaque</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Texte de la plaque
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => updateText(e.target.value)}
              className="w-full p-2 border rounded-md"
              maxLength={8}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Couleur de fond
            </label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => updateBackgroundColor(e.target.value)}
              className="w-full h-10"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Couleur du texte
            </label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => updateTextColor(e.target.value)}
              className="w-full h-10"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Matériau
            </label>
            <select
              value={material}
              onChange={(e) => updateMaterial(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="aluminum">Aluminium</option>
              <option value="plastic">Plastique</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Taille
            </label>
            <select
              value={size}
              onChange={(e) => updateSize(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="standard">Standard</option>
              <option value="small">Petite</option>
              <option value="large">Grande</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Ajouter au panier
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Aperçu en temps réel</h2>
        <PlatePreview />
      </div>
    </div>
  );
}