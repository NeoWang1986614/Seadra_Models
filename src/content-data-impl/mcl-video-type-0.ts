import { EntityIdUtil } from "../entity-id";

export class MclVideoType0 {
    constructor(
        public videoArticleId: string
    ) { }

    static zero(): MclVideoType0 {
        return new MclVideoType0(
            EntityIdUtil.createEntityId(EntityIdUtil.newCreateEntityIdPart())
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new MclVideoType0(
            jsonObject.video_article_id,
        );
    }

    static toJson(entity: MclVideoType0): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            video_article_id: string;
        } = {
            video_article_id: entity.videoArticleId
        };

        return jsonObject;
    }
}
