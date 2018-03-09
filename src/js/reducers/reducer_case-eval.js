export default function(){
  return {
    "case_isListedBuilding":true,
    "case_isOccupiedBuilding":true,
    "case_hasExposedArt":true,
    "case_geoTempMax":40,
    "case_geoTempMin":5,
    "case_geoHumidityPercentage":60,
    "case_structArea_cat":"roof",
    "case_structArea_type":"gambrel",
    "case_structArea_isExposed":false,
    "case_dmgComponent_name":"truss",
    "case_dmgComponent_locn":"end",
    "case_dmgComponent_structPurp":"tension",
    "case_dmgComponent_materialGrade":"AA",
    "case_dmgComponent_csArea":55,
    "case_dmgComponent_csSpan":5000,
    "case_dmgComponent_dmgPercentage":12
  }
  //solnName not stored, but sent with Create or Update api call... But should retain some way to track if api was unsuccessful?
}
