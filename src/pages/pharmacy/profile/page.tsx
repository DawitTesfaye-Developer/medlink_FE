// app/pharmacy/page.tsx (or wherever your route is)
"use client";

import React from "react";
import Image from "next/image";
import Container from "@components/ui/Container";
import Button from "@components/ui/Button";

export default function PharmacyProfilePage() {
  const pharmacy = {
    name: "GreenMed Pharmacy",
    image: "/pharmacy.jpg", // Place this in your public folder
    address: "27 Nazra Bldg, meskel-flower",
    phone: "+251-912-345-678",
    email: "support@greenmed.com",
    openHours: "Mon - Sat: 8:00 AM - 8:00 PM",
    services: [
      "Prescription Fulfillment",
      "Over-the-Counter Products",
      "Home Delivery",
      "Vaccinations",
      "Health Consultations",
    ],
  };

  return (
    <section className="py-10">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={pharmacy.image}
            alt={pharmacy.name}
            width={200}
            height={200}
            className="rounded-xl shadow-lg object-cover"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#2B8761]">
              {pharmacy.name}
            </h1>
            <p className="mt-2 text-gray-700">{pharmacy.address}</p>
            <p className="text-gray-600">{pharmacy.phone}</p>
            <p className="text-gray-600">{pharmacy.email}</p>
            <p className="mt-2 text-sm text-gray-500">{pharmacy.openHours}</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-t border-gray-200" />

        {/* Services */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Services
          </h2>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-700 list-disc pl-5">
            {pharmacy.services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <Button className="bg-[#2B8761] text-white hover:bg-green-700 px-6 py-3 rounded-lg shadow-md transition">
            Book a Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
