import { ProfessorModel } from "./models/professor"
import { TurmaModel } from "./models/turma"

export const generateData = async () => {
    const turma1 = await TurmaModel.create({
        codigo: "9A",
        disciplina: "MAT101",
        alunos: ["João", "Maria", "Pedro"]
    })
    
    const turma2 = await TurmaModel.create({
        codigo: "10A",
        disciplina: "MAT201",
        alunos: ["Ana", "Luiz"]
    })

    ProfessorModel.create({
        id: "01",
        nome: "Prof. Carlos",
        idade: 40,
        departamento: "Matemática",
        turmas: [turma1, turma2]
    })
}