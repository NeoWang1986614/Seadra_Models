import { ContentTypeEnum } from './content-item';

export class InfoMoreChannelItem {
    constructor(
        public title: string,
        public tagName: string,
        public positionIndex: number,
        public contentType: ContentTypeEnum,
        public contentData: string
    ) { }

    static zero(): InfoMoreChannelItem {
        return new InfoMoreChannelItem(
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

        return new InfoMoreChannelItem(
            jsonObject.title,
            jsonObject.tag_name,
            jsonObject.position_index,
            jsonObject.content_type,
            jsonObject.content_data
        );
    }

    static toJson(entity: InfoMoreChannelItem): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            title: string;
            tag_name: string;
            position_index: number;
            content_type: ContentTypeEnum;
            content_data: string;
        } = {
                title: entity.title,
                tag_name: entity.tagName,
                position_index: entity.positionIndex,
                content_type: entity.contentType,
                content_data: entity.contentData
            };

        return jsonObject;
    }
}