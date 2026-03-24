export const getStatusConfig = (status) => {
    switch(status.toUpperCase()) {
      case 'HARAM': 
      case 'BREAKS FAST': return { color: 'bg-[#ff003c]', text: 'text-[#ff003c]', bg: 'bg-[#ff003c]/10', border: 'border-[#ff003c]' };
      case 'HALAL': 
      case 'DOES NOT BREAK': return { color: 'bg-[#ccff00]', text: 'text-[#ccff00]', bg: 'bg-[#ccff00]/10', border: 'border-[#ccff00]' };
      case 'DISPUTED':
      case 'MAKRUH': return { color: 'bg-[#ff8800]', text: 'text-[#ff8800]', bg: 'bg-[#ff8800]/10', border: 'border-[#ff8800]' };
      default: return { color: 'bg-white', text: 'text-white', bg: 'bg-white/10', border: 'border-white' };
    }
  };
  
  export const getStatusDot = (status) => {
    switch(status.toUpperCase()) {
      case 'HARAM': 
      case 'BREAKS FAST': return '🔴';
      case 'HALAL': 
      case 'DOES NOT BREAK': return '🟢';
      case 'DISPUTED':
      case 'MAKRUH': return '🟡';
      default: return '⚪';
    }
  };
  
  export const getTabDot = (filterName) => {
    if (filterName === 'ALL') return '';
    if (filterName === 'HALAL' || filterName === 'DOES NOT BREAK') return '🟢 ';
    if (filterName.includes('MAKRUH') || filterName.includes('DISPUTED')) return '🟡 ';
    if (filterName === 'HARAM' || filterName === 'BREAKS FAST') return '🔴 ';
    return '';
  };