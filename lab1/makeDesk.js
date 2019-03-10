function makeDesk() {

    // Configurações e variaveis gerais
    var group = new THREE.Group()
    var texture = new THREE.TextureLoader().load("wood.jpg");
    
    // Gerar uma das pernas
    var leg_geom= new THREE.BoxGeometry(0.6,5,0.6)
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
    var horizontal_geom= new THREE.BoxGeometry(10,0.4,6)
    var horizontal_mat= new THREE.MeshLambertMaterial({map:texture})
    var horizontal = new THREE.Mesh(horizontal_geom, horizontal_mat)
    horizontal.position.x = 7/2
    horizontal.position.y = 5
    horizontal.position.z = 4/2
    group.add(horizontal);

    // Retorna mesa feita
    return group;
}