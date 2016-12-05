import { EntityIdUtil } from './entity-id';
import { fromJsonList, toJsonList } from './restful-crud';
import { ContentTypeEnum } from './content-item';

export class AnnouncementMoreChannelItem {
    constructor(
        public title: string,
        public positionIndex: number,
        public contentType: ContentTypeEnum,
        public contentData: string
    ) { }

    static zero(): AnnouncementMoreChannelItem {
        return new AnnouncementMoreChannelItem(
            "",
            0,
            null,
            ""
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new AnnouncementMoreChannelItem(
            jsonObject.title,
            jsonObject.position_index,
            jsonObject.content_type,
            jsonObject.content_data
        );
    }

    static toJson(entity: AnnouncementMoreChannelItem): any {
        if (null == entity) {
            return null;
        }

        let jsonObject = {
            title: entity.title,
            position_index: entity.positionIndex,
            content_type: entity.contentType,
            content_data: entity.contentData
        };

        return jsonObject;
    }
}
