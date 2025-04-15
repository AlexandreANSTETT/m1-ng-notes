import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { FormsModule } from '@angular/forms';
import { Note } from '../note.model';
import { NoteComponent } from '../note/note.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-notes',
  imports: [FormsModule, NoteComponent, NgFor, NgIf],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  loaded: boolean = false;
  notes: Note[] = [];
  creating: Note | null = null;
  editing: Note | null = null;

  constructor(
    private storageService: StorageService,
  ) {
    if (this.loaded) {
      return;
    }
    this.loaded = true;
    this.notes = this.storageService.getNotes();
  }

  ngOnInit(): void {}

  dialogAddNote(): boolean {
      this.creating = { 
        id: Date.now(), 
        title: '', 
        color: '#888888',
        isChecklist: false,
        checklist: [],
        checked: [],
        content: '',
        tags: []
      };
      return false;
  }
  
    deleteNote(note: Note): boolean {
      this.storageService.deleteNote(note.id);
      this.notes = this.storageService.getNotes();
      return false;
    }
  
    EditingNote(): void {
      if (!this.editing) return;
  
      this.storageService.updateNote(this.editing);
  
      this.notes = this.storageService.getNotes();
      this.editing = null;
    }
  
    cancelEdit(): void {
      this.editing = null;
      this.creating = null;
    }
  
    editNote(note: Note): void {
      this.editing = note;
    }
  
    submitNote(note: Note): boolean {
      if (!note) return false;
      if (this.creating) {
        this.creating = null;
        this.storageService.saveNote(note);
      } else if (this.editing) {
        this.editing = null;
        this.storageService.updateNote(note);
      }
      this.notes = this.storageService.getNotes();
      console.log(this.notes);
      return false;
    }

    addChecklistItem(): void {
      if (this.creating) {
        this.creating.checklist.push('');
      } else if (this.editing) {
        this.editing.checklist.push('');
      }
    }
    
    removeChecklistItem(index: number): void {
      if (this.creating) {
        this.creating.checklist.splice(index, 1);
      } else if (this.editing) {
        this.editing.checklist.splice(index, 1);
      }
    }

}
