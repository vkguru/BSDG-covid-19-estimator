import {
  findCurrentlyInfected,
  findInfectionsByRequestedTime
} from './Challenge1';
import {
  findSevereCasesByRequestedTime,
  findHospitalBedsByRequestedTime
} from './Challenge2';

import {
  findCasesForICUByRequestedTime,
  findCasesForVentilatorsByRequestedTime,
  findDollarsInFlight
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

  const currentlyInfected = findCurrentlyInfected(reportedCases);
  const infectionsByRequestedTime = findInfectionsByRequestedTime(
    currentlyInfected,
    periodType,
    timeToElapse
  );
  const severeCasesByRequestedTime = findSevereCasesByRequestedTime(
    infectionsByRequestedTime
  );
  const hospitalBedsByRequestedTime = findHospitalBedsByRequestedTime(
    severeCasesByRequestedTime,
    totalHospitalBeds
  );
  const casesForICUByRequestedTime = findCasesForICUByRequestedTime(
    infectionsByRequestedTime
  );

  const casesForVentilatorsByRequestedTime = findCasesForVentilatorsByRequestedTime(
    infectionsByRequestedTime
  );

  const dollarsInFlight = findDollarsInFlight(
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
