import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { ToDo } from "../models/toDo";

export const ping = async (req: Request, res: Response) => {
    res.json({pong: true});
}

export const toDoAll = async (req: Request, res: Response) => {
    const list = await ToDo.findAll();
    res.json({ list });
}

export const toDoAdd = async (req: Request, res: Response) => {

}

export const toDoUpdate = async (req: Request, res: Response) => {
    
}

export const toDoDelete = async (req: Request, res: Response) => {

}

