class Jeu {
    constructor() {
        this.plateau = new Plateau();
    }

    affichePlateau() {
        const svg = document.getElementById("carte");

        this.plateau.getEtats().forEach(etat => {
            const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            poly.setAttribute("points", etat.getContour());
            poly.setAttribute("class", "etat");
            svg.appendChild(poly);
        });

        this.plateau.getRoutes().forEach(route => {
            if (!route) return;
            const l = document.createElementNS("http://www.w3.org/2000/svg", "line");
            l.setAttribute("x1", route.getVilleDepart().getX());
            l.setAttribute("y1", route.getVilleDepart().getY());
            l.setAttribute("x2", route.getVilleArrivee().getX());
            l.setAttribute("y2", route.getVilleArrivee().getY());
            l.setAttribute("stroke", route.getCouleur());
            l.setAttribute("class", "route");
            svg.appendChild(l);
        });

        this.plateau.getVilles().forEach(v => {
            const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            c.setAttribute("cx", v.getX());
            c.setAttribute("cy", v.getY());
            c.setAttribute("r", 5);
            c.setAttribute("class", "ville");
            svg.appendChild(c);

            const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
            t.setAttribute("x", v.getX() + 7);
            t.setAttribute("y", v.getY());
            t.textContent = v.getNom();
            svg.appendChild(t);
        });
    }
}

const jeu = new Jeu();
jeu.affichePlateau();
