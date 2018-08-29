import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'python', label: 'Python' },
  { value: 'sql', label: 'SQL' },
  { value: 'machine-learning', label: 'Machine Learning' },
  { value: 'hTML/CSS', label: 'HTML/CSS' },
  { value: 'javaScript', label: 'JavaScript' },
  { value: 'typeScript', label: 'TypeScript' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'node.js', label: 'Node.js' },
  { value: 'java', label: 'Java' },
  { value: 'linus', label: 'Linus' },
  { value: 'XML', label: 'XML' },
  { value: 'C++', label: 'C++' },
  { value: 'C#', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'iOS/Swift', label: 'iOS/Swift' },
  { value: 'Ruby/Rails', label: 'Ruby/Rails' }
];

class MultipleSelect extends React.Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        isMulti
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default MultipleSelect;
