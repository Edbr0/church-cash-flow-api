import { HttpStatus, HttpException } from '@nestjs/common';

function getErrorData(error) {
  if (typeof error == 'object') {
    return {
      message: error.message ? 'Internal server error: ' + error.message : 'Internal server error',
      statusCode: error.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
    };
  }

  return {
    message: 'Internal server error: ' + error,
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  };
}

export function InternalServerError(error) {
  throw new HttpException(getErrorData(error), HttpStatus.INTERNAL_SERVER_ERROR);
}
