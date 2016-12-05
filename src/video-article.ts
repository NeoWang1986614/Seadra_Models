import { EntityIdUtil } from './entity-id';

import { AdminUser } from './admin-user';

import { MediaAvailabilityStatusEnum } from './media';

export class VideoArticle {
    constructor(
        public entityId: string,
        public title: string,
        public videoUrl: string,
        public videoSource: string,
        public videoSourceAuthor: string,
        public creator: AdminUser,
        public availableTime: number,
        public availabilityStatus: MediaAvailabilityStatusEnum,
        public createTime: number,
        public lastUpdateTime: number
    ) { }

    static zero(): VideoArticle {
        return new VideoArticle(
            EntityIdUtil.createEntityId(EntityIdUtil.newCreateEntityIdPart()),
            "",
            "",
            "",
            "",
            AdminUser.zero(),
            0,
            null,
            0,
            0
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new VideoArticle(
            jsonObject.video_article_id,
            jsonObject.title,
            jsonObject.video_url,
            jsonObject.video_source,
            jsonObject.video_source_author,
            AdminUser.fromJson(jsonObject.creator),
            jsonObject.available_time,
            jsonObject.availability_status,
            jsonObject.create_time,
            jsonObject.last_update_time
        );
    }

    static toJson(entity: VideoArticle): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            entity_id: string;
            title: string,
            video_url: string,
            video_source: string,
            video_source_author: string,
            creator: any,
            available_time: number,
            availability_status: MediaAvailabilityStatusEnum,
            create_time: number,
            last_update_time: number
        } = {
                entity_id: entity.entityId,
                title: entity.title,
                video_url: entity.videoUrl,
                video_source: entity.videoSource,
                video_source_author: entity.videoSourceAuthor,
                creator: AdminUser.toJson(entity.creator),
                available_time: entity.availableTime,
                availability_status: entity.availabilityStatus,
                create_time: entity.createTime,
                last_update_time: entity.lastUpdateTime
            };

        return jsonObject;
    }
}
