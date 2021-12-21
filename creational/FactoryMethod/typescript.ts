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
    console.log("do some logic specific for this kind of creation");
    function animalSoundOne() {
      console.log("first sound");
    }
    const newAnimalFromFactory1: Animal = {
      name: "duck",
      animalSound: animalSoundOne,
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
    function animalSoundTwo() {
      console.log("second sound");
    }
    const newAnimalFromFactory2: Animal = {
      name: "cat",
      animalSound: animalSoundTwo,
    };
    return newAnimalFromFactory2;
  }
}

function clientCode(creator: AnimalFactory) {
  const newAnimal = creator.factoryMethod();
  console.log("name of the animal: ", newAnimal.name);
  newAnimal.animalSound();
}

clientCode(new Factory1());
clientCode(new Factory2());
