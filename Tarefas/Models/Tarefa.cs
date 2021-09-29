using System;

namespace Tarefas.Models
{
    public class Tarefa
    {
        public Tarefa() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Importancia { get; set; }
        public DateTime CriadoEm { get; set; }

        public override string ToString() =>
        
            $"Nome: {Nome} | Descrição: {Descricao} | Importancia: {Importancia} | Criando em: {CriadoEm} ";
        
    }
}