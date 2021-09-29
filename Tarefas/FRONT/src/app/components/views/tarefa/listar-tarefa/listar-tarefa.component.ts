import { TarefaService } from './../../../../services/tarefa.service';
import { Tarefa } from './../../../../models/tarefa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private service: TarefaService) { }

  ngOnInit(): void {
    this.service.list().subscribe((tarefas) => {
      this.tarefas = tarefas;
      for (let tarefa of tarefas){
        console.log(tarefa)
      }
  });
}
}
