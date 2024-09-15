-- CreateTable
CREATE TABLE "cash_type" (
    "cash_id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_user" TEXT NOT NULL,
    "updated_user" TEXT,

    CONSTRAINT "cash_type_pkey" PRIMARY KEY ("cash_id")
);

-- CreateTable
CREATE TABLE "movement_category" (
    "ategory_id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_user" TEXT NOT NULL,
    "updated_user" TEXT,

    CONSTRAINT "movement_category_pkey" PRIMARY KEY ("ategory_id")
);
