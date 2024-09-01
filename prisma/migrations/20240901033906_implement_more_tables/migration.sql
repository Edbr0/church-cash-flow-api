-- CreateTable
CREATE TABLE "app_modules" (
    "module_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_user" TEXT NOT NULL,
    "updated_user" TEXT,

    CONSTRAINT "app_modules_pkey" PRIMARY KEY ("module_id")
);

-- CreateTable
CREATE TABLE "access_profile_module" (
    "sequence_id" SERIAL NOT NULL,
    "access_profile_id" INTEGER NOT NULL,
    "module_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_user" TEXT NOT NULL,

    CONSTRAINT "access_profile_module_pkey" PRIMARY KEY ("sequence_id")
);

-- AddForeignKey
ALTER TABLE "access_profile_module" ADD CONSTRAINT "fk_access_profile" FOREIGN KEY ("access_profile_id") REFERENCES "access_profile"("access_profile_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "access_profile_module" ADD CONSTRAINT "fk_module_id" FOREIGN KEY ("module_id") REFERENCES "app_modules"("module_id") ON DELETE CASCADE ON UPDATE CASCADE;
