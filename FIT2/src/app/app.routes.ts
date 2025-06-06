import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstructorComponent } from './instructor/instructor.component';
import { ServiciosFITComponent } from './servicios-fit/servicios-fit.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { EditclientesComponent } from './editclientes/editclientes.component';
import { BuscarComponent } from './buscar/buscar.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'serviciosFIT',component:ServiciosFITComponent},
    {path:'Acercade',component:AcercadeComponent},
    {path:'Contacto',component:ContactoComponent},
    {path:'InicioSesion',component:FormularioReactivoComponent},
    {path:'instructor/:id',component:InstructorComponent},
    {path:'EditarUsers',component:EditUsersComponent},
    {path:'EditarClientes',component:EditclientesComponent},
    {path:'buscar/:nombre',component:BuscarComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'},

    
];
