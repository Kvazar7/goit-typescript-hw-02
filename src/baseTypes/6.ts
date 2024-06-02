/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log(message);
}

showMessage('Hello, world!')


function calc(num1: number, num2: number) {
  return num1 + num2;
}

calc(15, 50)


function customError(message: string): never {
  throw new Error('Error');
}

customError('Oops, something wrong')

export {};