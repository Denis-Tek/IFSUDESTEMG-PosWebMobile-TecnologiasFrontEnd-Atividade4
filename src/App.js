import './App.css';
import React from 'react';
import {Button} from 'reactstrap';
import ListaTarefa from './ListaTarefas';
import SearchBox from './SearchBox';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      Tarefas: ["Trabalhar", "Desenvolver TCC", "Fazer exercícios das disciplinas", "Estudar", "Ir à Igreja", "Viver"],
      Checkeds: [false, false, false, false, false, false],
      Texto: ""
    };

    this.adicionar          = this.adicionar.bind(this);
    this.excluir            = this.excluir.bind(this);
    this.mudouTextoSearch   = this.mudouTextoSearch.bind(this);
    this.listaAtualTarefas  = this.listaAtualTarefas.bind(this);
    this.listaAtualCheckeds = this.listaAtualCheckeds.bind(this);
    this.mudouTextoTarefa   = this.mudouTextoTarefa.bind(this);
    this.mudouMarcacao      = this.mudouMarcacao.bind(this);
  }
  
  mudouTextoSearch(novoTexto) {
    this.setState({
      Tarefas: this.state.Tarefas,
      Checkeds: this.state.Checkeds,
      Texto: novoTexto
    });
  }

  adicionar() {
    if (!this.state.Texto) {return};
    if (this.state.Tarefas.indexOf(this.state.Texto) > 0) {return}
    let newTarefas  = this.state.Tarefas.concat([this.state.Texto]);
    let newCheckeds = this.state.Checkeds.concat([false]);
    this.setState({
      Tarefas: newTarefas,
      Checkeds: newCheckeds,
      Texto: ""
    });
  }

  excluir(indice) {
    let newTarefas  = this.state.Tarefas;
    let newCheckeds = this.state.Checkeds;
    newTarefas.splice(indice, 1);
    newCheckeds.splice(indice, 1);
    this.setState({
      Tarefas: newTarefas,
      Checkeds: newCheckeds,
      Texto: this.state.Texto
    });  
  }

  listaAtualTarefas() {return this.state.Tarefas;}

  listaAtualCheckeds() {return this.state.Checkeds;}

  mudouTextoTarefa(novoTexto, indice) {
    let newTarefas = this.state.Tarefas;
    newTarefas[indice] = novoTexto;
    this.setState({
      Tarefas: newTarefas,
      Checkeds: this.state.Checkeds,
      Texto: this.state.Texto
    });
  }

  mudouMarcacao(value, indice) {
    let newCheckeds = this.state.Checkeds;
    newCheckeds[indice] = value;
    this.setState({
      Tarefas: this.state.Tarefas,
      Checkeds: newCheckeds,
      Texto: this.state.Texto
    });
  }

  render(){
    return (
      <div className="App">
        <header className="site-header sticky-top py-1">
          <h1>Lista de Tarefas</h1>

          <div className="container container-fluid">
            <div className="alert">
              <div className="input-group input-group-default">
                <SearchBox OnChangePai={this.mudouTextoSearch} Texto={this.state.Texto} PressionouEnter={this.adicionar}/>
                <Button onClick={this.adicionar} color="primary" className="btn-sm">+</Button>
              </div>
            </div>
          </div>
        </header>

        <ListaTarefa 
          Tarefas={this.listaAtualTarefas} 
          Checkeds={this.listaAtualCheckeds}
          OnDeletePai={this.excluir} 
          OnChangePai={this.mudouTextoTarefa}
          TrataMarcacaoPai={this.mudouMarcacao}
        />
      </div>
    );
  }
}

export default App;
