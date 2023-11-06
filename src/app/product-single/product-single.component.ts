import { Component, OnInit, ɵConsole } from "@angular/core";
import { ContentfulService } from "../contentful.service";
import { Entry } from "contentful";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-single",
  templateUrl: "./product-single.component.html",
  styleUrls: ["./product-single.component.css"]
})
export class ProductSingleComponent implements OnInit {
  private products: Entry<any>[] = [];
  slug: string;
  routeShadow: any;

  constructor(
    private contentfulService: ContentfulService,
    route: ActivatedRoute
  ) {
    this.slug = route.snapshot.params.slug;
    this.routeShadow = route;
  }

  ngOnInit() {
    this.contentfulService
      .getProducts()
      .then((products) => (this.products = products));
  }
}
