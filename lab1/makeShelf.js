function makeShelf() {

    var texture = new THREE.TextureLoader().load("wood.jpg");
    //vertical
    var color_shelf = 0x8B4513;
    var width = 7;
    var vertical_geom= new THREE.BoxGeometry(5,15,0.1)
    // var vertical_mat= new THREE.MeshLambertMaterial({color:color_shelf})
    var vertical_mat= new THREE.MeshLambertMaterial({map:texture})
    var vertical = new THREE.Mesh(vertical_geom, vertical_mat)
    vertical.position.x = 0
    vertical.position.y = 0

    var vertical2 = vertical.clone();
    vertical2.position.z = width;

    //horizontal
    var horizontal_geom= new THREE.BoxGeometry(5,0.1,width)
    // var horizontal_mat= new THREE.MeshLambertMaterial({color:color_shelf})
    var horizontal_mat= new THREE.MeshLambertMaterial({map:texture})
    var horizontal = new THREE.Mesh(horizontal_geom, horizontal_mat)
    horizontal.position.x = 0
    horizontal.position.y = 0
    horizontal.position.z = width/2

    var group = new THREE.Group();
    group.add(horizontal);
    var height = [-4.8,4.8]
    for(var i=0;i<height.length;i++){
        var new_horizontal = horizontal.clone();
        new_horizontal.position.y = height[i];
        group.add(new_horizontal);
    }

    group.add(vertical);
    group.add(vertical2);
    return group;
}