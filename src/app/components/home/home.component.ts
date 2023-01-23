import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toast:ToastrService) { }

  ngOnInit(): void {
  }
info(nombre){
switch(nombre){
  case'R-410a SPLIT':
  this.toast.info('R-410a SPLIT','SERVICIO A:')
}
}


}
