
function makeTiles(material) {

	var tileWidth = 8;
	var radiusHoleOffset = 2.3;

	var extrudeSettings = { depth: 2, bevelEnabled: false};

	var cylinderShape = new THREE.Shape();
	cylinderShape.moveTo( 0, 0 );
	cylinderShape.absarc( 0, 0, tileWidth/2, 0, Math.PI * 2, false );
	var cylinderHolePath = new THREE.Path();
	cylinderHolePath.moveTo( 0, 0 );
	cylinderHolePath.absarc( 0, 0, tileWidth/2 - radiusHoleOffset, 0, Math.PI * 2, true );
	cylinderShape.holes.push( cylinderHolePath );

	var geometry = new THREE.ExtrudeBufferGeometry( cylinderShape, extrudeSettings );
	var internalCylinder = new THREE.Mesh( geometry, material );
	internalCylinder.position.set(0,0,0);
	internalCylinder.scale.set(0.125,0.125,0.125);

	var box = new THREE.Shape();
	box.moveTo(-tileWidth/2,tileWidth/2);
	box.lineTo(tileWidth/2,tileWidth/2);
	box.lineTo(tileWidth/2,-tileWidth/2);
	box.lineTo(-tileWidth/2,-tileWidth/2);
	var holePathBox = new THREE.Path();
	holePathBox.moveTo( 0, 0 );
	holePathBox.absarc( 0, 0, tileWidth/2, 0, Math.PI * 2, true );
	box.holes.push( holePathBox );

	var geometry2 = new THREE.ExtrudeBufferGeometry( box, extrudeSettings );
	var boxMesh = new THREE.Mesh( geometry2, material );
	boxMesh.position.set( 0, 0, 0 );
	boxMesh.scale.set(0.125,0.125,0.125);


	var tile = new THREE.Group();
    tile.add(boxMesh);
    tile.add(internalCylinder);
	
	// var floorGeometry = new THREE.PlaneGeometry( 1, 1 );
	// var floor = new THREE.Mesh(floorGeometry,material);
	// floor.position.set(0,0,-0.01);
 //    tile.add(floor);
    return tile;

}


// var shape = new THREE.Shape();
// 	shape.moveTo( 0, 0 );
// 	shape.absarc( 0, 0, 4, 0, Math.PI * 2, false );
// 	var holePath = new THREE.Path();
// 	holePath.moveTo( 0, 0 );
// 	holePath.absarc( 0, 0, 2, 0, Math.PI * 2, true );
// 	shape.holes.push( holePath );

// 	var geometry = new THREE.ExtrudeBufferGeometry( shape, extrudeSettings );
// 	var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0xF0F000 } ) );
// 	mesh.position.set(0,0,0 );
// 	scene.add( mesh );

// 	var shape2 = new THREE.Shape();
// 	shape2.moveTo(-4,4);
// 	shape2.lineTo(4,4);
// 	shape2.lineTo(4,-4);
// 	shape2.lineTo(-4,-4);
// 	var holePath2 = new THREE.Path();
// 	holePath2.moveTo( 0, 0 );
// 	holePath2.absarc( 0, 0, 4, 0, Math.PI * 2, true );
// 	shape2.holes.push( holePath );

// 	var geometry = new THREE.ExtrudeBufferGeometry( shape2, extrudeSettings );
// 	var mesh2 = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x00FF00 } ) );
// 	mesh2.position.set( 0, 0, 0 );
// 	mesh2.scale.set( 1, 1, 1 );
// 	scene.add( mesh2 );