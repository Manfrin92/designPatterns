abstract class Pokemon {
  public abstract name: string;
  public abstract sound(): void;
}

class WaterPokemonCreator implements Pokemon {
  name = "Lapras";
  canSurf = true;
  sound(): void {
    console.log("Water");
  }
}

class SteelPokemonCreator implements Pokemon {
  name = "Steelix";
  sound(): void {
    console.log("Steel");
  }
}

function clientCode(creator: Pokemon) {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.sound());
}
clientCode(new WaterPokemonCreator());
console.log("==");
clientCode(new SteelPokemonCreator());
