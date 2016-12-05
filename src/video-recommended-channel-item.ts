import { ContentTypeEnum } from './content-item';

export class VideoRecommendedChannelItem {
    constructor(
        public title: string,
        public titleImageUrl: string,
        public views: number,
        public videoLength: number,
        public positionIndex: number,
        public contentType: ContentTypeEnum,
        public contentData: string
    ) { }

    static zero(): VideoRecommendedChannelItem {
        return new VideoRecommendedChannelItem(
            "",
            "",
            0,
            0,
            0,
            null,
            ""
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new VideoRecommendedChannelItem(
            jsonObject.title,
            jsonObject.title_image_url,
            jsonObject.views,
            jsonObject.video_length,
            jsonObject.position_index,
            jsonObject.content_type,
            jsonObject.content_data
        );
    }

    static toJson(entity: VideoRecommendedChannelItem): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            title: string;
            title_image_url: string,
            views: number;
            video_length: number;
            position_index: number;
            content_type: ContentTypeEnum;
            content_data: string;
        } = {
                title: entity.title,
                title_image_url: entity.titleImageUrl,
                views: entity.views,
                video_length: entity.videoLength,
                position_index: entity.positionIndex,
                content_type: entity.contentType,
                content_data: entity.contentData
            };

        return jsonObject;
    }
}