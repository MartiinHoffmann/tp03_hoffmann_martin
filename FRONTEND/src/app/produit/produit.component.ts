import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/Models/Produit';
import { ServiceProductService } from 'src/app/ServiceProduct/service-product.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private serviceProductService: ServiceProductService) { }

  public listProduits?: Observable<Array<Produit>>;

  ngOnInit(): void {
    this.listProduits = this.serviceProductService.getAllProduit();
  }

}
