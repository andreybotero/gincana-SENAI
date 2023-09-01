function modalidades(){
    click.clickEdit();

}
class clickModalidades{
    constructor(){
        this.clikou = false;
    }
    clickEdit(){
        if (this.clikou == false) {
            this.clikou= true
            document.getElementById("button-modalidade").classList.add("pontaCabeça")
    
        }else{
            this.clikou = false
            document.getElementById("button-modalidade").classList.remove("pontaCabeça")
        }
    }
}
class ModalidadesGeral{
constructor(){
    this.queimada = this.queimadaHTML();
    this.futebol = this.futebol();
    this.volei = this.voleiHTML();
    this.circuito = this.circuitoHTML();
    this.tenisdemesa = this.tenisdemesaHTML();
    this.pebolin = this.pebolinHTML();
    this.torre = this.torreHTML();
    this.damas = this.damasHTML();
    this.cubomagico = this.cubomagicoHTML();
    this.redacao = this.redacaoHTML();
    this.quiz = this.quizHTML();
    this.raciociniologico = this.raciociniologicoHTML();
    this.dancadascadeiras = this.dancadascadeirasHTML();
}
queimadaHTML(){
return `<div>
<h2>Queimada</h2>
<h3>Jogadores:</h3>
<input type="text" id="jogador1">
<input type="text" id="jogador2">
<input type="text" id="jogador3">
<input type="text" id="jogador4">
<input type="text" id="jogador5">
<input type="text" id="jogador6">
<input type="text" id="jogador7">
<input type="text" id="jogador8">
<input type="text" id="jogador9">
</div>`
}
futebolHTML(){
    return`<div>
    <h2>Futebol</h2>
    <h3>Jogadores:</h3>
    <label for="">Goleiro</label>
    <input type="text" id="jogador1">
    <label for="">Fixo</label>
    <input type="text" id="jogador2">
    <label for="">Alas</label>
    <input type="text" id="jogador3">
    <input type="text" id="jogador4">
    <label for="">Pivô</label>
    <input type="text" id="jogador5">
    <label for="">Reservas</label>
    <input type="text" id="jogador6">
    <input type="text" id="jogador7">
    <input type="text" id="jogador8">
    <input type="text" id="jogador9">
</div>`
}
voleiHTML(){
    return `<div>
    <h2>Volei</h2>
    <h3>Jogadores:</h3>
    <input type="text" id="jogador1">
    <input type="text" id="jogador2">
    <input type="text" id="jogador3">
    <input type="text" id="jogador4">
    <input type="text" id="jogador5">
    <input type="text" id="jogador6">
    <input type="text" id="jogador7">
    <input type="text" id="jogador8">
    <input type="text" id="jogador9">
    </div>`
    }
dancadascadeirasHTML(){
    return `<div>
    <h2>Dança das cadeiras</h2>
    <h3>Jogadores:</h3>
    <input type="text" id="jogador1">
    <input type="text" id="jogador2">
    <input type="text" id="jogador3">
    <input type="text" id="jogador4">
    </div>`
    }
circuitoHTML(){
    return `<div>
    <h2>Circuito</h2>
    <h3>Jogadores:</h3>
    <label for="">Titular</label>
    <input type="text" id="jogador1">
    <label for="">Reserva</label>
    <input type="text" id="jogador2">
    </div>`
    }
torreHTML(){
    return `<div>
    <h2>Torre de equilíbrio</h2>
    <h3>Jogadores:</h3>
    <label for="">Titular</label>
    <input type="text" id="jogador1">
    <label for="">Reserva</label>
    <input type="text" id="jogador2">
    </div>`
    }
tenisdemesaHTML(){
    return `<div>
    <h2>Tênis de mesa</h2>
    <h3>Jogadores:</h3>
    <label for="">Titular</label>
    <input type="text" id="jogador1">
    <label for="">Reserva</label>
    <input type="text" id="jogador2">
    </div>`
    }
damasHTML(){
    return `<div>
    <h2>Damas</h2>
    <h3>Jogadores:</h3>
    <label for="">Titular</label>
    <input type="text" id="jogador1">
    <label for="">Reserva</label>
    <input type="text" id="jogador2">
    </div>`
    }
cubomagicoHTML(){
    return `<div>
    <h2>Cubo mágico</h2>
    <h3>Jogadores:</h3>
    <label for="">Titular</label>
    <input type="text" id="jogador1">
    <label for="">Reserva</label>
    <input type="text" id="jogador2">
    </div>`
    }
redacaoHTML(){
    return `<div>
    <h2>Redação</h2>
    <h3>Jogadores:</h3>
    <label for="">Titular</label>
    <input type="text" id="jogador1">
    <label for="">Reserva</label>
    <input type="text" id="jogador2">
    </div>`
    }
quizHTML(){
    return `<div>
    <h2>Quiz</h2>
    <h3>Jogadores:</h3>
    <label for="">Titular</label>
    <input type="text" id="jogador1">
    <label for="">Reserva</label>
    <input type="text" id="jogador2">
    </div>`
    }
raciociniologicoHTML(){
    return `<div>
    <h2>Raciocínio lógico</h2>
    <h3>Jogadores:</h3>
    <label for="">Titular</label>
    <input type="text" id="jogador1">
    <label for="">Reserva</label>
    <input type="text" id="jogador2">
    </div>`
    }
redacaoHTML(){
    return `<div>
    <h2>Redação</h2>
    <h3>Jogadores:</h3>
    <label for="">Titular</label>
    <input type="text" id="jogador1">
    <label for="">Reserva</label>
    <input type="text" id="jogador2">
    </div>`
    }
pebolinHTML(){
    return `<div>
    <h2>Pebolin</h2>
    <h3>Jogadores:</h3>
    <label for="">Titular</label>
    <input type="text" id="jogador1">
    <input type="text" id="jogador2">
    <label for="">Reserva</label>
    <input type="text" id="jogador3">
    <input type="text" id="jogador4">
    </div>`
    }

}

const click = new clickModalidades();