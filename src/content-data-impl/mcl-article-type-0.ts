import { EntityIdUtil } from "../entity-id";

export class MclArticleType0 {
    constructor(
        public newsArticleId: string
    ) { }

    static zero(): MclArticleType0 {
        return new MclArticleType0(
            EntityIdUtil.createEntityId(EntityIdUtil.newCreateEntityIdPart())
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new MclArticleType0(
            jsonObject.news_article_id,
        );
    }

    static toJson(entity: MclArticleType0): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            news_article_id: string;
        } = {
            news_article_id: entity.newsArticleId
        };

        return jsonObject;
    }
}
