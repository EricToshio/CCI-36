function makeDesk() {

    var color_desk = 0x8B4513;
    var group = new THREE.Group()


    //pes

    var leg_geom= new THREE.BoxGeometry(0.6,5,0.6)
    var leg_mat= new THREE.MeshLambertMaterial({color:color_desk})
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
    var horizontal_geom= new THREE.BoxGeometry(10,0.4,6)
    var horizontal_mat= new THREE.MeshLambertMaterial({color:color_desk})
    var horizontal = new THREE.Mesh(horizontal_geom, horizontal_mat)
    horizontal.position.x = 7/2
    horizontal.position.y = 5
    horizontal.position.z = 4/2

    group.add(horizontal);

    return group;
}