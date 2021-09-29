import { CadastrarTarefaComponent } from './components/views/tarefa/cadastrar-tarefa/cadastrar-tarefa.component';
import { ListarTarefaComponent } from './components/views/tarefa/listar-tarefa/listar-tarefa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ListarTarefaComponent,
  },
  {
    path: "tarefa/listar",
    component: ListarTarefaComponent,
  },
  {
    path: "tarefa/cadastrar",
    component: CadastrarTarefaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
