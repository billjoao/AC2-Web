import { model, Schema } from 'mongoose';
import { Turma, TurmaSchema } from './turma';

type Professor = {
    id: string,
    nome: string
    idade: number
    departamento: string
    turmas: Turma[]
}

const ProfessorSchema = new Schema<Professor>({
    id: String,
    departamento: String,
    idade: Number,
    nome: String,
    turmas: [TurmaSchema]
})

export const ProfessorModel = model("Professor", ProfessorSchema)