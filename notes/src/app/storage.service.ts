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
}
