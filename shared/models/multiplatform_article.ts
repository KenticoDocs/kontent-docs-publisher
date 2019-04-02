import {
  ContentItem,
  Fields,
} from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Fri Mar 29 2019 09:01:58 GMT+0100 (GMT+01:00).
 */
export class MultiplatformArticle extends ContentItem {
  public children: ContentItem[];
  public title: Fields.TextField;
  public url: Fields.UrlSlugField;
}