import { EntityIdUtil } from "./entity-id";
import { CategoryCoverTabContainer } from "./category-cover-tab-container";

export class CategoryCover {

    constructor(
        public tabs: CategoryCoverTabContainer[]
    ) { }

    static zero(): CategoryCover {
        return new CategoryCover(
            []
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new CategoryCover(
            jsonObject.tabs
        );
    }

    static toJson(entity: CategoryCover): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            tabs: CategoryCoverTabContainer[];
        } = {
                tabs: entity.tabs
            };

        return jsonObject;
    }
}