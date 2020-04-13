const getCasesForICUByRequestedTime = (infectionsByRequestedTime) => ({
  impact: Math.trunc(0.05 * infectionsByRequestedTime.impact),
  severeImpact: Math.trunc(0.05 * infectionsByRequestedTime.severeImpact)
});

const getCasesForVentilatorsByRequestedTime = (infectionsByRequestedTime) => ({
  impact: Math.trunc(0.02 * infectionsByRequestedTime.impact),
  severeImpact: Math.trunc(0.02 * infectionsByRequestedTime.severeImpact)
});

const getDollarsInFlight = (
  infectionsByRequestedTime,
  regionalData,
  timeToElapse,
  periodType
) => {
  let time;
  if (periodType === 'weeks') {
    time = timeToElapse * 7;
  } else if (periodType === 'months') {
    time = timeToElapse * 30;
  } else {
    time = timeToElapse;
  }

  const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = regionalData;

  const inflight = (infections) => (
    (infections * avgDailyIncomePopulation * avgDailyIncomeInUSD) / time);

  return {
    impact: Math.trunc(inflight(infectionsByRequestedTime.impact)),
    severeImpact: Math.trunc(inflight(infectionsByRequestedTime.severeImpact))
  };
};

export {
  getCasesForICUByRequestedTime,
  getCasesForVentilatorsByRequestedTime,
  getDollarsInFlight
};
