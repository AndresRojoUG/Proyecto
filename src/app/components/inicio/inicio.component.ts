import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private toast:ToastrService,) { }

  ngOnInit(): void {
  }
  toasts(){
    this.toast.info('HVAC SYSTEMS SUPPORT','BIENVENIDO A:')

  }

}
