import {NgModule} from "@angular/core"
import {Routes, RouterModule} from "@angular/router"
import {OrdenComponent} from "./components/orden/orden.component"

const routes : Routes = [
    {path: '', component: OrdenComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }

