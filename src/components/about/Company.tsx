import Reveal from "../util/Reveal";

export const Company = () => {
  return (
    <div className="relative">
      <Reveal>
        <div className="mb-12">
          <h4 className="text-[#2591c2] text-2xl font-bold mb-4">Notre Entreprise</h4>
          <img
            src="/company.jpg"
            alt="Photo de l'entreprise 1"
            className="w-full h-[300px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </Reveal>
    </div>
  );
};
