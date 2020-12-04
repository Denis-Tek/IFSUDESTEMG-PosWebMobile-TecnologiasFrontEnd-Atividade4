import React from 'react';

class SearchBox extends React.Component{

  constructor(props){
    super(props);
    this.trataChange = this.trataChange.bind(this);
    this.trataTeclas = this.trataTeclas.bind(this);
  }

  trataChange(event) {
    this.props.OnChangePai(event.target.value);
  }

  trataTeclas(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); // Cancela a ação padrão
      this.props.PressionouEnter();
    }
  }

  render() {
    return(
      <input 
        type="text"
        value={this.props.Texto} 
        onChange={this.trataChange} 
        placeholder="adicione uma tarefa" 
        autoFocus 
        onKeyUp={this.trataTeclas}
        className="form-control" 
        aria-label="Text input">
      </input>
    )
  }
}

export default SearchBox;