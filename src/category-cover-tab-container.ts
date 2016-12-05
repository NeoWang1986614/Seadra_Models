import { EntityIdUtil } from './entity-id';
import { Publishment } from './publishment'
export class CategoryCoverTabContainer {

    constructor(
        public entityId: string,
        public title: string,
        public items: Publishment[]
    ) { }

    static zero(): CategoryCoverTabContainer {
        return new CategoryCoverTabContainer(
            EntityIdUtil.createEntityId(EntityIdUtil.newCreateEntityIdPart()),
            "",
            []
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new CategoryCoverTabContainer(
            jsonObject.entity_id,
            jsonObject.title,
            jsonObject.items
        );
    }

    static toJson(entity: CategoryCoverTabContainer): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            entity_id: string;
            title: string;
            items: Publishment[];
        } = {
                entity_id: entity.entityId,
                title: entity.title,
                items: entity.items
            };

        return jsonObject;
    }
}