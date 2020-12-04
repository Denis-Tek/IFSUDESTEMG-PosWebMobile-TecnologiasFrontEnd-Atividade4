import React from 'react';
import Tarefa from './Tarefa';

class ListaTarefas extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      GeraTarefas: props.Tarefas,
      GeraCheckeds: props.Checkeds
    };

    this.deleteItem    = this.deleteItem.bind(this);
    this.trataChange   = this.trataChange.bind(this);
    this.trataMarcacao = this.trataMarcacao.bind(this);
  }

  deleteItem(item) {
    this.props.OnDeletePai(item);
  }

  trataChange(texto, indice) {
    this.props.OnChangePai(texto, indice);
  }

  trataMarcacao(value, index) {
    this.props.TrataMarcacaoPai(value, index);
  }

  render(){
    return(
      <div className="container container-fluid">
        {this.state.GeraTarefas().map((tarefa, index) => {
          return(
            <div key={index} className="alert alert-light">  
              <Tarefa 
                Descricao={tarefa} 
                Marcada={this.state.GeraCheckeds()[index]}
                onDelete={() => this.deleteItem(index)} 
                OnChangePai={(texto) => this.trataChange(texto, index)}
                TrataMarcacaoPai={(value) => this.trataMarcacao(value, index)}
              />
            </div>
          );
        })}
      </div>
    )
  }

}

export default ListaTarefas;
