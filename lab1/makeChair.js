function makeChair(){

	// Configurações e variaveis gerais
	var group = new THREE.Group()
    var texture = new THREE.TextureLoader().load("wood.jpg");

    // Gerar uma das pernas
	var leg_geom= new THREE.BoxGeometry(0.6,2.5,0.6)
	var leg_mat= new THREE.MeshLambertMaterial({map:texture})
	var leg = new THREE.Mesh(leg_geom, leg_mat)

	// Gerar as outras pernas a partir da exitente
	positions=[ [0,0], [3, 0], [3, 3], [0, 3] ]
	for (var i=0; i<positions.length; i++)
	{
		x=positions[i][0]
		z=positions[i][1]
		m = leg.clone()
		m.position.x=x
		m.position.z=z
		m.position.y=2.5/2
		group.add(m)
	}

	// Gerar acento
	var seat_geom = new THREE.BoxGeometry(4,0.4,4)
	var seat_mat= new THREE.MeshLambertMaterial({map:texture})
	var seat=new THREE.Mesh(seat_geom,seat_mat)
	seat.position.set(3/2,2.5,3/2)
	group.add(seat)

	// Gerar apoio de costas
	var backrest_geom = new THREE.BoxGeometry(4.2,5.0,0.2)
	var backrest_mat= new THREE.MeshLambertMaterial({map:texture})
	var backrest=new THREE.Mesh(backrest_geom,backrest_mat)
	backrest.position.set(3/2,5,-0.3)
	group.add(backrest)

	// Retorna cadeia feita
	return group
}