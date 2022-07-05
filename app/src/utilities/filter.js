import { cos, kamm, ones, pyra, sin, zero, gaus } from '../assets/data/basedata';

/**
 * @param labels labels for the options
 * @param selectedBaseFunction sets the default value
 * @param refName sets the ref name
 * @return select with options for all the base functions
 */
export const getDropdown = function (labels, selectedBaseFunction, refName) {
  return (
    <div className="basefunctions">
      <label htmlFor="basefunction">{labels.selectBaseFunction}</label>
      <select name="basefunction" ref={refName} defaultValue={selectedBaseFunction} onChange={this.handleChange}>
        <option value={JSON.stringify(zero)}>{labels.zero}</option>
        <option value={JSON.stringify(sin)}>{labels.sin}</option>
        <option value={JSON.stringify(cos)}>{labels.cos}</option>
        <option value={JSON.stringify(kamm)}>{labels.kamm}</option>
        <option value={JSON.stringify(ones)}>{labels.ones}</option>
        <option value={JSON.stringify(pyra)}>{labels.pyra}</option>
        <option value={JSON.stringify(gaus)}>{labels.gaus}</option>
        <option value={'0'}>{labels.custom}</option>
      </select>
    </div>
  );
};
