import { useEffect } from 'react';
import { X, CheckCircle2, Info, AlertTriangle } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info' | 'warning';
  onClose: () => void;
}

export default function ToastNotification({ message, type = 'success', onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // Auto-dismiss after 4 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 z-55 max-w-sm w-full animate-scale-in is-visible pointer-events-auto">
      <div className="bg-white border border-slate-200 rounded-[18px] p-4 shadow-2xl flex items-center justify-between gap-3 relative overflow-hidden">
        {/* Progress timing bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-100">
          <div className="h-full bg-[#2563EB] animate-shimmer" style={{ width: '100%' }} />
        </div>

        <div className="flex items-center gap-3">
          {type === 'success' && (
            <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5.5 h-5.5 text-emerald-600 animate-pulse" />
            </div>
          )}
          {type === 'info' && (
            <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              <Info className="w-5.5 h-5.5 text-blue-605" />
            </div>
          )}
          {type === 'warning' && (
            <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5.5 h-5.5 text-amber-600" />
            </div>
          )}

          <p className="text-xs font-bold text-slate-900 leading-tight">
            {message}
          </p>
        </div>

        <button 
          onClick={onClose}
          className="p-1 text-slate-400 hover:text-slate-900 transition-colors"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
