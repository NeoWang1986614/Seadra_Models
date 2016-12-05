import { EntityIdUtil } from "./entity-id";
import { ContentTypeEnum } from './content-item';

export class ShufflingFigureChannelItem {
    constructor(
        public titleImageUrl: string,
        public contentType: ContentTypeEnum,
        public contentData: string
    ) { }

    static zero(): ShufflingFigureChannelItem {
        return new ShufflingFigureChannelItem(
            "",
            null,
            ""
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new ShufflingFigureChannelItem(
            jsonObject.title_image_url,
            jsonObject.content_type,
            jsonObject.content_data
        );
    }

    static toJson(entity: ShufflingFigureChannelItem): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            title_image_url: string,
            content_type: ContentTypeEnum,
            content_data: string
        } = {
                title_image_url: entity.titleImageUrl,
                content_type: entity.contentType,
                content_data: entity.contentData
            };

        return jsonObject;
    }
}
