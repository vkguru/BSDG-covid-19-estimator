/* eslint-disable max-len */
const dailyInfections = (data) => {
  // reported cases
  const currentlyInfected = data.reportedCases * 10;
  const severelyInfected = data.reportedCases * 50;

  // currently infected
  const infectionsByRequestedTime = Math.trun(currentlyInfected * (2 ** (data.timeToElapse / 3)));
  const infectionsByRequestedTimeServerity = Math.trun(severelyInfected * (2 ** (data.timeToElapse / 3)));

  // Servere positive cases
  const severeCasesByRequestedTime = Math.trun((15 / 100) * infectionsByRequestedTime);
  const severeCasesByRequestedTimeSeverity = Math.trun((15 / 100) * infectionsByRequestedTime);

  // Number of available beds
  const hospitalBedsAvailable = Math.trun((35 / 100) * data.totalHospitalBeds);

  // Cases requiring ICU
  const casesForICUByRequestedTime = Math.trun((5 / 100) * infectionsByRequestedTime);
  const casesForICUByRequestedTimeSeverity = Math.trun((5 / 100) * infectionsByRequestedTimeServerity);

  // Cases requiring Ventilators
  const casesForVentilatorsByRequestedTime = Math.trun((2 / 100) * infectionsByRequestedTime);
  const casesForVentilatorsByRequestedTimeSeverity = Math.trun((2 / 100) * infectionsByRequestedTimeServerity);

  // Money lose in the region
  const dollarsInFlight = Math.trun((infectionsByRequestedTime * data.region.avgDailyIncomePopulation) * data.region.avgDailyIncomeInUSD * data.timeToElapse);
  const dollarsInFlightServerity = Math.trun((infectionsByRequestedTimeServerity * data.region.avgDailyIncomePopulation) * data.region.avgDailyIncomeInUSD * data.timeToElapse);

  const impact = {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime: hospitalBedsAvailable - severeCasesByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };

  const severeImpact = {
    currentlyInfected: severelyInfected,
    infectionsByRequestedTime: infectionsByRequestedTimeServerity,
    severeCasesByRequestedTime: severeCasesByRequestedTimeSeverity,
    hospitalBedsByRequestedTime: hospitalBedsAvailable - severeCasesByRequestedTimeSeverity,
    casesForICUByRequestedTime: casesForICUByRequestedTimeSeverity,
    casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTimeSeverity,
    dollarsInFlight: dollarsInFlightServerity
  };

  const output = { data, impact, severeImpact };
  return output;
};

const weeklyInfections = (data) => {
  // reported cases
  const currentlyInfected = data.reportedCases * 10;
  const severelyInfected = data.reportedCases * 50;

  // currently infected
  const infectionsByRequestedTime = Math.trun(currentlyInfected * (2 ** ((data.timeToElapse / 7) / 3)));
  const infectionsByRequestedTimeServerity = Math.trun(severelyInfected * (2 ** ((data.timeToElapse / 7) / 3)));

  // Servere positive cases
  const severeCasesByRequestedTime = Math.trun((15 / 100) * infectionsByRequestedTime);
  const severeCasesByRequestedTimeSeverity = Math.trun((15 / 100) * infectionsByRequestedTime);

  // Number of available beds
  const hospitalBedsAvailable = Math.trun((35 / 100) * data.totalHospitalBeds);

  // Cases requiring ICU
  const casesForICUByRequestedTime = Math.trun((5 / 100) * infectionsByRequestedTime);
  const casesForICUByRequestedTimeSeverity = Math.trun((5 / 100) * infectionsByRequestedTimeServerity);

  // Cases requiring Ventilators
  const casesForVentilatorsByRequestedTime = Math.trun((2 / 100) * infectionsByRequestedTime);
  const casesForVentilatorsByRequestedTimeSeverity = Math.trun((2 / 100) * infectionsByRequestedTimeServerity);

  // Money lose in the region
  const dollarsInFlight = Math.trun((infectionsByRequestedTime * data.region.avgDailyIncomePopulation) * data.region.avgDailyIncomeInUSD * data.timeToElapse);
  const dollarsInFlightServerity = Math.trun((infectionsByRequestedTimeServerity * data.region.avgDailyIncomePopulation) * data.region.avgDailyIncomeInUSD * data.timeToElapse);

  const impact = {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime: hospitalBedsAvailable - severeCasesByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };

  const severeImpact = {
    currentlyInfected: severelyInfected,
    infectionsByRequestedTime: infectionsByRequestedTimeServerity,
    severeCasesByRequestedTime: severeCasesByRequestedTimeSeverity,
    hospitalBedsByRequestedTime: hospitalBedsAvailable - severeCasesByRequestedTimeSeverity,
    casesForICUByRequestedTime: casesForICUByRequestedTimeSeverity,
    casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTimeSeverity,
    dollarsInFlight: dollarsInFlightServerity
  };

  const output = { data, impact, severeImpact };
  return output;
};


const monthlyInfections = (data) => {
  // reported cases
  const currentlyInfected = data.reportedCases * 10;
  const severelyInfected = data.reportedCases * 50;

  // currently infected
  const infectionsByRequestedTime = Math.trun(currentlyInfected * (2 ** ((data.timeToElapse / 30) / 3)));
  const infectionsByRequestedTimeServerity = Math.trun(severelyInfected * (2 ** ((data.timeToElapse / 30) / 3)));

  // Servere positive cases
  const severeCasesByRequestedTime = Math.trun((15 / 100) * infectionsByRequestedTime);
  const severeCasesByRequestedTimeSeverity = Math.trun((15 / 100) * infectionsByRequestedTime);

  // Number of available beds
  const hospitalBedsAvailable = Math.trun((35 / 100) * data.totalHospitalBeds);

  // Cases requiring ICU
  const casesForICUByRequestedTime = Math.trun((5 / 100) * infectionsByRequestedTime);
  const casesForICUByRequestedTimeSeverity = Math.trun((5 / 100) * infectionsByRequestedTimeServerity);

  // Cases requiring Ventilators
  const casesForVentilatorsByRequestedTime = Math.trun((2 / 100) * infectionsByRequestedTime);
  const casesForVentilatorsByRequestedTimeSeverity = Math.trun((2 / 100) * infectionsByRequestedTimeServerity);

  // Money lose in the region
  const dollarsInFlight = Math.trun((infectionsByRequestedTime * data.region.avgDailyIncomePopulation) * data.region.avgDailyIncomeInUSD * data.timeToElapse);
  const dollarsInFlightServerity = Math.trun((infectionsByRequestedTimeServerity * data.region.avgDailyIncomePopulation) * data.region.avgDailyIncomeInUSD * data.timeToElapse);

  const impact = {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime: hospitalBedsAvailable - severeCasesByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };

  const severeImpact = {
    currentlyInfected: severelyInfected,
    infectionsByRequestedTime: infectionsByRequestedTimeServerity,
    severeCasesByRequestedTime: severeCasesByRequestedTimeSeverity,
    hospitalBedsByRequestedTime: hospitalBedsAvailable - severeCasesByRequestedTimeSeverity,
    casesForICUByRequestedTime: casesForICUByRequestedTimeSeverity,
    casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTimeSeverity,
    dollarsInFlight: dollarsInFlightServerity
  };

  const output = { data, impact, severeImpact };
  return output;
};

const covid19ImpactEstimator = (data) => {
  dailyInfections(data);
  weeklyInfections(data);
  monthlyInfections(data);

  return covid19ImpactEstimator(data);
};

const population = document.getElementById('population').value;
const timeToElapse = document.getElementById('data-time-to-elapse').value;
const reportedCases = document.getElementById('data-reported-cases').value;
const totalHospitalBeds = document.getElementById('data-total-hospital-beds').value;
const periodType = document.getElementsByTagName('select').value;
const dataEstimate = document.getElementById('data-go-estimate');


const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType,
  timeToElapse,
  reportedCases,
  population,
  totalHospitalBeds
};

dataEstimate.addEventListener('click', covid19ImpactEstimator(data));

document.getElementById('result').innerHTML = data;

/*
const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};
*/

// const input = data;

export default covid19ImpactEstimator;
