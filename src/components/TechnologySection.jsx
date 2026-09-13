import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./yourstack";
import { toast } from "react-toastify";

function TechnologySection() {
    const [technologies, setTechnologies] = useState([]);
    const [stack, setStack] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/technologies.json")
            .then((res) => res.json())
            .then((data) => {
                setTechnologies(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to load technologies:", error);
                setLoading(false);
            });
    }, []);

    const handleAddToStack = (technology) => {
        const alreadyAdded = stack.some((item) => item.id === technology.id);

        if (alreadyAdded) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }

        setStack([...stack, technology]);
        toast.success(`${technology.name} added to your stack!`);
    };

    const handleRemoveFromStack = (id) => {
        const removedTechnology = stack.find((item) => item.id === id);

        setStack(stack.filter((item) => item.id !== id));

        if (removedTechnology) {
            toast.info(`${removedTechnology.name} removed from your stack.`);
        }
    };

    const handleRemoveAll = () => {
        if (stack.length === 0) return;

        setStack([]);
        toast.success("All technologies removed from your stack!");
    };



    return (
        <section id="technologies" className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Explore the{" "}
                        <span className="brand-gradient-text">Technologies</span>
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid gap-6 lg:grid-cols-[1fr_270px]">
                    {/* Technology Grid */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                stack={stack}
                                onAdd={handleAddToStack}
                            />
                        ))}
                    </div>

                    {/* Your Stack */}
                    <YourStack
                        stack={stack}
                        onRemove={handleRemoveFromStack}
                        onRemoveAll={handleRemoveAll}
                    />
                </div>
            </div>
        </section>
    );
}

export default TechnologySection;