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

const wantsToCreateWaterPokemon = true;
if (wantsToCreateWaterPokemon) {
  const newPokemon = new WaterPokemonCreator();
  console.log(
    `The pokémon named ${newPokemon.name} is able to surf? ${
      newPokemon.canSurf ? "yes" : "no"
    }.`
  );
  newPokemon.sound();
}
