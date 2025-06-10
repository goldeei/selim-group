import {StructureBuilder} from 'sanity/structure'

export const singletonDocument = (S: StructureBuilder, typeName: string, title: string) =>
  S.listItem()
    .title(title)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName).title(title))

export const singletonPages = (S: StructureBuilder) =>
  S.listItem()
    .title('📄 Pages')
    .child(
      S.list()
        .title('Site Pages')
        .items([
          singletonDocument(S, 'aboutUsPage', 'About Us'),
          singletonDocument(S, 'landingPage', 'Landing Page'),
        ]),
    )
