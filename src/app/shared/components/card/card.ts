import { Component, ContentChild, TemplateRef} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'erp-card',
  imports: [
    NgTemplateOutlet
  ],
  host: {
    'class': 'card',
  },
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
    @ContentChild('header') header?: TemplateRef<any>;
    @ContentChild('content') content?: TemplateRef<any>;
}
