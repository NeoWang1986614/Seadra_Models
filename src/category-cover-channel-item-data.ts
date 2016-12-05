import { ContentTypeEnum } from './content-item';

export class CategoryCoverChannelItemData {

    constructor(
        public title: string,
        public titleImageUrl: string,
        public authorName: string,
        public views: number,
        public videoLength: number,
        public positionIndex: number,
        public contentType: ContentTypeEnum,
        public contetnData: string
    ) { }

    static zero(): CategoryCoverChannelItemData {
        return new CategoryCoverChannelItemData(
            '',
            '',
            '',
            0,
            0,
            0,
            null,
            ''
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new CategoryCoverChannelItemData(
            jsonObject.title,
            jsonObject.title_image_url,
            jsonObject.author_name,
            jsonObject.views,
            jsonObject.video_length,
            jsonObject.position_index,
            jsonObject.content_type,
            jsonObject.content_data
        );
    }

    static toJson(entity: CategoryCoverChannelItemData): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            title: string;
            title_image_url: string;
            author_name: string;
            views: number;
            video_length: number;
            position_index: number;
            content_type: ContentTypeEnum;
            content_data: string;
        } = {
                title: entity.title,
                title_image_url: entity.titleImageUrl,
                author_name: entity.authorName,
                views: entity.views,
                video_length: entity.videoLength,
                position_index: entity.positionIndex,
                content_type: entity.contentType,
                content_data: entity.contetnData
            };

        return jsonObject;
    }
}