export interface Thumbnail {
  id: string;
}

export interface ContentThumbnail {
  imageElement: string;
  source: string;
}

export interface Placeholder {
  show: boolean;
  text: string;
}

export interface TypeRef {
  id: string;
}

export interface Element {
  elementType: string;
  fieldLabel: string;
  label: string;
  key: string;
  placeholder: Placeholder;
  typeRef: TypeRef;
  helpText: string;
  fieldType: string;
  allowMultipleValues?: boolean;
  minimumValues?: number;
}

export interface Content {
  id: string;
  rev: string;
  name: string;
  classification: string;
  path: string;
  kind: string[];
  thumbnail: Thumbnail;
  contentThumbnail: ContentThumbnail;
  description: string;
  creatorId: string;
  created: Date;
  lastModifierId: string;
  lastModified: Date;
  status: string;
  tags: string[];
  elements: {
    [key: string]: Element;
  };
}
