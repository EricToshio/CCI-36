function makeFloor() {

    // Gera um azulejo do chão
    tile_square_geo = new THREE.PlaneGeometry(10,10)
    tile_square_mat = new THREE.MeshStandardMaterial({color:0x000000})
    tile_square     = new THREE.Mesh(tile_square_geo, tile_square_mat)
    tile_square.rotation.x = -Math.PI/2.0
    tile_square.position.x = -20
    tile_square.position.z = -30

    // Adiciona azulejos
    var tileGroup = new THREE.Group(); 
    for (var i=0;i<=6;i++){
        for(var j=0;j<=4;j++){
            if( (i%2 == 0 && j%2 == 0) || (i%2 == 1 && j%2 == 1) ) {
                // Adiciona azulejo preto
                var tileAdd = tile_square.clone();
                tileAdd.position.x = -20 + j*10;
                tileAdd.position.z = -30 + i*10;
                tileGroup.add(tileAdd);
            } else {
                // Adiciona azulejo branco
                var tileAdd = tile_square.clone();
                tileAdd.material = tile_square.material.clone();
                tileAdd.material.color.set(0xFFFFFF);
                tileAdd.position.x = -20 + j*10;
                tileAdd.position.z = -30 + i*10;
                tileGroup.add(tileAdd);
            }
        }
    }
    // Retorna chão pronto
    return tileGroup;
}