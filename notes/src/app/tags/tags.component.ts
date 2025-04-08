import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Tag } from '../tag.model';

@Component({
  selector: 'app-tags',
  imports: [],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  private loaded:boolean = false;
  public tags:Tag[] = [];

  constructor(private storage: StorageService) {
    this.loadTags();
  }

  loadTags() {
    if(!this.loaded) {
      this.tags = this.storage.getTags();
      this.loaded = true;
    }
  }

  dialogAddTag() {
    const tagName = window.prompt("Entrez le nom de la nouvelle étiquette :");
    if (tagName && tagName.trim() !== "") {
      const newTag: Tag = { name: tagName.trim() , color :"Red", id: this.tags.length }; // Supposons que Tag a une propriété `name`
      this.storage.saveTag(newTag); // Méthode fictive pour enregistrer le tag
      this.tags.push(newTag); // Mettre à jour la liste des tags
    }
  }

}
