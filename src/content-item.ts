import { EntityIdUtil } from "./entity-id";

export enum ContentTypeEnum {
    MCL_ARTICLE_TYPE0 = <any>'MCL_ARTICLE_TYPE0',
    MCL_VIDEO_TYPE0 = <any>'MCL_VIDEO_TYPE0'
}

export class ContentItem {
    constructor(
        public entityId: string,
        public contentType: ContentTypeEnum,
        public contentData: string,
        public createTime: number,
    ) { }

    static zero(): ContentItem {
        return new ContentItem(
            EntityIdUtil.createEntityId(EntityIdUtil.newCreateEntityIdPart()),
            null,
            "",
            0
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new ContentItem(
            jsonObject.entity_id,
            jsonObject.content_type,
            jsonObject.content_data,
            jsonObject.create_time
        );
    }

    static toJson(entity: ContentItem): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            entity_id: string;
            content_type: ContentTypeEnum;
            content_data: string;
            create_time: number;
        } = {
            entity_id: entity.entityId,
            content_type: entity.contentType,
            content_data: entity.contentData,
            create_time: entity.createTime
        };

        return jsonObject;
    }
}
