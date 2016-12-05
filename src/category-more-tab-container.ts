import { EntityIdUtil } from "./entity-id";

export class CategoryMoreTabContainer {

    constructor(
        public entityId: string,
        public title: string
    ) { }

    static zero(): CategoryMoreTabContainer {
        return new CategoryMoreTabContainer(
            EntityIdUtil.createEntityId(EntityIdUtil.newCreateEntityIdPart()),
            ""
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new CategoryMoreTabContainer(
            jsonObject.entity_id,
            jsonObject.title
        );
    }

    static toJson(entity: CategoryMoreTabContainer): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            entity_id: string;
            title: string;
        } = {
                entity_id: entity.entityId,
                title: entity.title
            };

        return jsonObject;
    }
}