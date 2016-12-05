import { EntityIdUtil } from "./entity-id";

export enum ContentTypeEnum {
    MCL_NEWS_ARTICLE_TMPL_TYPE0 = <any>'MCL_NEWS_ARTICLE_TMPL_TYPE0',
    MCL_VIDEO_ARTICLE_TMPL_TYPE0 = <any>'MCL_VIDEO_ARTICLE_TMPL_TYPE0'
}

export class TopicMoreSearchChannelItem {
    constructor(
        public title: string,
        public titleImageUrl: string,
        public positionIndex: number,
        public contentType: ContentTypeEnum,
        public contentData: string
    ) { }

    static zero(): TopicMoreSearchChannelItem {
        return new TopicMoreSearchChannelItem(
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

        return new TopicMoreSearchChannelItem(
            jsonObject.title,
            jsonObject.title_image_url,
            jsonObject.position_index,
            jsonObject.content_type,
            jsonObject.content_data
        );
    }

    static toJson(entity: TopicMoreSearchChannelItem): any {
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