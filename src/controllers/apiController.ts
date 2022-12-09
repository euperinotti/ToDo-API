import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { ToDo } from "../models/toDo";

export const ping = async (req: Request, res: Response) => {
    res.json({pong: true});
}