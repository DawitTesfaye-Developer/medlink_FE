"use client";

import React, { useState } from "react";

type OperatingHour = {
  day: string;
  from: string;
  to: string;
};

export default function PharmacyProfilePage() {
  const [formData, setFormData] = useState<{
    pharmacyName: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    phoneNumber: string;
    email: string;
    operatingHours: OperatingHour[];
    isOpen247: boolean;
    licenseNumber: string;
    websiteUrl: string;
    contactPersonName: string;
    pharmacyLogo: File | null;
    shortDescription: string;
  }>({
    pharmacyName: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
    phoneNumber: "",
    email: "",
    operatingHours: [],
    isOpen247: false,
    licenseNumber: "",
    websiteUrl: "",
    contactPersonName: "",
    pharmacyLogo: null,
    shortDescription: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.pharmacyName.trim()) {
      newErrors.pharmacyName = "Pharmacy name is required";
    }
    if (!formData.address.street.trim()) {
      newErrors.street = "Street is required";
    }
    if (!formData.address.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.address.state.trim()) {
      newErrors.state = "State is required";
    }
    if (!formData.address.zipCode.match(/^\d{5}(-\d{4})?$/)) {
      newErrors.zipCode = "ZIP code must be valid";
    }
    if (!formData.phoneNumber.match(/^\d{10}$/)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.licenseNumber.trim()) {
      newErrors.licenseNumber = "License number is required";
    }
    if (!formData.operatingHours.length && !formData.isOpen247) {
      newErrors.operatingHours = "Operating hours or 24/7 toggle is required";
    }
    if (formData.shortDescription.length > 200) {
      newErrors.shortDescription = "Short description must be 200 characters or less";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;

    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [key]: value,
        },
      }));
    } else if (name === "pharmacyLogo") {
      if (files && files[0]) {
        if (files[0].size > 2 * 1024 * 1024) {
          setErrors((prev) => ({
            ...prev,
            pharmacyLogo: "Pharmacy logo must be less than 2 MB",
          }));
        } else {
          setErrors((prev) => {
            const newErr = { ...prev };
            delete newErr.pharmacyLogo;
            return newErr;
          });
          setFormData((prev) => ({
            ...prev,
            pharmacyLogo: files[0],
          }));
        }
      }
    } else if (name === "isOpen247") {
      setFormData((prev) => ({
        ...prev,
        isOpen247: checked,
        operatingHours: checked ? [] : prev.operatingHours,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const addOperatingHour = () => {
    setFormData((prev) => ({
      ...prev,
      operatingHours: [...prev.operatingHours, { day: "", from: "", to: "" }],
    }));
  };

  const updateOperatingHour = (index: number, field: keyof OperatingHour, value: string) => {
    const newHours = [...formData.operatingHours];
    newHours[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      operatingHours: newHours,
    }));
  };

  const removeOperatingHour = (index: number) => {
    const newHours = [...formData.operatingHours];
    newHours.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      operatingHours: newHours,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // TODO: Implement geolocation API validation for address here

      // Save logic here (e.g., API call)
      setSuccessMessage("Business info updated");
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Pharmacy Business Profile</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="pharmacyName">
            Pharmacy Name *
          </label>
          <input
            type="text"
            id="pharmacyName"
            name="pharmacyName"
            value={formData.pharmacyName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.pharmacyName && (
            <p className="text-red-600 text-sm">{errors.pharmacyName}</p>
          )}
        </div>

        <fieldset className="mb-4 border p-4 rounded">
          <legend className="font-semibold mb-2">Address *</legend>
          <div className="mb-2">
            <label className="block mb-1" htmlFor="address.street">
              Street
            </label>
            <input
              type="text"
              id="address.street"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.street && (
              <p className="text-red-600 text-sm">{errors.street}</p>
            )}
          </div>
          <div className="mb-2">
            <label className="block mb-1" htmlFor="address.city">
              City
            </label>
            <input
              type="text"
              id="address.city"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
          </div>
          <div className="mb-2">
            <label className="block mb-1" htmlFor="address.state">
              State
            </label>
            <input
              type="text"
              id="address.state"
              name="address.state"
              value={formData.address.state}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.state && (
              <p className="text-red-600 text-sm">{errors.state}</p>
            )}
          </div>
          <div className="mb-2">
            <label className="block mb-1" htmlFor="address.zipCode">
              ZIP Code
            </label>
            <input
              type="text"
              id="address.zipCode"
              name="address.zipCode"
              value={formData.address.zipCode}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="e.g. 12345 or 12345-6789"
            />
            {errors.zipCode && (
              <p className="text-red-600 text-sm">{errors.zipCode}</p>
            )}
          </div>
        </fieldset>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="phoneNumber">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="10 digits"
          />
          {errors.phoneNumber && (
            <p className="text-red-600 text-sm">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="email">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>

        <fieldset className="mb-4 border p-4 rounded">
          <legend className="font-semibold mb-2">Operating Hours *</legend>
          <div className="mb-2 flex items-center gap-2">
            <label>
              <input
                type="checkbox"
                name="isOpen247"
                checked={formData.isOpen247}
                onChange={handleChange}
              />
              Open 24/7
            </label>
          </div>
          {!formData.isOpen247 && (
            <>
              {formData.operatingHours.map((slot, idx) => (
                <div
                  key={idx}
                  className="mb-2 flex items-center gap-2 border p-2 rounded"
                >
                  <input
                    type="text"
                    placeholder="Day(s) e.g. Mon-Fri"
                    value={slot.day}
                    onChange={(e) =>
                      updateOperatingHour(idx, "day", e.target.value)
                    }
                    className="border border-gray-300 rounded px-2 py-1 w-24"
                  />
                  <input
                    type="time"
                    value={slot.from}
                    onChange={(e) =>
                      updateOperatingHour(idx, "from", e.target.value)
                    }
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                  <input
                    type="time"
                    value={slot.to}
                    onChange={(e) =>
                      updateOperatingHour(idx, "to", e.target.value)
                    }
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                  <button
                    type="button"
                    onClick={() => removeOperatingHour(idx)}
                    className="text-red-600 font-semibold px-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addOperatingHour}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Add Time Slot
              </button>
            </>
          )}
          {errors.operatingHours && (
            <p className="text-red-600 text-sm">{errors.operatingHours}</p>
          )}
        </fieldset>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="licenseNumber">
            License Number *
          </label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.licenseNumber && (
            <p className="text-red-600 text-sm">{errors.licenseNumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="websiteUrl">
            Website URL (optional)
          </label>
          <input
            type="url"
            id="websiteUrl"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="contactPersonName">
            Contact Person Name (optional)
          </label>
          <input
            type="text"
            id="contactPersonName"
            name="contactPersonName"
            value={formData.contactPersonName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-1" htmlFor="pharmacyLogo">
            Pharmacy Logo (optional, max 2 MB)
          </label>
          <input
            type="file"
            id="pharmacyLogo"
            name="pharmacyLogo"
            accept="image/*"
            onChange={handleChange}
          />
          {errors.pharmacyLogo && (
            <p className="text-red-600 text-sm">{errors.pharmacyLogo}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="shortDescription">
            Short Description (optional, max 200 characters)
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            maxLength={200}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
          />
          {errors.shortDescription && (
            <p className="text-red-600 text-sm">{errors.shortDescription}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Save Business Info
        </button>
      </form>
      {successMessage && (
        <p className="mt-4 text-green-600 font-semibold">{successMessage}</p>
      )}
    </div>
  );
}
