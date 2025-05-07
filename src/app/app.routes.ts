import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookDemoComponent } from './pages/book-demo/book-demo.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        path: "", 
        component: HomeComponent
    }, 
    {
        path: "book-demo", 
        component: BookDemoComponent
    }, 
    {
        path: "login", 
        component: LoginComponent
    }, 
    {
        path: "register", 
        component: RegisterComponent
    },
];
