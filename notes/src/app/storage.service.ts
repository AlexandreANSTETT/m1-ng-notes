import { Injectable } from '@angular/core';
import { Tag } from './tag.model';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getTags(): Tag[] {
    return JSON.parse(localStorage.getItem('tags') || '[]');
  }

  saveTag(tag: Tag): void {
    const tags = this.getTags();
    tags.push(tag);
    localStorage.setItem('tags', JSON.stringify(tags));
  }

  deleteTag(id: number): void {
    const tags = this.getTags();
    const updatedTags = tags.filter(tag => tag.id !== id);
    this.saveTags(updatedTags);
  }

  saveTags(tags: Tag[]): void {
    localStorage.setItem('tags', JSON.stringify(tags));
  }

  updateTag(updatedTag: Tag): void {
    const tags = this.getTags();
    const index = tags.findIndex(tag => tag.id === updatedTag.id);
    if (index !== -1) {
      tags[index] = updatedTag;
      this.saveTags(tags);
    }
  }

  getNotes(): Note[] {
    return JSON.parse(localStorage.getItem('notes') || '[]');
  }

  saveNote(note: Note): void {
    const notes = this.getNotes();
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  deleteNote(id: number): void {
    const noste = this.getNotes();
    const updatedNotes = noste.filter(notes => notes.id !== id);
    this.saveNotes(updatedNotes);
  }

  saveNotes(notes: Note[]): void {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  updateNote(updatedNote: Note): void {
    const notes = this.getNotes();
    const index = notes.findIndex(note => note.id === updatedNote.id);
    if (index !== -1) {
      notes[index] = updatedNote;
      this.saveNotes(notes);
    }
  }


}
