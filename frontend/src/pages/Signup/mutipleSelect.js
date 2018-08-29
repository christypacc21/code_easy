import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'python', label: 'Python' },
  { value: 'sql', label: 'SQL' },
  { value: 'machine-learning', label: 'Machine Learning' },
  { value: 'HTML/CSS', label: 'HTML/CSS' }
];

class App extends React.Component {
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
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
