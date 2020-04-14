const findSevereCasesByRequestedTime = (infections) => ({
  impact: Math.trunc(0.15 * infections.impact),
  severeImpact: Math.trunc(0.15 * infections.severeImpact)
});

const findHospitalBedsByRequestedTime = (
  severeCasesByRequestedTime,
  totalHospitalBeds
) => {
  const availableBeds = 0.35 * totalHospitalBeds;
  return {
    impact: Math.trunc(availableBeds - severeCasesByRequestedTime.impact),
    severeImpact: Math.trunc(availableBeds - severeCasesByRequestedTime.severeImpact)
  };
};

export { findSevereCasesByRequestedTime, findHospitalBedsByRequestedTime };
