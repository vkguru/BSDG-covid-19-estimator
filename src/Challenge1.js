const getCurrentlyInfected = (reportedCases) => ({
  impact: reportedCases * 10,
  severeImpact: reportedCases * 50
});

const getInfectionsByRequestedTime = (
  infected,
  periodType,
  timeToElapse
) => {
  let factor = 0;
  if (periodType === 'days') {
    factor = Math.trunc(timeToElapse / 3);
  } else if (periodType === 'weeks') {
    factor = Math.trunc((timeToElapse * 7) / 3);
  } else {
    factor = Math.trunc((timeToElapse * 30) / 3);
  }

  const impact = infected.impact * (2 ** factor);
  const severeImpact = infected.severeImpact * (2 ** factor);

  return {
    impact,
    severeImpact
  };
};

export { getCurrentlyInfected, getInfectionsByRequestedTime };
