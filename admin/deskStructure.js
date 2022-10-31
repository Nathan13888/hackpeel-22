import S from '@sanity/desk-tool/structure-builder'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default () =>
    S.list()
        .title('Content')
        .items([
            ...S.documentTypeListItems().filter(listItem => !['team'].includes(listItem.getId())),
            orderableDocumentListDeskItem({
                type: "team",
                title: "Team",
                id: "team",
                filter: `_type == 'team'`
            }),
        ])
