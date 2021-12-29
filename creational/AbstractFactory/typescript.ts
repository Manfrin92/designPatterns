// All generic types can implement a super class interface
interface Chair {
  hasLegs(): number;
  sitOn(): void;
}

class VictorianChair implements Chair {
  hasLegs(): number {
    return 4;
  }
  sitOn(): void {
    console.log("Sitting on a Victorian chair.");
  }
}

class ModernChair implements Chair {
  hasLegs(): number {
    return 4;
  }
  sitOn(): void {
    console.log("Sitting on a Modern chair.");
  }
}

interface FurnitureFactory {
  createChair(): Chair;
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }
}

class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }
}

interface AbstractFactory {
  createVictorianFactory(): VictorianFurnitureFactory;

  createModernFactory(): ModernFurnitureFactory;
}

class ConcreteFurnitureFactory implements AbstractFactory {
  createVictorianFactory(): VictorianFurnitureFactory {
    return new VictorianFurnitureFactory();
  }
  createModernFactory(): ModernFurnitureFactory {
    return new ModernFurnitureFactory();
  }
}

const factoryInClientCode = new ConcreteFurnitureFactory();
const victorianFactory = factoryInClientCode.createVictorianFactory();
const modernFactory = factoryInClientCode.createModernFactory();

const optionOne = "victorian";
const optionTwo = "modern";

if (optionOne === "victorian") {
  const victorianChair = victorianFactory.createChair();
  victorianChair.sitOn();
}
if (optionTwo === "modern") {
  const modernChair = modernFactory.createChair();
  modernChair.sitOn();
}
