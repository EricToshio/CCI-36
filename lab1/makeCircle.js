function makeCircle() {

    var color_circle = 0x8B4513;
    var group = new THREE.Group()

    var texture = new THREE.TextureLoader().load("wood.jpg");

    //pes

    var leg_geom= new THREE.CylinderGeometry( 0.3, 0.1, 5, 32 );
    //new THREE.BoxGeometry(0.6,5,0.6)
    //var leg_mat= new THREE.MeshLambertMaterial({color:color_circle})
    var leg_mat= new THREE.MeshLambertMaterial({map:texture})
    var leg = new THREE.Mesh(leg_geom, leg_mat)

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

    //horizontal
    var circle_geom= new THREE.CylinderGeometry( 5, 5, 0.2, 32 );
    var circle_mat= new THREE.MeshLambertMaterial({map:texture})
    var circle = new THREE.Mesh(circle_geom, circle_mat)
    circle.position.x = 7/2
    circle.position.y = 5
    circle.position.z = 4/2
    //circle.rotation.x = -Math.PI/2.0

    group.add(circle);

    return group;
}
