import express from 'express';
import { adicionarTurma, atualizarProfessor, excluirProfessor, obterPorDepartamento, obterPorId, obterTodos, obterTurmasPorId } from '../controllers/professorController';

const router = express.Router();

router.get('/', obterTodos);
router.get('/:id', obterPorId);
router.get('/:id/turmas', obterTurmasPorId);

router.put('/:id', atualizarProfessor);

router.post('/:id/turmas', adicionarTurma);

router.get('/departamento/:departamento', obterPorDepartamento);

router.delete('/:id', excluirProfessor);

export default router