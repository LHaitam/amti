import Reveal from "../util/Reveal";

export const Company = () => {
  return (
    <div className="relative">
      <Reveal>
        <div className="mb-12">
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
