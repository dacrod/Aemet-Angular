import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ConfigPageComponent } from './pages/config-page/config-page.component';


const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'config',
        component: ConfigPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
