-- CreateTable
CREATE TABLE "cash_flow" (
    "cash_flow_id" SERIAL NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL,
    "cash_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_user" TEXT NOT NULL,
    "updated_user" TEXT,
    "cancel_user" TEXT,

    CONSTRAINT "cash_flow_pkey" PRIMARY KEY ("cash_flow_id")
);

-- AddForeignKey
ALTER TABLE "cash_flow" ADD CONSTRAINT "cash_flow_cash_id_fkey" FOREIGN KEY ("cash_id") REFERENCES "cash_type"("cash_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cash_flow" ADD CONSTRAINT "cash_flow_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "movement_category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
