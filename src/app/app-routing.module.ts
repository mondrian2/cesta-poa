import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PagamentoComponent } from './shared/pagamento/pagamento.component';
import { AdicionaisComponent } from './shared/adicionais/adicionais.component';


const routes: Routes = [
  {path: '***', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pagamentos', component: PagamentoComponent},
  {path: 'adicionais', component: AdicionaisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
