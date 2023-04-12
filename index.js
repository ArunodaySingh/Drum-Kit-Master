
var a=document.querySelectorAll(".drum").length;
console.log(a);
for (var i = 0; i < a; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
  {
    var innerName=this.innerHTML;
    console.log(innerName);
    sound(innerName);
    addanimation(innerName);

  })
  document.addEventListener("keydown",function(event){
    var c=event.key;
    sound(c);
    addanimation(c);
  })


}
function sound(shake)
{
  switch (shake) {
    case "w":
    var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;
      case "a":

      var audio=new Audio("sounds/snare.mp3")
        audio.play();
        break;
        case "s":
        var audio=new Audio("sounds/tom-1.mp3")
          audio.play();
          break;
          case "d":
          var audio=new Audio("sounds/tom-2.mp3")
            audio.play();

            break;
            case "j":
            var audio=new Audio("sounds/tom-3.mp3")
              audio.play();
              break;
              case "k":
              var audio=new Audio("sounds/tom-4.mp3")
                audio.play();
                break;
                case "l":
                var audio=new Audio("sounds/crash.mp3")
                  audio.play();
                  break;

    default:

  }
}
function addanimation(addanimation)
{
var z=document.querySelector("."+addanimation);
z.classList.add("pressed");



setTimeout(function (){
  document.querySelector("."+addanimation).classList.remove("pressed");
},100);
}
