import { Tarefa } from './../../../../models/tarefa';
import { TarefaService } from './../../../../services/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {
  nome! : string;
  descricao! : string;
  importancia! : string;
  criadoem! : string;

  constructor(private service: TarefaService, private router: Router) {}

  ngOnInit(): void { }

  cadastrar(): void{
    let tarefa: Tarefa = {
      nome: this.nome,
      descricao: this.descricao,
      importancia: this.importancia,
      criadoem: this.criadoem
    };
    this.service.create(tarefa).subscribe((tarefa) => {
      console.log(tarefa);
      this.router.navigate(["tarefa/listar"])
    });
  }

}
