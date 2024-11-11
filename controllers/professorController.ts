import { ProfessorModel } from "../models/professor";
import { TurmaModel } from "../models/turma";

export const obterTodos = async (req, res) => {
    try {
        const professores = await ProfessorModel.find();
        res.status(200).json(professores);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const obterPorId = async (req, res) => {
    try {
        const professor = await ProfessorModel.findOne({ id: req.params.id });
        if (professor) {
            res.status(200).json(professor);
        } else {
            res.status(400).json({ message: 'Professor não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
};

export const obterTurmasPorId = async (req, res) => {
    try {
        const professor = await ProfessorModel.findOne({ id: req.params.id });
        if (professor) {
            res.status(200).json(professor.turmas);
        } else {
            res.status(400).json({ message: 'Professor não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
};

export const atualizarProfessor = async (req, res) => {
    try {
        const professor = await ProfessorModel.findOneAndUpdate(
            { id: req.params.id },
            req.body
        );
        if (professor) {
            res.status(200).json({ message: 'Professor atualizado' });
        } else {
            res.status(400).json({ message: 'Professor não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
};

export const adicionarTurma = async (req, res) => {
    try {
        const { codigo, disciplina, alunos } = req.body

        const newTurma = await TurmaModel.create({
          codigo,
          disciplina,
          alunos
        })

        const professor = await ProfessorModel.findOne(
            { id: req.params.id },
        );
        
        const turmas: any = professor?.turmas

        const newProfessor = await ProfessorModel.findOneAndUpdate(
            { id: req.params.id },
            { turmas: [...turmas, newTurma] }
        );

        if (newProfessor) {
            res.status(200).json({ message: 'Professor atualizado' });
        } else {
            res.status(400).json({ message: 'Professor não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
};

export const obterPorDepartamento = async (req, res) => {
    try {
        const professor = await ProfessorModel.find({ departamento: req.params.departamento });
        if (professor) {
            res.status(200).json(professor);
        } else {
            res.status(400).json({ message: 'Professor não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
};

export const excluirProfessor = async (req, res) => {
    try {
        const professor = await ProfessorModel.deleteOne({ id: req.params.id });
        if (professor) {
            res.status(200).json({ message: 'Professor excluído com sucesso.' });
        } else {
            res.status(400).json({ message: 'Professor não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
};