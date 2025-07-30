export class Character {
  constructor({
    id,
    name,
    ki,
    maxKi,
    race,
    gender,
    description,
    image,
    affiliation,
    originPlanet = null,
    transformations = []
  }) {
    this.id = id;
    this.name = name;
    this.ki = ki;
    this.maxKi = maxKi;
    this.race = race;
    this.gender = gender;
    this.description = description;
    this.image = image;
    this.affiliation = affiliation;
    this.originPlanet = originPlanet;
    this.transformations = transformations;
  }

  // Ejemplo de método útil
  hasTransformations() {
    return this.transformations.length > 0;
  }

  getShortDescription(limit = 100) {
    return this.description.length > limit
      ? this.description.slice(0, limit) + "..."
      : this.description;
  }
}
