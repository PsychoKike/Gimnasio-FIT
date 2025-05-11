import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstructorComponent } from './instructor/instructor.component';
import { ServiciosFITComponent } from './servicios-fit/servicios-fit.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'serviciosFIT',component:ServiciosFITComponent},
    {path:'Acercade',component:AcercadeComponent},
    {path:'Contacto',component:ContactoComponent},
    {path:'instructor/:id',component:InstructorComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'},
    
];
