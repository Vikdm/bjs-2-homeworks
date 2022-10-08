// задача 1

function parseCount(value) {
  const number = Number.parseInt(value);
  if (Number.isNaN(number)) {
    throw (error = new Error("Невалидное значение"));
  }
  return number;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

// задача 2

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw (error = new Error("Треугольник с такими сторонами не существует"));
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return (this.perimeter = this.a + this.b + this.c);
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    return (this.area = +Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c)
    ).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
        return new Triangle (a,b,c);
  } catch (error) {
    return {
      getPerimeter: () => {
        return "Ошибка! Треугольник не существует";
      },
      getArea: () => {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
