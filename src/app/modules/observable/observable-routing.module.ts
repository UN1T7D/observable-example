import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleConnectionComponent } from './pages/example-connection/example-connection.component';

const routes: Routes = [
    {
        path: '',
        component: ExampleConnectionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ObservableRoutingModule { }
