import type { Schema, Struct } from '@strapi/strapi';

export interface HomeAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_home_aboutuses';
  info: {
    displayName: 'AboutUs';
    icon: 'archive';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
    icon: 'apps';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeProduct extends Struct.ComponentSchema {
  collectionName: 'components_home_products';
  info: {
    displayName: 'Product';
    icon: 'briefcase';
  };
  attributes: {
    Subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.about-us': HomeAboutUs;
      'home.hero': HomeHero;
      'home.product': HomeProduct;
    }
  }
}
