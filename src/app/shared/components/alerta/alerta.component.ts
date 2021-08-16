import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Alerta } from '../../models/alerta'

@Component({
  selector: 'dio-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss'],
})
export class AlertaComponent implements OnInit {
  alerta = {
    titulo: 'Sucesso!',
    descricao: 'Seu registro cadastrado com sucesso!',
    btnSucess: 'Ok',
    btnCancel: 'Cancelar',
    colorBtnSuccess: 'primary',
    colorBtnCancel: 'warn',
    hasBtnClose: false,
  } as Alerta

  constructor(public dialogRef: MatDialogRef<AlertaComponent>, @Inject(MAT_DIALOG_DATA) public data: Alerta) {}

  ngOnInit() {
    if (this.data) {
      this.alerta.titulo = this.data.titulo || this.alerta.titulo
      this.alerta.descricao = this.data.descricao || this.alerta.descricao
      this.alerta.btnSucess = this.data.btnSucess || this.alerta.btnSucess
      this.alerta.btnCancel = this.data.btnCancel || this.alerta.btnCancel
      this.alerta.colorBtnSuccess = this.data.colorBtnSuccess || this.alerta.colorBtnSuccess
      this.alerta.colorBtnCancel = this.data.colorBtnCancel || this.alerta.colorBtnCancel
      this.alerta.hasBtnClose = this.data.hasBtnClose || this.alerta.hasBtnClose
    }
  }
}
