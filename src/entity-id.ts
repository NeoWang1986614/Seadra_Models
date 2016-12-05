export interface EntityData {
    entityId: string;
}

export class EntityIdUtil {

    static createEntityId(...entityIdParts: string[]): string {
        if (null == entityIdParts || 0 == entityIdParts.length) {
            return null;
        }
        
        let entityId = entityIdParts[0];
        for (let i = 1; i < entityIdParts.length; i++ ) {
            entityId += "-";
            entityId += entityIdParts[i];
        }
        return entityId;
    }

    static isNewCreateEntity(entityId: string): boolean {
        let parts = entityId.split("-");
        return EntityIdUtil.newCreateEntityIdPart() == parts[parts.length-1];
    }

    static newCreateEntityIdPart(): string {
        return "0";
    }

    static arraySubstract<T extends EntityData>(a: T[], b: T[]): T[] {
        let c = new Array<T>();
        let idx = new Map<string, T>();
        b.forEach(e => {
            idx.set(e.entityId, e);
        });
        a.forEach(e => {
            if (null == idx.get(e.entityId)) {
                c.push(e);
            }
        });
        return c;
    }
}
