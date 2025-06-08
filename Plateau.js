class Plateau {
    constructor() {
        this.etats = [];
        this.villes = [];
        this.routes = new Array(78);
        this.initialiseEtats();
        this.initialiseVilles();
        this.initialiseRoutes();
    }

    getEtats() {
        return this.etats;
    }

    getVilles() {
        return this.villes;
    }

    getRoutes() {
        return this.routes;
    }

    initialiseEtats() {
        this.etats = [
            new Etat("California", "50,50 150,50 150,150 50,150"),
            new Etat("Texas", "200,50 300,50 300,150 200,150")
        ];
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

    initialiseRoutes() {
        this.routes[0] = new Route(this.rechercheVille("Vancouver"), this.rechercheVille("Seattle"), "gray");
        this.routes[1] = new Route(this.rechercheVille("Little Rock"), this.rechercheVille("New Orleans"), "gray");
        this.routes[2] = new Route(this.rechercheVille("New York"), this.rechercheVille("Washington"), "gray");
    }

    rechercheVille(nom) {
        return this.villes.find(ville => ville.getNom() === nom) || null;
    }
}
