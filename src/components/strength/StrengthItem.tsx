import React from "react";

interface StrengthItemProps {
  data: {
    title: string;
    description: string;
    impact: string[];
  };
}

export const StrengthItem: React.FC<StrengthItemProps> = ({ data }) => {
  return (
    <div className="p-6 bg-[#f8f9fa] shadow-md rounded-lg">
      <h3 className="text-xl font-bold text-[#2591c2] mb-4">{data.title}</h3>
      <p className="text-gray-700 mb-4">{data.description}</p>
      <ul className="list-disc pl-5 space-y-2">
        {data.impact.map((point, index) => (
          <li key={index} className="text-gray-600">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};
