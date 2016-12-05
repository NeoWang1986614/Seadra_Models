import { EntityIdUtil } from "./entity-id";
import { CategoryMoreTabContainer } from "./category-more-tab-container";

export class CategoryMore {

    constructor(
        public tabs: CategoryMoreTabContainer[]
    ) { }

    static zero(): CategoryMore {
        return new CategoryMore(
            []
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new CategoryMore(
            jsonObject.tabs
        );
    }

    static toJson(entity: CategoryMore): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            tabs: CategoryMoreTabContainer[];
        } = {
                tabs: entity.tabs
            };

        return jsonObject;
    }
}