import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alertWhatsapp(){
    let res = window.confirm("Seras redireccionado al chat, esperó tu mensaje :)!");
    if(res === true){
      location.href = "https://api.whatsapp.com/send?phone=573225496497";
    }else{
      window.alert("Has cancelado el envió del mensaje");
    }
  }

}
