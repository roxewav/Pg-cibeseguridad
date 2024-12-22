import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Datos de ejemplo
const initialData = [
  { year: "2020", ciberacoso: 35, grooming: 15, phishing: 25, sextorsión: 10, cracking: 8 },
  { year: "2021", ciberacoso: 38, grooming: 17, phishing: 28, sextorsión: 12, cracking: 9 },
  { year: "2022", ciberacoso: 42, grooming: 19, phishing: 30, sextorsión: 14, cracking: 10 },
  { year: "2023", ciberacoso: 40, grooming: 18, phishing: 27, sextorsión: 13, cracking: 11 },
];

// Configuración de las categorías
const categories = [
  { key: "ciberacoso", label: "Ciberacoso", color: "#4caf50" },
  { key: "grooming", label: "Grooming", color: "#2196f3" },
  { key: "phishing", label: "Phishing", color: "#ff9800" },
  { key: "sextorsión", label: "Sextorsión", color: "#e91e63" },
  { key: "cracking", label: "Cracking", color: "#9c27b0" },
];

const Grafica = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-anton text-center mb-6">Incidentes de Ciberseguridad en Jóvenes</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={initialData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="year"
            label={{ value: "Año", position: "insideBottomRight", offset: -5 }}
            stroke="#6b7280"
          />
          <YAxis
            label={{ value: "Porcentaje (%)", angle: -90, position: "insideLeft" }}
            stroke="#6b7280"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
            }}
            formatter={(value: number) => `${value}%`}
          />
          <Legend
            wrapperStyle={{ paddingTop: 10 }}
            align="center"
            verticalAlign="bottom"
          />
          {categories.map((cat) => {
            if (!cat) return null; // Validación
            return (
              <Line
                key={cat.key}
                type="monotone"
                dataKey={cat.key}
                stroke={cat.color}
                strokeWidth={3}
                name={cat.label}
                dot={{ r: 4 }}
                activeDot={{ r: 8 }}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Datos obtenidos de fuentes confiables como el INEGI (Instituto Nacional de Estadística y Geografía).
        </p>
      </div>
    </div>
  );
};

export default Grafica;
