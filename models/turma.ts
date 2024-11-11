import { model, Schema } from "mongoose"

export type Turma = {
    codigo: string
    disciplina: string
    alunos: string[]
}

export const TurmaSchema = new Schema<Turma>({
    codigo: String,
    disciplina: String,
    alunos: [String]
})

export const TurmaModel = model("Turma", TurmaSchema)