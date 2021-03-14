class Food {
    constructor(x, y,){
        var foodStock;
        this.image = loadImage("Images/Milk.png");
    }

    getFoodStock(){
        var foodCountRef = database.ref('playerCount');
        foodCountRef.on("value", (data)=>{
            foodCount = data.val();
        })
    }

    updateFoodStock(){
        database.ref('/').update({
            foodCount: count
        })
    }

    deductFoodStock(){
        database.ref('/').update({
            foodCount: count
        })
    }

    display(){
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);
        
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++)
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image, x, y, 50, 50);
                x=x+30
        }

        if(add.button(mousePressed)){
            addImage(milk.png);
        }

        if(feed.button(mousePressed)){
            deductImage(milk.png);
        }
    }

}