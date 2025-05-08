import React, { useState, useEffect } from 'react';
import { useAuth } from '@context/AuthContext';
import api from '@lib/api';

interface Medicine {
  id: string;
  name: string;
  genericName: string;
  category: string;
  form: string;
  dosage: string;
  price: number;
  availability: 'in_stock' | 'low_stock' | 'out_of_stock';
  prescriptionRequired: boolean;
  alternativesAvailable: boolean;
  manufacturer: string;
  description: string;
  sideEffects: string;
}

export default function SearchMedicinePage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    nameType: 'All', // Generic or Brand or All
    category: '',
    form: '',
    dosage: '',
    priceMin: 0,
    priceMax: 1000,
    availability: '',
    prescriptionRequired: null as boolean | null,
    alternativesAvailable: null as boolean | null,
    manufacturer: '',
  });
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>([]);
  const [showFilters, setShowFilters] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMedicines = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/user/pharmacy/medicine/search', {
        name: searchTerm,
        category: filters.category || undefined,
        form: filters.form || undefined,
        dosage: filters.dosage || undefined,
        price_range: {
          min: filters.priceMin,
          max: filters.priceMax,
        },
        availability: filters.availability || undefined,
        prescription_required: filters.prescriptionRequired ?? undefined,
        manufacturer: filters.manufacturer || undefined,
        next: 0,
      });
      if (response.data.ok) {
        setFilteredMedicines(response.data.data);
      } else {
        setError(response.data.message || 'Failed to fetch medicines');
      }
    } catch (err) {
      setError('Failed to fetch medicines');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, [searchTerm, filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;
    if (type === 'checkbox') {
      setFilters((prev) => ({ ...prev, [name]: checked }));
    } else if (name === 'priceMin' || name === 'priceMax') {
      setFilters((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Medicine</h1>
      <input
        type="text"
        placeholder="Enter medicine name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>
      {showFilters && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <select name="nameType" value={filters.nameType} onChange={handleFilterChange} className="border p-2">
            <option value="All">All</option>
            <option value="Generic">Generic</option>
            <option value="Brand">Brand</option>
          </select>
          <input
            type="text"
            name="category"
            placeholder="Category (e.g., Painkiller)"
            value={filters.category}
            onChange={handleFilterChange}
            className="border p-2"
          />
          <input
            type="text"
            name="form"
            placeholder="Form (e.g., Tablet)"
            value={filters.form}
            onChange={handleFilterChange}
            className="border p-2"
          />
          <input
            type="text"
            name="dosage"
            placeholder="Dosage (e.g., 500mg)"
            value={filters.dosage}
            onChange={handleFilterChange}
            className="border p-2"
          />
          <div>
            <label>Price Range: </label>
            <input
              type="number"
              name="priceMin"
              placeholder="Min"
              value={filters.priceMin}
              onChange={handleFilterChange}
              className="border p-2 w-20 mr-2"
            />
            <input
              type="number"
              name="priceMax"
              placeholder="Max"
              value={filters.priceMax}
              onChange={handleFilterChange}
              className="border p-2 w-20"
            />
          </div>
          <select
            name="availability"
            value={filters.availability}
            onChange={handleFilterChange}
            className="border p-2"
          >
            <option value="">Availability</option>
            <option value="in_stock">In Stock</option>
            <option value="low_stock">Low Stock</option>
            <option value="out_of_stock">Out of Stock</option>
          </select>
          <select
            name="prescriptionRequired"
            value={filters.prescriptionRequired === null ? '' : filters.prescriptionRequired ? 'true' : 'false'}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                prescriptionRequired: e.target.value === '' ? null : e.target.value === 'true',
              }))
            }
            className="border p-2"
          >
            <option value="">Prescription Required</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <select
            name="alternativesAvailable"
            value={filters.alternativesAvailable === null ? '' : filters.alternativesAvailable ? 'true' : 'false'}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                alternativesAvailable: e.target.value === '' ? null : e.target.value === 'true',
              }))
            }
            className="border p-2"
          >
            <option value="">Alternatives Available</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <input
            type="text"
            name="manufacturer"
            placeholder="Manufacturer"
            value={filters.manufacturer}
            onChange={handleFilterChange}
            className="border p-2"
          />
        </div>
      )}
      {loading && <p>Loading medicines...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <div>
        {filteredMedicines.length === 0 && !loading ? (
          <p>No medicines found.</p>
        ) : (
          <ul>
            {filteredMedicines.map((med) => (
              <li key={med.id} className="border p-2 mb-2 rounded">
                <h2 className="font-bold">{med.name} ({med.genericName})</h2>
                <p>{med.description}</p>
                <p>Category: {med.category}</p>
                <p>Form: {med.form}</p>
                <p>Dosage: {med.dosage}</p>
                <p>Price: ${med.price}</p>
                <p>Availability: {med.availability}</p>
                <p>Prescription Required: {med.prescriptionRequired ? 'Yes' : 'No'}</p>
                <p>Alternatives Available: {med.alternativesAvailable ? 'Yes' : 'No'}</p>
                <p>Manufacturer: {med.manufacturer}</p>
                <p>Side Effects: {med.sideEffects}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
