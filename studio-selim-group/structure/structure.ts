import {StructureBuilder} from 'sanity/structure'

import {singletonPages} from './singleton-pages'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content Management')
    .items([
      S.divider(),

      singletonPages(S),

      S.divider(),

      S.listItem()
        .title('👥 Team Members')
        .schemaType('teamMember')
        .child(S.documentTypeList('teamMember')),

      S.listItem()
        .title('🏠 Properties')
        .schemaType('property')
        .child(S.documentTypeList('property')),

      S.listItem().title('⚙️ Services').schemaType('service').child(S.documentTypeList('service')),
    ])
