function person(name,place,gender)
{

   this.gender=gender
   this.name=name
   this.place=place

   this.display=function(){

      console.log("Name: " + this.name + "\n" + "Place: " + this.place
       +"\n" + "Gender:" + this.gender +  "\n \n")
   }
}

var king = new person("Kesavan Thamburan",'Pramanipuram',"M")

var queen = new person("Ammini Thamburatty",'Pramanipuram',"F")

king.display()
queen.display()