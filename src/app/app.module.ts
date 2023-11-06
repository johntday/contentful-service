import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentfulService } from "./contentful.service";
import { ProductListComponent } from "./product-list/product-list.component";
import { AppComponent } from "./app.component";
import { ProductSingleComponent } from "./product-single/product-single.component";

const routes: Routes = [
  { path: "", redirectTo: "/products", pathMatch: "full" },
  { path: "products", component: ProductListComponent },
  { path: "single-product/:slug", component: ProductSingleComponent }
];

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductSingleComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [ContentfulService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
