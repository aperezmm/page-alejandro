import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alertEmail(){
    let res = window.confirm("Se abrirá una nueva ventana para enviar correo, CONFIRM para continuar.");
    if(res === true){
      location.href = "mailto:alejandro.perez1@udea.edu.co?Subject=Vi%20tu%20pagina";
    }else{
      window.alert("Has cancelado el envió del correo");
    }
  }
}
