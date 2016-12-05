import { EntityIdUtil } from "./entity-id";

export enum ChannelTypeEnum {
    MCL_ANNOUNCEMENT = <any>'MCL_ANNOUNCEMENT',
    MCL_CATEGORY = <any>'MCL_CATEGORY',
    MCL_INFO = <any>'MCL_INFO',
    MCL_SHUFFLING_FIGURE = <any>'MCL_SHUFFLING_FIGURE',
    MCL_TOPIC = <any>'MCL_TOPIC',
    MCL_NEWS = <any>'MCL_NEWS',
    MCL_RECOMMENDED = <any>'MCL_RECOMMENDED'
}

export class Channel {
    constructor(
        public entityId: string,
        public name: string,
        public type: ChannelTypeEnum,
        public description: string,
        public creatTime: number
    ) { }

    static zero(): Channel {
        return new Channel(
            EntityIdUtil.createEntityId(EntityIdUtil.newCreateEntityIdPart()),
            "",
            null,
            "",
            0
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new Channel(
            jsonObject.entity_id,
            jsonObject.name,
            jsonObject.type,
            jsonObject.description,
            jsonObject.creat_time
        );
    }

    static toJson(entity: Channel): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            entity_id: string;
            name: string;
            type: ChannelTypeEnum;
            description: string;
            creat_time: number;
        } = { 
            entity_id: entity.entityId,
            name: entity.name,
            type: entity.type,
            description: entity.description,
            creat_time: entity.creatTime
        };  

        return jsonObject;
    }
}
