function makeBook() {
        //capa do livro
        var height = 2.5;
        var cover_geom= new THREE.BoxGeometry(2,height,0.06)
        var cover_mat= new THREE.MeshLambertMaterial({color:0xFF5522})
        var cover = new THREE.Mesh(cover_geom, cover_mat)
        cover.position.x = 0
        cover.position.y = 0

        //lombada
        var spine_geom= new THREE.BoxGeometry(0.06,height,0.3)
        var spine_mat= new THREE.MeshLambertMaterial({color:0xFF5522})
        var spine = new THREE.Mesh(spine_geom, spine_mat)
        spine.position.x = -1
        spine.position.z = (0.3-0.06)/2+0.06
        spine.position.y = 0
        var cover2 = cover.clone()
        cover2.position.z = 0.3+0.06

        //miolo
        var pages_geom= new THREE.BoxGeometry(2-0.05,height-0.05,0.3)
        var pages_mat= new THREE.MeshLambertMaterial({color:0xFFFFFF})
        var pages = new THREE.Mesh(pages_geom, pages_mat)
        pages.position.x = 0
        pages.position.y = 0
        pages.position.z = (0.3-0.06)/2+0.06

        var book = new THREE.Group()
        book.add(cover)
        book.add(cover2)
        book.add(spine)
        book.add(pages)

        book.position.z = 0;
        book.position.y = 0;
        book.position.x = 0;

        return book
    }