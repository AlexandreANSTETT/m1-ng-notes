import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  public name = input<string>("Default Tag");
  public color = input<string>("Red");
  public id = input<number>(0);

}
