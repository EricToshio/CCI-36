function makeCircle() {

    // Configurações e variaveis gerais
    var group = new THREE.Group()
    var texture = new THREE.TextureLoader().load("wood.jpg");

    // Gerar uma das pernas
    var leg_geom= new THREE.CylinderGeometry( 0.3, 0.1, 5, 32 );
    var leg_mat= new THREE.MeshLambertMaterial({map:texture})
    var leg = new THREE.Mesh(leg_geom, leg_mat)

    // Gerar as outras pernas a partir da exitente
    positions=[ [0,0], [7, 0], [7, 4], [0, 4] ]
    for (var i=0; i<positions.length; i++)
    {
        x=positions[i][0]
        z=positions[i][1]
        m = leg.clone()
        m.position.x=x
        m.position.z=z
        m.position.y=5/2
        group.add(m)
    }

    // Gerar superficie horizontal da mesa
    var circle_geom= new THREE.CylinderGeometry( 5, 5, 0.2, 32 );
    var circle_mat= new THREE.MeshLambertMaterial({map:texture})
    var circle = new THREE.Mesh(circle_geom, circle_mat)
    circle.position.x = 7/2
    circle.position.y = 5
    circle.position.z = 4/2
    group.add(circle);

    // Gerar livro
    var book = makeBook();
    book.rotation.x = -Math.PI/2.0;
    book.position.y = 5.3;
    book.position.x = 2;
    group.add(book);

    // Retorna mesa feita
    return group;
}
