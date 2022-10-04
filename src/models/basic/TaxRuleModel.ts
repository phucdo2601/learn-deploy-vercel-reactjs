export interface TaxRuleModel {
    taxRuleId : string;
    socialInsuranceCoefficient : number;
    healthInsuranceCoefficient : number;
    accidentInsuranceCoefficient : number;
    maxSocialInsuranceCost : number;
    maxHealthInsuranceCost : number;
    maxAccidentInsuranceCost : number;
    dependentDeductionCost : number;
    yourselfDeductionCost : number;
}