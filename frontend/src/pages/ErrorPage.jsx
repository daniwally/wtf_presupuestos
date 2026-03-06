import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/button';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-[#050505] flex items-center justify-center px-6"
      data-testid="error-page"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 mb-8"
        >
          <AlertTriangle size={32} className="text-rose-500" />
        </motion.div>

        {/* Error Code */}
        <h1 
          className="text-7xl md:text-9xl font-heading font-bold text-zinc-800 mb-4"
          data-testid="error-code"
        >
          404
        </h1>

        {/* Title */}
        <h2 
          className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4"
          data-testid="error-title"
        >
          Client Not Found
        </h2>

        {/* Description */}
        <p className="text-zinc-400 font-body text-base mb-8">
          The proposal you're looking for doesn't exist or may have been moved. 
          Please check the URL or contact your account manager.
        </p>

        {/* Available Clients */}
        <div className="glass rounded-xl p-6 mb-8">
          <p className="text-zinc-500 font-body text-xs tracking-widest uppercase mb-4">
            Available Proposals
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['wine', 'honda', 'census'].map((client) => (
              <Button
                key={client}
                variant="outline"
                onClick={() => navigate(`/${client}`)}
                className="px-4 py-2 text-sm font-body capitalize border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500"
                data-testid={`nav-to-${client}`}
              >
                {client}
              </Button>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="text-zinc-400 hover:text-white font-body flex items-center gap-2 mx-auto"
          data-testid="go-back-btn"
        >
          <ArrowLeft size={18} />
          Go Back
        </Button>
      </motion.div>
    </div>
  );
};
