import { EntityIdUtil } from "./entity-id";

import { ContentTypeEnum } from './content-item';

export class TopicCoverChannelItem {
    constructor(
        public title: string,
        public titleImageUrl: string,
        public positionIndex: number,
        public contentType: ContentTypeEnum,
        public contentData: string
    ) { }

    static zero(): TopicCoverChannelItem {
        return new TopicCoverChannelItem(
            "",
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

        return new TopicCoverChannelItem(
            jsonObject.title,
            jsonObject.title_image_url,
            jsonObject.position_index,
            jsonObject.content_type,
            jsonObject.content_data
        );
    }

    static toJson(entity: TopicCoverChannelItem): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            title: string,
            title_image_url: string,
            position_index: number,
            content_type: ContentTypeEnum,
            content_data: string
        } = {
                title: entity.title,
                title_image_url: entity.titleImageUrl,
                position_index: entity.positionIndex,
                content_type: entity.contentType,
                content_data: entity.contentData
            };

        return jsonObject;
    }
}
