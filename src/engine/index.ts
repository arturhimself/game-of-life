class Engine {
  private intervalId = 0;

  static getAreaCount(index: number, field: number[]): number {
    const areaRowSize = Math.sqrt(field.length);

    const topPart = field
      .slice(index - areaRowSize - 1, index - areaRowSize + 2)
      .filter((v) => v).length;

    const middlePart =
      field.slice(index - 1, index + 2).filter((v) => v).length - field[index];

    const bottomPart = field
      .slice(index + areaRowSize - 1, index + areaRowSize + 2)
      .filter((v) => v).length;

    return topPart + middlePart + bottomPart;
  }

  public getNextGen(cells: number[]) {
    return cells
      .map((cell, index) => [cell, Engine.getAreaCount(index, cells)])
      .map((cell: number[]) => {
        const [alivePast, count] = cell;
        let isAlive = 0;

        if (alivePast && count > 1 && count < 4) {
          isAlive = 1;
        } else if (!alivePast && count === 3) {
          isAlive = 1;
        } else {
          isAlive = 0;
        }
        return isAlive;
      });
  }

  public updateInterval(interval: any) {
    this.intervalId = interval;
  }

  public clearInterval() {
    clearInterval(this.intervalId);
  }
}

export { Engine };
