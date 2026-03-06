import { useParams, Navigate } from 'react-router-dom';
import { ProposalHeader } from '../components/ProposalHeader';
import { HeroSection } from '../components/HeroSection';
import { PricingTable } from '../components/PricingTable';
import { Timeline } from '../components/Timeline';
import { ContactSection } from '../components/ContactSection';
import proposalsData from '../data/proposals.json';

export const ProposalPage = () => {
  const { clientId } = useParams();
  
  // Get client data from JSON
  const proposal = proposalsData[clientId];
  
  // If client not found, redirect to error page
  if (!proposal) {
    return <Navigate to="/404" replace />;
  }

  const { 
    clientName, 
    industry, 
    accentColor, 
    heroImage, 
    hero, 
    pricing, 
    timeline, 
    contact 
  } = proposal;

  return (
    <div 
      className="min-h-screen bg-[#050505]"
      data-testid="proposal-page"
      data-client={clientId}
    >
      <ProposalHeader 
        clientName={clientName} 
        accentColor={accentColor} 
      />
      
      <main>
        <HeroSection 
          clientName={clientName}
          industry={industry}
          hero={hero}
          heroImage={heroImage}
          accentColor={accentColor}
        />
        
        <PricingTable 
          pricing={pricing}
          accentColor={accentColor}
        />
        
        <Timeline 
          timeline={timeline}
          accentColor={accentColor}
        />
        
        <ContactSection 
          contact={contact}
          accentColor={accentColor}
          clientName={clientName}
        />
      </main>
    </div>
  );
};
