class Etat {
    constructor(nom, contour) {
        this.nom = nom;
        this.contour = contour;
    }

    getNom() {
        return this.nom;
    }

    getContour() {
        return this.contour;
    }

      initialiseEtats() {
        this.etats = [
          new Etat("California", "50,50 150,50 150,150 50,150"),
          new Etat("Texas", "200,50 300,50 300,150 200,150")
        ];
      }

}
