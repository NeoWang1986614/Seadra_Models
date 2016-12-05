import { EntityIdUtil } from './entity-id';

import { Channel } from './channel';

export enum PublishmentStatusEnum {
    PUBLISHED = <any>'PUBLISHED',
    WITHDRAW = <any>'WITHDRAW'
}

export class Publishment {
    constructor(
        public entityId: string,
        public channel: Channel,
        public channelData: string,
        public createTime: number,
        public lastUpdateTime: number,
        public status: PublishmentStatusEnum
    ) { }

    static zero(): Publishment {
        return new Publishment(
            EntityIdUtil.createEntityId(EntityIdUtil.newCreateEntityIdPart()),
            Channel.zero(),
            "",
            0,
            0,
            null
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new Publishment(
            jsonObject.entity_id,
            jsonObject.channel,
            jsonObject.channel_data,
            jsonObject.create_time,
            jsonObject.last_update_time,
            jsonObject.status
        );
    }

    static toJson(entity: Publishment): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            entity_id: string;
            channel: Channel;
            channel_data: string;
            create_time: number;
            lats_update_time: number;
            status: PublishmentStatusEnum;
        } = {
            entity_id: entity.entityId,
            channel: entity.channel,
            channel_data: entity.channelData,
            create_time: entity.createTime,
            lats_update_time: entity.lastUpdateTime,
            status: entity.status
        };

        return jsonObject;
    }
}
