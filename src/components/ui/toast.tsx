import { toast as hotToast, Toaster as HotToaster } from 'react-hot-toast';
import { AlertCircle, CheckCircle2, XCircle, Info } from 'lucide-react';

export const Toaster = () => {
  return (
    <HotToaster
      position="bottom-right"
      toastOptions={{
        duration: 4000,
        className: `
          !bg-background !border !shadow-lg !rounded-lg !p-4 !min-w-[320px]
          dark:!bg-[#1a1b1e] !border-[#eaeaea] dark:!border-[#333]
          !font-['Inter'] !text-sm
        `,
        success: {
          icon: <CheckCircle2 className="w-5 h-5 text-[#0070f3]" />,
          className: '!border-[#0070f3]/10 dark:!border-[#0070f3]/20',
        },
        error: {
          icon: <XCircle className="w-5 h-5 text-[#f31260]" />,
          className: '!border-[#f31260]/10 dark:!border-[#f31260]/20',
        },
        loading: {
          icon: <div className="animate-spin rounded-full h-5 w-5 border-[2px] border-[#0070f3] border-t-transparent" />,
          className: '!border-[#0070f3]/10 dark:!border-[#0070f3]/20',
        },
      }}
    />
  );
};

interface ToastOptions {
  duration?: number;
}

export const toast = {
  success: (message: string, options?: ToastOptions) => {
    return hotToast.success(message, {
      ...options,
      style: {
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '0.875rem',
        fontWeight: 500,
      },
    });
  },
  error: (message: string, options?: ToastOptions) => {
    return hotToast.error(message, {
      ...options,
      style: {
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '0.875rem',
        fontWeight: 500,
      },
    });
  },
  loading: (message: string, options?: ToastOptions) => {
    return hotToast.loading(message, {
      ...options,
      style: {
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '0.875rem',
        fontWeight: 500,
      },
    });
  },
  info: (message: string, options?: ToastOptions) => {
    return hotToast.custom(
      (t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} flex items-center gap-3`}>
          <Info className="w-5 h-5 text-[#0070f3]" />
          <p className="text-sm font-medium">{message}</p>
        </div>
      ),
      {
        ...options,
        style: {
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '0.875rem',
          fontWeight: 500,
        },
      }
    );
  },
  dismiss: hotToast.dismiss,
};