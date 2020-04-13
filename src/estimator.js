import {
  getCurrentlyInfected,
  getInfectionsByRequestedTime
} from './Challenge1';
import {
  getSevereCasesByRequestedTime,
  getHospitalBedsByRequestedTime
} from './Challenge2';

import {
  getCasesForICUByRequestedTime,
  getCasesForVentilatorsByRequestedTime,
  getDollarsInFlight
} from './Challenge3';

const covid19ImpactEstimator = (data) => {
  const {
    region,
    periodType,
    timeToElapse,
    reportedCases,
    // population,
    totalHospitalBeds
  } = data;

  const currentlyInfected = getCurrentlyInfected(reportedCases);
  const infectionsByRequestedTime = getInfectionsByRequestedTime(
    currentlyInfected,
    periodType,
    timeToElapse
  );
  const severeCasesByRequestedTime = getSevereCasesByRequestedTime(
    infectionsByRequestedTime
  );
  const hospitalBedsByRequestedTime = getHospitalBedsByRequestedTime(
    severeCasesByRequestedTime,
    totalHospitalBeds
  );
  const casesForICUByRequestedTime = getCasesForICUByRequestedTime(
    infectionsByRequestedTime
  );

  const casesForVentilatorsByRequestedTime = getCasesForVentilatorsByRequestedTime(
    infectionsByRequestedTime
  );

  const dollarsInFlight = getDollarsInFlight(
    infectionsByRequestedTime,
    region,
    timeToElapse,
    periodType
  );

  return {
    data, // the input data
    impact: {
      currentlyInfected: currentlyInfected.impact,
      infectionsByRequestedTime: infectionsByRequestedTime.impact,
      severeCasesByRequestedTime: severeCasesByRequestedTime.impact,
      hospitalBedsByRequestedTime: hospitalBedsByRequestedTime.impact,
      casesForICUByRequestedTime: casesForICUByRequestedTime.impact,
      casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTime.impact,
      dollarsInFlight: dollarsInFlight.impact
    }, // best case estimation
    severeImpact: {
      currentlyInfected: currentlyInfected.severeImpact,
      infectionsByRequestedTime: infectionsByRequestedTime.severeImpact,
      severeCasesByRequestedTime: severeCasesByRequestedTime.severeImpact,
      hospitalBedsByRequestedTime: hospitalBedsByRequestedTime.severeImpact,
      casesForICUByRequestedTime: casesForICUByRequestedTime.severeImpact,
      casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTime.severeImpact,
      dollarsInFlight: dollarsInFlight.severeImpact
    } // severe case estimation
  };
};

export default covid19ImpactEstimator;
