

import { Request, Response } from 'express';

const notFoundHandler = (req: Request, res: Response) => {
    res.status(404).json({ message: "Resource not found on this server" });
}

export default notFoundHandler;