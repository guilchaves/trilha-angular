import { Component, Input, OnChanges, OnInit } from '@angular/core'

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnChanges {
  @Input()
  rating: number = 0

  starWidth: number

  ngOnChanges(): void {
    //a expressão utilizada é feita para que o starWidth tenha tamanho
    //proporcional ao rating do curso
    this.starWidth = (this.rating * 74) / 5
  }
}
