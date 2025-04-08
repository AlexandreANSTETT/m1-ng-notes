import { Injectable } from '@angular/core';
import { Tag } from './tag.model';

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
}
