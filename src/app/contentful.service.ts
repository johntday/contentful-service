import { Injectable } from "@angular/core";
import { createClient, Entry } from "contentful";

const CONFIG = {
  space: "d9r4mg1st97i",
  accessToken: "dUWa-JSM5QWGNeckfKnPGfAA0GXokXlfBY2zoRZFF6Q",

  contentTypeIds: {
    product: "hotelInfo"
  }
};

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() {}

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: CONFIG.contentTypeIds.product
          },
          query
        )
      )
      .then((res) => res.items);
  }
}
