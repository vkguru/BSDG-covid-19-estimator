const getSevereCasesByRequestedTime = (infections) => ({
  impact: Math.trunc(0.15 * infections.impact),
  severeImpact: Math.trunc(0.15 * infections.severeImpact)
});

const getHospitalBedsByRequestedTime = (
  severeCasesByRequestedTime,
  totalHospitalBeds
) => {
  const usableBeds = 0.35 * totalHospitalBeds;
  return {
    impact: Math.trunc(usableBeds - severeCasesByRequestedTime.impact),
    severeImpact: Math.trunc(usableBeds - severeCasesByRequestedTime.severeImpact)
  };
};

export { getSevereCasesByRequestedTime, getHospitalBedsByRequestedTime };
