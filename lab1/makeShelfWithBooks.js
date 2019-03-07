function makeShelfWithBooks() {
        g_chairs=new THREE.Group()
        var shelf = makeShelf();
        var book = makeBook();
        var z_0 = 0.45;
        var number_of_books = 15;
        var height = [-4.8+1.5,0+1.5,4.8+1.5];
        for(var j=0;j<height.length;j++){
            for(var i=0;i<number_of_books;i++){
                var a = book.clone();
                var randomColor = Math.floor(Math.random() * 0xFFFFFF);
                for(var k=0;k<a.children.length;k++){
                    a.children[k].material = book.children[k].material.clone();
                    a.children[k].material.color.setHex(randomColor); 
                }
                a.children[3].material.color.setHex(0xFFFFFF);
                a.position.z = z_0*i + 0.03;
                a.position.y = 3/2;
                a.position.y = height[j];
                g_chairs.add(a);
            }
        }
        g_chairs.add(shelf);
        return g_chairs;
    }