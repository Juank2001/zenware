import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  public employees
  constructor(
    private servicio: ServiciosService,
    private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.employees = null
    this.getEmployees()
  }

  getEmployees(){
    this.servicio.httpGet('employees').subscribe(resp => {
      if(resp.status && resp.status == 'success'){
        this.employees = resp.data
        this.servicio.presentToast(resp.message)
      }else{
        this.servicio.presentToast('No se pudieron cargar los empleados')
      }
    },
    error => {
      console.log(error)
      this.servicio.presentToast('No se pudieron cargar los empleados')
      setTimeout(() => {
        this.getEmployees()
      }, 1000);
    })
  }

  user(id){
    this.router.navigate(['tabs/user/'+id])
  }



}
