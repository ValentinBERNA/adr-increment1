class Route {
    constructor(villeDepart, villeArrivee, couleur) {
        this.villeDepart = villeDepart;
        this.villeArrivee = villeArrivee;
        this.couleur = couleur;
    }

    getCouleur() {
        return this.couleur;
    }

    getVilleDepart() {
        return this.villeDepart;
    }

    getVilleArrivee() {
        return this.villeArrivee;
    }

    getNom() {
        return `${this.villeDepart.getNom()} - ${this.villeArrivee.getNom()}`;
    }

    getLongueur() {
        const dx = this.villeArrivee.getX() - this.villeDepart.getX();
        const dy = this.villeArrivee.getY() - this.villeDepart.getY();
        const distance = Math.sqrt(dx * dx + dy * dy);
        const longueur = Math.floor(distance / 20);
        return Math.min(6, Math.max(1, longueur));
    }

    versChaine() {
        return `${this.getNom()} /${this.couleur}-${this.getLongueur()}`;
    }

    getNombrePoints() {
        const longueur = this.getLongueur();
        const points = [0, 1, 2, 4, 7, 10, 15];
        return points[longueur] || 0;
    }



    initialiseRoutes() {
        this.routes.push(new Route(this.rechercheVille("Vancouver"), this.rechercheVille("Seattle"), "gray"));
        this.routes.push(new Route(this.rechercheVille("Little Rock"), this.rechercheVille("New Orleans"), "gray"));
        this.routes.push(new Route(this.rechercheVille("New York"), this.rechercheVille("Washington"), "gray"));
      }
}
