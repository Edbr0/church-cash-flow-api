-- CreateTable
CREATE TABLE "units" (
    "unit_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "register" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_user" TEXT NOT NULL,
    "updated_user" TEXT,

    CONSTRAINT "units_pkey" PRIMARY KEY ("unit_id")
);
