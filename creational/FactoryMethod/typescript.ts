interface Animal {
  name: string;
  animalSound(): void;
}

abstract class AnimalFactory {
  public abstract factoryMethod(): Animal;
  public abstract animalSound(animalSound: string): void;
}

class Factory1 implements AnimalFactory {
  public animalSound(animalSound: string): void {
    console.log(animalSound);
  }
  public factoryMethod(): Animal {
    console.log("do some logic specific for this kind of creation - no sound");

    const newAnimalFromFactory1: Animal = {
      name: "duck",
      animalSound: () => {},
    };
    return newAnimalFromFactory1;
  }
}

class Factory2 implements AnimalFactory {
  public animalSound(animalSound: string): void {
    console.log(animalSound);
  }
  public factoryMethod(): Animal {
    console.log("do a different logic");
    const newAnimalFromFactory2: Animal = {
      name: "cat",
      animalSound: () => console.log("second sound"),
    };
    return newAnimalFromFactory2;
  }
}

function clientCode(creator: AnimalFactory) {
  const newAnimal = creator.factoryMethod();
  console.log("name of the animal: ", newAnimal.name, "sound: ");
  newAnimal.animalSound();
}

clientCode(new Factory1());
clientCode(new Factory2());
