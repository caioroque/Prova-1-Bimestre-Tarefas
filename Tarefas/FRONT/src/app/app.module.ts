import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
// Imports dos componentes internos
import { AppComponent } from "./app.component";
import { CadastrarTarefaComponent } from "./components/views/tarefa/cadastrar-tarefa/cadastrar-tarefa.component";
import { ListarTarefaComponent } from "./components/views/tarefa/listar-tarefa/listar-tarefa.component";



@NgModule({
    declarations: [
        AppComponent,
        CadastrarTarefaComponent,
        ListarTarefaComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}