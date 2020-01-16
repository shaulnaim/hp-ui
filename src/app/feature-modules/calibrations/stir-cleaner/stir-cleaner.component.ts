import { OnInit, OnDestroy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stir-cleaner-container',
  templateUrl: './stir-cleaner.component.html',
  styleUrls: ['./stir-cleaner.component.scss']
})
export class StiRCleanerContainerComponent implements OnInit, OnDestroy  {
  @Output() onClose = new EventEmitter<void>();
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }




}
