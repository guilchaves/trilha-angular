import { Component, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'spa-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
})
export class AlunosComponent implements OnInit {
  @Input() valorInicial: number = 10

  constructor() {}

  ngOnInit() {}
}
