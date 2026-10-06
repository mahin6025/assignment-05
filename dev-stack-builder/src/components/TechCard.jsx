import React from 'react';
import { BRAND_GRADIENT } from '../theme';

const TechCard = ({ tech, isAdded, onAdd }) => {
    return (
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between">
            <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 p-2.5 flex items-center justify-center border border-slate-200">
                        <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        {tech.badge}
                    </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900">{tech.name}</h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {tech.description}
                </p>

                {/* Meta info: Category, Difficulty, Rating */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium text-slate-700">
                        {tech.category}
                    </span>

                    <span className="text-slate-500 font-medium">{tech.difficulty}</span>

                    <div className="flex items-center text-amber-500 font-bold gap-1">
                        <span>★</span>
                        <span>{tech.rating}</span>
                    </div>
                </div>
            </div>

            {/* Button */}
            <button
                onClick={() => onAdd(tech)}
                disabled={isAdded}
                className={`w-full mt-6 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all ${isAdded
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
                        : `${BRAND_GRADIENT} text-white hover:opacity-95 shadow-md`
                    }`}
            >
                {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
            </button>
        </div>
    );
};

export default TechCard;