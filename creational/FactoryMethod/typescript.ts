interface IFactory {
  drive(miles: number): void;
}

class Bike implements IFactory {
  drive(miles: number): void {
    console.log(`Driving ${miles} miles by bike.`);
  }
}

class Scooter implements IFactory {
  drive(miles: number): void {
    console.log(`Driving ${miles} miles by scooter.`);
  }
}

interface VehicleFactory {
  getVehicle(vehicle: string): IFactory;
}

class ConcreteVehicleFactory implements VehicleFactory {
  getVehicle(vehicle: string): IFactory {
    switch (vehicle) {
      case "Scooter":
        return new Scooter();
      case "Bike":
        return new Bike();
      default:
        throw new Error("Should select between 'Scooter' and 'Bike'");
    }
  }
}

// in the code

const factory = new ConcreteVehicleFactory();

const scooter: IFactory = factory.getVehicle("Scooter");

scooter.drive(200);

const bike: IFactory = factory.getVehicle("Bike");

bike.drive(3000);
