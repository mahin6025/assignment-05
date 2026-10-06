import React from 'react';

const StackSidebar = ({ stack, onRemove, onClearAll }) => {
    return (
        <aside className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sticky top-20">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                        {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
                    </p>
                </div>

                {stack.length > 0 && (
                    <button
                        onClick={onClearAll}
                        className="text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline transition-colors"
                    >
                        Remove All
                    </button>
                )}
            </div>

            {/* Conditional Rendering: Empty State vs Stack Items */}
            {stack.length === 0 ? (
                <div className="py-12 text-center text-slate-400">
                    <div className="text-4xl mb-2">⚡</div>
                    <p className="text-sm font-medium">Your stack is currently empty.</p>
                    <p className="text-xs mt-1">Click "Add to Stack" on any tech card to select it.</p>
                </div>
            ) : (
                <div className="mt-4 space-y-3 max-h-[500px] overflow-y-auto pr-1">
                    {stack.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/80 hover:bg-slate-100/60 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                                    <span className="text-[11px] text-slate-500">{item.category}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => onRemove(item.id)}
                                className="w-7 h-7 rounded-full text-slate-400 hover:text-rose-600 hover:bg-rose-50 flex items-center justify-center transition-colors"
                                title="Remove Item"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </aside>
    );
};

export default StackSidebar;