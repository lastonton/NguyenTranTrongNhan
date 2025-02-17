import express, { Request, Response } from 'express';
import WorkListDB from '../models/WorkListDB';

const router = express.Router();

router.get('/worklist', async (req: Request, res: Response):Promise<any> => {
    try {
        const worklists = await WorkListDB.selectAll();
        res.json(worklists);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

router.post('/worklist', async (req: Request, res: Response):Promise<any> => {
    try {
        const newWork = await WorkListDB.insert(req.body);
        res.status(201).json(newWork);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

router.get('/worklist/:id', async (req: Request, res: Response):Promise<any> => {
    try {
        const work = await WorkListDB.selectById(req.params.id);
        if (!work) return res.status(404).json({ message: 'Resource not found' });
        res.json(work);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

router.put('/worklist/:id', async (req: Request,res: Response):Promise<any> => {
    try {
        const _id = req.params.id;
        const title = req.body.title;
        const description = req.body.description;
        const status = req.body.status;
        const work_item = {_id: _id, title: title, description:description, status: status};
        const updatedWork = await WorkListDB.update(req.params.id, work_item);
        if (!updatedWork) return res.status(404).json({ message: 'Resource not found' });
        res.json(updatedWork);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

router.delete('/worklist/:id', async (req: Request, res: Response):Promise<any> => {
    try {
        const deletedWork = await WorkListDB.delete(req.params.id);
        if (!deletedWork) return res.status(404).json({ message: 'Resource not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

router.get('/worklist/status/:status', async (req: Request, res: Response) => {
    try {
        const worklists = await WorkListDB.findByStatus(req.params.status);
        res.json(worklists);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

export default router;
