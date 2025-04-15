import { Tag } from "./tag.model";

export class Note {
    id: number = 0;
    title: string = "Default Note";
    color: string = "#888888";
    isChecklist: boolean = false;
    checklist : string[] = []
    checked: boolean[] = [];
    content: string = "Default Content";
    tags: Tag[] = [];

    
}


