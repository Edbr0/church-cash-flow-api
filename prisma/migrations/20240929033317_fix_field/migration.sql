/*
  Warnings:

  - The primary key for the `movement_category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ategory_id` on the `movement_category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "movement_category" DROP CONSTRAINT "movement_category_pkey",
DROP COLUMN "ategory_id",
ADD COLUMN     "category_id" SERIAL NOT NULL,
ADD CONSTRAINT "movement_category_pkey" PRIMARY KEY ("category_id");
