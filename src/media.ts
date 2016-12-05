import { EntityIdUtil } from './entity-id';

import { AdminUser } from './admin-user';

export enum MediaAvailabilityStatusEnum {
    OFFLINE = <any>'OFFLINE',
    ONLINE = <any>'ONLINE'
}

export class Media {
    constructor(
        public entityId: string,
        public title: string,
        public content: string,
        public creator: AdminUser,
        public availableTime: number,
        public availabilityStatus: MediaAvailabilityStatusEnum,
        public keywords: string[],
        public createTime: number,
        public lastUpdateTime: number
    ) { }

    static zero(): Media {
        return new Media(
            EntityIdUtil.createEntityId(EntityIdUtil.newCreateEntityIdPart()),
            "",
            "",
            AdminUser.zero(),
            0,
            null,
            [],
            0,
            0
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new Media(
            jsonObject.entity_id,
            jsonObject.title,
            jsonObject.content,
            AdminUser.fromJson(jsonObject.creator),
            jsonObject.available_time,
            jsonObject.availability_status,
            jsonObject.keywords,
            jsonObject.create_time,
            jsonObject.last_update_time
        );
    }

    static toJson(entity: Media): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            entity_id: string;
            title: string,
            content: string,
            creator: any,
            available_time: number,
            availability_status: MediaAvailabilityStatusEnum,
            keywords: string[],
            create_time: number,
            last_update_time: number
        } = {
                entity_id: entity.entityId,
                title: entity.title,
                content: entity.content,
                creator: AdminUser.toJson(entity.creator),
                available_time: entity.availableTime,
                availability_status: entity.availabilityStatus,
                keywords: entity.keywords,
                create_time: entity.createTime,
                last_update_time: entity.lastUpdateTime
            };

        return jsonObject;
    }
}
