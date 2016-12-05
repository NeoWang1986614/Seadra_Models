import { EntityIdUtil } from "./entity-id";

export enum TagTypeEnum {
    ARTICLE = <any>'ARTICLE',
    ADMIN_USER = <any>'ADMIN_USER'
}

export class Tag {
    constructor(
        public entityId: string,
        public name: string,
        public description: string,
        public createTime: number,
        public authorId: string,
        public tagType: TagTypeEnum
    ) { }

    static zero(): Tag {
        return new Tag(
            EntityIdUtil.createEntityId(EntityIdUtil.newCreateEntityIdPart()),
            "",
            "",
            0,
            EntityIdUtil.createEntityId(EntityIdUtil.newCreateEntityIdPart()),
            null
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new Tag(
            jsonObject.entity_id,
            jsonObject.name,
            jsonObject.description,
            jsonObject.create_time,
            jsonObject.author_id,
            jsonObject.tag_type
        );
    }

    static toJson(entity: Tag): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            entity_id: string;
            name: string,
            description: string,
            create_time: number,
            author_id: string,
            tag_type: TagTypeEnum
        } = {
                entity_id: entity.entityId,
                name: entity.name,
                description: entity.description,
                create_time: entity.createTime,
                author_id: entity.authorId,
                tag_type: entity.tagType
            };

        return jsonObject;
    }
}
