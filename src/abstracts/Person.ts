import {IPerson } from "../interfaces/IPerson";

export abstract class Person implements IPerson {
    public readonly id : string;
    protected _name : string;

    constructor(id : string, name: string){
        this.id = id;
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if(!newName) {
            throw new Error("Invalid name");
        }
        this._name = newName;
    }

    getDisplayName(): string {
        return `${this._name} (${this.id})`;
    }

    abstract describe(): string;

}