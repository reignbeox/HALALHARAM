export const getActivePrayer = (timings) => {
  if (!timings) return null;

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const parseTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const schedule = [
    { name: 'Fajr', time: parseTime(timings.Fajr) },
    { name: 'Dhuhr', time: parseTime(timings.Dhuhr) },
    { name: 'Asr', time: parseTime(timings.Asr) },
    { name: 'Maghrib', time: parseTime(timings.Maghrib) },
    { name: 'Isha', time: parseTime(timings.Isha) },
  ];

  // Find the current active prayer
  let activeIndex = schedule.length - 1; 
  for (let i = 0; i < schedule.length; i++) {
    if (currentMinutes >= schedule[i].time) {
      activeIndex = i;
    }
  }

  // Identify the NEXT prayer
  const nextIndex = (activeIndex + 1) % schedule.length;
  const next = schedule[nextIndex];

  // Calculate countdown
  let diff = next.time - currentMinutes;
  if (diff <= 0) diff += 1440; 

  const h = Math.floor(diff / 60);
  const m = diff % 60;
  
  return { 
    activeName: schedule[activeIndex].name, 
    nextName: next.name, 
    countdown: `${h}H ${m}M` 
  };
};