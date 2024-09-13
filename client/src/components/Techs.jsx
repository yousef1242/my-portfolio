function Techs({ techsData }) {
    
  return (
    <div className="techs-items flex items-start flex-wrap gap-3">
      {techsData.length > 0 ? (
        techsData.map((tech, index) => (
          <span
            className="bg-openpurple py-1 px-2 text-center rounded-full"
            key={index}
          >
            {tech?.name}
          </span>
        ))
      ) : (
        <p className="text-openpurple">Loading techs...</p>
      )}
    </div>
  );
}

export default Techs;
