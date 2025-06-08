class Ville {
    constructor(nom, x, y) {
        this.nom = nom;
        this.x = x;
        this.y = y;
    }

    getNom() {
        return this.nom;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    versChaine() {
        return `${this.nom} (${this.x}, ${this.y})`;
    }


      initialiseVilles() {
        this.villes = [
          new Ville("Vancouver", 80, 70),
          new Ville("Seattle", 120, 90),
          new Ville("Little Rock", 220, 100),
          new Ville("New Orleans", 260, 130),
          new Ville("New York", 280, 60),
          new Ville("Washington", 310, 90)
        ];
      }

            rechercheVille(nom) {
        return this.villes.find(v => v.getNom() === nom);
      }

}
