import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  private id
  public employee = null
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private servicio: ServiciosService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.employee = null
    this.id = this.ActivatedRoute.snapshot.params.id
    this.getUser(this.id)
  }

  getUser(id) {
    this.servicio.httpGet('employee/' + id).subscribe(resp => {
      console.log(resp)
      this.employee = resp.data
    })
  }
}
