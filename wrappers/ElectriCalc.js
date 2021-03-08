/**
 * Copyright Mind Powered Corporation 2020
 * 
 * https://mindpowered.dev/
 */

const maglev = require('@mindpowered/maglev');
const electricalc = require('../lib/electricalc.js');

/**
 * A library for calculations related to electrical wiring and circuits
 */
class ElectriCalc {
	constructor() {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let lib = new electricalc.electricalc.ElectricalCalculator(bus);
	}

	/**
	 * Convert from Phase Angle to Power Factor
	 * @param {number} phaseAngle Phase Angle in degrees
	 * @return {Promise} Power Factor Promise will resolve to type number.
	*/
	ConvertPhaseAngleToPowerFactor(phaseAngle) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [phaseAngle];
		let ret = jsbus.call('ElectriCalc.ConvertPhaseAngleToPowerFactor', args);
		return ret;
	}

	/**
	 * Convert from Power Factor to Phase Angle
	 * @param {number} powerFactor Power Factor
	 * @return {Promise} Phase Angle in degrees Promise will resolve to type number.
	*/
	ConvertPowerFactorToPhaseAngle(powerFactor) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [powerFactor];
		let ret = jsbus.call('ElectriCalc.ConvertPowerFactorToPhaseAngle', args);
		return ret;
	}

	/**
	 * Calcualte single phase power based on measured voltage and current
	 * @param {number} voltage Measured voltage in Volts
	 * @param {number} current Measured current in Amps
	 * @return {Promise} Apparent Power in VA Promise will resolve to type number.
	*/
	CalculateSinglePhasePower(voltage, current) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [voltage, current];
		let ret = jsbus.call('ElectriCalc.CalculateSinglePhasePower', args);
		return ret;
	}

	/**
	 * Calcualte three phase power based on measured voltage and current
	 * @param {number} voltage Measured voltage in Volts
	 * @param {string} lineTo Which voltage was measured. Must be "line" or "netural"
	 * @param {number} current Measured current in Amps
	 * @return {Promise} Apparent Power in VA Promise will resolve to type number.
	*/
	CalculateThreePhasePower(voltage, lineTo, current) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [voltage, lineTo, current];
		let ret = jsbus.call('ElectriCalc.CalculateThreePhasePower', args);
		return ret;
	}

}
module.exports = ElectriCalc;

