import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoComponent } from './pages/crypto/crypto.component';

const routes: Routes = [
  { path: 'crypto', component: CryptoComponent, pathMatch: 'full'},
  { path: '', redirectTo: '/crypto', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
