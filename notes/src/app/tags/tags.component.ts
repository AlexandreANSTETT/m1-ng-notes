import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Tag } from '../tag.model';
import { TagComponent } from '../tag/tag.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tags',
  imports: [TagComponent,FormsModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  loaded: boolean = false;
  tags: Tag[] = [];
  creating: Tag | null = null;
  editing: Tag | null = null;
  constructor(
    private storageService: StorageService,
  ) {
    if (this.loaded) {
      return;
    }
    this.loaded = true;
    this.tags = this.storageService.getTags();
  }

  ngOnInit(): void {}

  dialogAddTag(): boolean {
    this.creating = { id: Date.now(), name: '', color: '#888888' };
    return false;
  }

  deleteTag(tag: Tag): boolean {
    this.storageService.deleteTag(tag.id);
    this.tags = this.storageService.getTags();
    return false;
  }

  EditingTag(): void {
    if (!this.editing) return;

    this.storageService.updateTag(this.editing);

    this.tags = this.storageService.getTags();
    this.editing = null;
  }

  cancelEdit(): void {
    this.editing = null;
    this.creating = null;
  }

  editTag(tag: Tag): void {
    this.editing = tag;
  }

  submitTag(tag: Tag): boolean {
    if (!tag) return false;
    if (this.creating) {
      this.creating = null;
      this.storageService.saveTag(tag);
    } else if (this.editing) {
      this.editing = null;
      this.storageService.updateTag(tag);
    }
    this.tags = this.storageService.getTags();
    return false;
  }

}
