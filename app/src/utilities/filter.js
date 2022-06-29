import { cos, kamm, ones, pyra, sin, zero, gaus } from '../assets/data/basedata';

export const getDropdown = function (labels, selectedBaseFunction) {
  return (
    <select defaultValue={selectedBaseFunction} onChange={this.handleChange}>
      <option value={JSON.stringify(zero)}>{labels.zero}</option>
      <option value={JSON.stringify(sin)}>{labels.sin}</option>
      <option value={JSON.stringify(cos)}>{labels.cos}</option>
      <option value={JSON.stringify(kamm)}>{labels.kamm}</option>
      <option value={JSON.stringify(ones)}>{labels.ones}</option>
      <option value={JSON.stringify(pyra)}>{labels.pyra}</option>
      <option value={JSON.stringify(gaus)}>{labels.gaus}</option>
      <option value={'0'}>{labels.custom}</option>
    </select>
  );
};
