import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'spa-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  name: string = 'Cadastro'
  constructor() {}

  ngOnInit() {}
}
