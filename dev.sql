SELECT "User"."id",
    "User"."userName",
    "User"."firstName",
    "User"."lastName",
    "User"."email",
    "User"."password",
    "User"."avatarURL",
    "User"."createdAt",
    "User"."updatedAt"
FROM "Users" AS "User"
WHERE "User"."id" = 1;