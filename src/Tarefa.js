import React from 'react';
import {Button} from 'reactstrap';

class Tarefa extends React.Component{
  constructor(props){
    super(props);
    //this.state = {isChecked: true};
    this.trataChange   = this.trataChange.bind(this);
    this.trataMarcacao = this.trataMarcacao.bind(this);
  }

  trataChange(event) {
    this.props.OnChangePai(event.target.value);
  }

  trataMarcacao(){
    this.props.TrataMarcacaoPai(!this.props.Marcada);
  }

  defineCor(tarefa) {
    if ( (tarefa.toUpperCase().includes('LER')) ||
         (tarefa.toUpperCase().includes('ESTUDAR')) ) {
      return ("form-control alert-primary");
    } else {
      return ("form-control");
    }
  }

  render() {
    return(
      <div className="input-group input-group-default" key={this.props.indice}>
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              checked={this.props.Marcada}
              onChange={this.trataMarcacao}
              type="checkbox" 
              aria-label="Checkbox for following text input"/>
          </div>
        </div>

        <input 
          type="text" 
          value={this.props.Descricao}
          onChange={this.trataChange} 
          className={this.defineCor(this.props.Descricao)}
          aria-label="Text input with checkbox"
        />

        <Button onClick={() => this.props.onDelete()} color="danger" className="btn-sm">x</Button>
      </div>
    );
  }
}

export default Tarefa;