function YourStack({ stack, onRemove, onRemoveAll }) {
    return (
        <div className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

            {/* Heading */}
            <div className="mb-5">
                <h3 className="text-lg font-bold text-slate-900">
                    Your Stack
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                    {stack.length}{" "}
                    {stack.length === 1 ? "Technology" : "Technologies"} Selected

                </p>
            </div>

            {/* Empty State */}
            {stack.length === 0 ? (
                <div className="rounded-lg border border-dashed border-slate-200 py-8 text-center">
                    <p className="text-sm text-slate-400">
                        No technologies selected yet.
                    </p>

                    <p className="mt-1 text-xs text-slate-300">
                        Add technologies from the list.
                    </p>
                </div>
            ) : (
                <>
                    {/* Selected Technologies */}
                    <div className="space-y-3">
                        {stack.map((technology) => (
                            <div
                                key={technology.id}
                                className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={technology.icon}
                                        alt={technology.name}
                                        className="h-8 w-8 object-contain"
                                    />

                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-800">
                                            {technology.name}
                                        </h4>

                                        <p className="text-xs text-slate-400">
                                            {technology.category}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => onRemove(technology.id)}
                                    className="text-lg text-slate-400 transition hover:text-red-500"
                                    title={`Remove ${technology.name}`}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Remove All */}
                    <button
                        onClick={onRemoveAll}
                        className="mt-5 w-full rounded-md border border-red-200 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
                    >
                        Remove All
                    </button>
                </>
            )}
        </div>
    );
}

export default YourStack;