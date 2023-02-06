import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BitacoraService } from '../../services/bitacora.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Bitacora } from '../../../models/bitacora.model';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-r410asplit',
  templateUrl: './r410asplit.component.html',
  styleUrls: ['./r410asplit.component.css']
})
export class R410asplitComponent implements OnInit {

  ////MANTENIMIENTO  MINISPLT

  mantenimiento = true;
  mantenimiento_tipo_mini_split_muro_alto = true;
  mantenimiento_modelo2 = true;
  mantenimiento_modelo3 = true;
  mantenimiento_modelo4 = true;
  escoger_modelo_mantenimiento = false;
  reparacion = true;
  //MANTENIMIENTO MINISPLIT TIPO MURO ALTO
  formLogin: FormGroup;
  start = 0;
  transform = 'scale(1)';
  posicionn = 0
  pagina = 1;
  paso2 = true;
  paso3 = true;
  paso4 = true;
  paso5 = true;
  paso6 = true;
  paso7 = true;
  paso8 = true;
  paso9 = true;
  paso10 = true;
  paso11 = true;
  paso12 = true;
  paso13 = true;
  paso14 = true;
  paso15 = true;
  paso16 = true;
  paso17 = true;
  paso18 = true;
  paso19 = true;
  paso20 = true;
  paso21 = true;
  paso22 = true;
  paso23 = true;
  paso24 = true;

  fecha_modelo1 = true;
  botonMantenimiento = true;
  bitacora: Bitacora[];
  serpentin


  archivo
  instalacion=true;
  backgroundColor='rgba(12, 12, 12, 0.479)'

  constructor(
    public formBuilder: FormBuilder,
    private bitacoraService: BitacoraService,
    private router: Router,
    private toast: ToastrService
    , private modal: NgbModal

  ) {
    
    this.formLogin = this.formBuilder.group({


      paso1check: [''],
      paso2check: [''],
      paso3check: [''],
      paso4check: [''],
      paso5check: [''],
      paso6check: [''],
      paso7check: [''],
      paso8check: [''],
      paso9check: [''],
      paso10check: [''],
      paso11check: [''],
      paso12check: [''],
      paso13check: [''],
      paso14check: [''],
      paso15check: [''],
      paso16check: [''],
   
      paso18check: [''],
      paso19check: [''],
      paso20check: [''],
      paso21check: [''],
      paso22check: [''],
      paso23check: [''],
      paso24heck: [''],
      fecha: [],
      posicion: [''],

    })

  }

  ngOnInit(): void {



    this.bitacoraService.getBitacora().subscribe((res) => {

      this.bitacora = res.map((e) => {

        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Bitacora),


        };

      });

      this.bitacora.sort((a, b) => b.posicion - a.posicion);

    });


  }
  verId(id: string) {
    console.log('idddd:::' + id)
  }
  onSubmit() {
    console.log(this.formLogin.value)


  }

  mostrarMantenimiento() {
    this.mantenimiento = false
    this.reparacion = true
    this.toast.info('Mantenimiento', 'ESCOGIO:')



    this.mantenimiento_tipo_mini_split_muro_alto = true;
    this.mantenimiento_modelo2 = true;
    this.mantenimiento_modelo3 = true;
    this.mantenimiento_modelo4 = true;
    this.escoger_modelo_mantenimiento = false;
    this.formLogin.reset()
    this.mostrarSiguiente('cerrar')
  }
  mostrarInstalacion(){
    this.instalacion=false
    this.mantenimiento = true
    this.reparacion = true
    this.mostrarSiguiente('cerrar')
    this.toast.info('Instalación', 'ESCOGIO:',)
    this.formLogin.reset()
  }
  mostrarReparacion() {
    this.mantenimiento = true
    this.reparacion = false
    this.mostrarSiguiente('cerrar')
    this.toast.info('Reparación', 'ESCOGIO:',)
    this.formLogin.reset()


  }

  mostrarSiguiente(paso: string) {
    switch (paso) {
      case 'paso2':
        this.paso2 = false;
        break;
      case 'paso3':
        this.paso3 = false;
        break;
      case 'paso4':
        this.paso4 = false;
        break;
      case 'paso5':
        this.paso5 = false;
        break;
      case 'paso6':
        this.paso6 = false;
        break;
      case 'paso7':
        this.paso7 = false;
        break;
      case 'paso8':
        this.paso8 = false;
        break;
      case 'paso9':
        this.paso9 = false;
        break;
      case 'paso10':
        this.paso10 = false;
        break;
      case 'paso11':
        this.paso11 = false;
        break;
      case 'paso12':
        this.paso12 = false;
        break;
      case 'paso13':
        this.paso13 = false;
        break;
      case 'paso14':
        this.paso14 = false;
        break;
      case 'paso15':
        this.paso15 = false;
        break;
      case 'paso16':
        this.paso16 = false;
        break;
     
      case 'paso18':
        this.paso18 = false;
        break;
      case 'paso19':
        this.paso19 = false;
        break;
      case 'paso20':
        this.paso20 = false;
        break;
      case 'paso21':
        this.paso21 = false;
        break;
      case 'paso22':
        this.paso22 = false;
        break;
      case 'paso23':
        this.paso23 = false;
        break;
      case 'paso24':
        this.paso24 = false;
        break;
      case 'botonMantenimiento':
        this.botonMantenimiento = false;
        break;
      case 'fecha_modelo1':
        this.fecha_modelo1 = false;
        break;

      default:
        this.paso2 = true;
        this.paso3 = true
        this.paso4 = true
        this.paso5 = true
        this.paso6 = true
        this.paso7 = true
        this.paso8 = true
        this.paso9 = true
        this.paso10 = true
        this.paso11 = true
        this.paso12 = true
        this.paso13 = true
        this.paso14 = true
        this.paso15 = true
        this.paso16 = true
        this.paso17 = true
        this.paso18 = true
        this.paso19 = true
        this.paso20 = true
        this.paso21 = true
        this.paso22 = true
        this.paso23 = true
        this.paso24 = true
        this.fecha_modelo1 = true;
        this.botonMantenimiento = true;
    }
  }

  paso1(nombre: string) {

    window.open('../../../assets/equipos/' + nombre, 'ayuda', 'width=900,height=550');

  }

  agregarNuevaBitacora() {



    try {
      /*
          this.formLogin.get("posicion").setValue(this.posicionn=this.bitacora.length+1);
          this.bitacoraService.createPost(this.formLogin.value)
         console.log(this.posicionn)
         console.log(this.formLogin.value)
         this.toast.success('Datos guardados correctamente','CORRECTO!!!',)
         
         this.formLogin = this.formBuilder.group({
        
          paso1:[''],
          paso2: [''],
          paso3:[''],
          paso1check: [''],
          paso2check: [''],
          paso3check: [''],
          fecha: [],
          posicion:[''],
          
        })*/


      console.log(this.formLogin.value)


    } catch (e) {
      console.log(e)
      this.toast.error('Datos no guardados', 'ERROR!!!',)
    }



  }
  paginatioNext(name: string) {

    switch (name) {
      case 'siguiente':

        if (this.start >= this.bitacora.length) {
          return
        } else {
          this.start = this.start + 5;
          this.pagina += 1
        }

        break;
      case 'regresa':
        if (this.start === 0) {
          return
        } else {
          this.start = this.start - 5
          this.pagina -= 1
        }
    }
  }
  openXL(contenido, arc) {
    console.log('jjjjjjj')
    this.archivo = arc;
    this.modal.open(contenido, { centered: true, size: 'xl' });
  }

  openModelos(contenidoModelo) {
    this.modal.open(contenidoModelo, { centered: true, size: 'sm', animation: true, backdrop: true });

  }

  modeloMantenimiento(modelo) {
    console.log(modelo)
    switch (modelo) {
      case 'mantenimiento_modelo1':

        this.mantenimiento_tipo_mini_split_muro_alto = false;
        this.modal.dismissAll()
        this.escoger_modelo_mantenimiento = true;
        break

      case 'mantenimiento_modelo2':

        this.mantenimiento_modelo2 = false;
        this.modal.dismissAll()
        this.escoger_modelo_mantenimiento = true;
        break
      case 'mantenimiento_modelo3':

        this.mantenimiento_modelo3 = false;
        this.modal.dismissAll()
        this.escoger_modelo_mantenimiento = true;
        break
      case 'mantenimiento_modelo4':

        this.mantenimiento_modelo4 = false;
        this.modal.dismissAll()
        this.escoger_modelo_mantenimiento = true;
        break
    }
  }


  cambiartransparencia(){
    this.backgroundColor='rgba(12, 12, 12, 0)'
  }
 

  toggleZoom() {
    this.transform = this.transform === 'scale(1)' ? 'scale(2)' : 'scale(1)';
  }
}
