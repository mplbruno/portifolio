import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificacoesComponent } from './certificacoes/certificacoes.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { HomeComponent } from './home/home.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CardUmComponent } from './portfolio/card-um/card-um.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'more-info', component: MoreInfoComponent},
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'certificados', component:CertificadosComponent},
  {path: 'certificacoes', component:CertificacoesComponent},
  {path: 'card-um', component:CardUmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
