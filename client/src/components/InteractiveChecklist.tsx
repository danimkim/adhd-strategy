import { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  description?: string;
  completed: boolean;
}

interface InteractiveChecklistProps {
  title: string;
  items: ChecklistItem[];
  onItemToggle?: (id: string) => void;
}

export function InteractiveChecklist({ title, items: initialItems, onItemToggle }: InteractiveChecklistProps) {
  const [items, setItems] = useState<ChecklistItem[]>(initialItems);

  const handleToggle = (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
    onItemToggle?.(id);
  };

  const completedCount = items.filter(item => item.completed).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-slate-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-slate-600 whitespace-nowrap">
            {completedCount}/{items.length}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => handleToggle(item.id)}
            className="w-full flex items-start gap-3 p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-left group"
          >
            {item.completed ? (
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            ) : (
              <Circle className="w-6 h-6 text-slate-300 flex-shrink-0 mt-0.5 group-hover:text-blue-400" />
            )}
            <div className="flex-1">
              <p className={`font-semibold ${item.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                {item.label}
              </p>
              {item.description && (
                <p className="text-sm text-slate-600 mt-1">
                  {item.description}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {completedCount === items.length && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-green-700 font-semibold">🎉 All tasks completed! Great progress!</p>
        </div>
      )}
    </div>
  );
}
