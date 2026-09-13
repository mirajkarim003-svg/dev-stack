function TechnologyCard({ technology, stack, onAdd }) {
    const isAdded = stack.some((item) => item.id === technology.id);

    return (
        <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            {/* Top */}
            <div className="mb-4 flex items-start justify-between">
                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-10 w-10 object-contain"
                />

                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500">
                    {technology.badge}
                </span>
            </div>

            {/* Name */}
            <h3 className="text-lg font-bold text-slate-900">{technology.name}</h3>

            {/* Description */}
            <p className="mt-2 text-sm leading-5 text-slate-500">
                {technology.description}
            </p>

            {/* Info */}
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
                    {technology.category}
                </span>

                <span className="text-slate-500">{technology.difficulty}</span>

                <span className="font-medium text-slate-600">
                    ⭐ {technology.rating}
                </span>
            </div>

            {/* Button */}
            <button
                onClick={() => onAdd(technology)}
                disabled={isAdded}
                className={`mt-4 w-full rounded-md py-2.5 text-sm font-medium transition ${isAdded
                    ? "cursor-not-allowed bg-slate-200 text-slate-500"
                    : "bg-slate-950 text-white hover:bg-slate-800"
                    }`}
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </div>
    );
}

export default TechnologyCard;