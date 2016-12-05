import { EntityIdUtil } from './entity-id';

export class AdminUser {
    constructor(
        public entityId: string,
        public name: string
    ) { }

    static zero(): AdminUser {
        return new AdminUser(
            EntityIdUtil.createEntityId(EntityIdUtil.newCreateEntityIdPart()),
            ""
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new AdminUser(
            jsonObject.entity_id,
            jsonObject.name
        );
    }

    static toJson(entity: AdminUser): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            entity_id: string;
            name: string
        } = {
            entity_id: entity.entityId,
            name: entity.name
        };

        return jsonObject;
    }
}
