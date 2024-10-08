import { HttpStatus, HttpException } from '@nestjs/common';

function getErrorData(error) {
  if (typeof error == 'object') {
    return {
      message: error.message ? error.message : 'Internal server error',
      statusCode: error.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
    };
  }

  return {
    message: error,
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  };
}

export function Exception(error, statusCode = null) {
  const errorData = getErrorData(error);
  throw new HttpException(errorData, statusCode ?? errorData.statusCode);
}
