import { EntityIdUtil } from './entity-id';
import { ContentTypeEnum } from './content-item';

export class AnnouncementCoverChannelItem {
    constructor(
        public title: string,
        public positionIndex: number,
        public contentType: ContentTypeEnum,
        public contentData: string
    ) { }

    static zero(): AnnouncementCoverChannelItem {
        return new AnnouncementCoverChannelItem(
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

        return new AnnouncementCoverChannelItem(
            jsonObject.title,
            jsonObject.position_index,
            jsonObject.content_type,
            jsonObject.content_data
        );
    }

    static toJson(entity: AnnouncementCoverChannelItem): any {
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
