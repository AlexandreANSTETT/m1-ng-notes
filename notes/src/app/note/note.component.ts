import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-note',
  imports: [FormsModule, NgFor,NgIf],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() public name: string = "Default Note";
  @Input() public color: string = "Red";
  @Input() public id: number = 0;
  @Input() public isChecklist: boolean = false;
  @Input() public checklist: string[] = [];
  @Input() public checked: boolean[] = []; // Correction : Typage explicite
  @Input() public content: string = "Default Content";
}
