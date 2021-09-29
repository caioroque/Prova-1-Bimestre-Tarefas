import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private baseURL = "http://localhost:5000/Tarefas/tarefa";
  constructor(private http: HttpClient) { }

  list(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(`${this.baseURL}/list`);}

  create(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.baseURL}/create`, tarefa);
  }  
}
