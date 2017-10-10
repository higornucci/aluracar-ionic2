import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carro } from '../../domain/carro/carro';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {
  public carro: Carro;
  public precoTotal: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carro = navParams.get('carro');
    this.precoTotal = navParams.get('precoTotal');
  }
}
