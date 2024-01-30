
//function the displays the movement of the frog until frog reaches the required destination
function disp(new_x, new_y){
    var step = 10;
    var y = document.getElementById('frog').offsetTop;
    var x = document.getElementById('frog').offsetLeft;

    
    //if current y position is greater than the wanted y position, decrease current y
    if(y > new_y + step){
        y = y - step;
        document.getElementById('frog').style.top = y +"px";
    }else if(y < new_y - step){
        y = y + step;
        document.getElementById('frog').style.top=y+"px";
    }

    //if current x position is less than the wanted x position, increase current x
    if(x < new_x - step){ 
        x = x + step;
        document.getElementById('frog').style.left=x+"px";
    }else if( x > new_x + step){
        x = x - step;
        document.getElementById('frog').style.left=x+"px";
    }

    //if current y and x equal the wanted y and x, clear time and stop the loop
    if(y == new_y && x == new_x){
        clearTimeout(my_time);
    }
}

//function to run display loop until frog moves to the desired location
function timer(new_x, new_y){
    disp(new_x, new_y);
    my_time = setTimeout('timer(new_x, new_y)', 10);
}

//main function 
function run(){
    //current x and current y
    var cur_x = document.getElementById('frog').offsetLeft;
    var cur_y = document.getElementById('frog').offsetTop;

    var pad1_x = document.getElementById('pad1').offsetLeft;
    var pad1_y = document.getElementById('pad1').offsetTop;
    var pad2_x = document.getElementById('pad2').offsetLeft;
    var pad2_y = document.getElementById('pad2').offsetTop;
    var pad3_x = document.getElementById('pad3').offsetLeft;
    var pad3_y = document.getElementById('pad3').offsetTop;
    var pad4_x = document.getElementById('pad4').offsetLeft;
    var pad4_y = document.getElementById('pad4').offsetTop;
    var pad5_x = document.getElementById('pad5').offsetLeft;
    var pad5_y = document.getElementById('pad5').offsetTop;

    var pad_width = 133;
    var pad_height = 128;

    


    //Testing:
    //document.getElementById('msg').innerHTML="X: "+new_x+" Y: "+new_y;

    //pad1
    if(cur_y > pad1_y && cur_y < pad1_y + pad_height && cur_x > pad1_x && cur_x < pad1_x+pad_width){
        //rand num 1 or 2
        num = Math.floor(Math.random() * 2)+1;

        //if pad2
        if (num == 1){ 
            new_y = pad2_y + 30;
            new_x = pad2_x + 40;
            // console.log("NewX: "+new_x+" NewY: "+new_y);
            // console.log("Pad2X: "+pad2_x+" pad2Y: "+pad2_y);
            document.getElementById("frog").style.transform="rotate(50deg)";
            setTimeout(()=>{
                document.getElementById("pad2").style.transform="translateX(10px) translateY(-5px) rotate(-50deg)";
            },"100");
            setTimeout(()=>{
                document.getElementById("pad2").style.transform="translateX(-2px) rotate(-50deg)";
            }, "500");
            
            
        }else{
            //else pad5
            new_y = pad5_y + 30;
            new_x = pad5_x + 40;
            document.getElementById("frog").style.transform='rotate(80deg)';
            setTimeout(()=>{
                document.getElementById("pad5").style.transform="translateY(-5px) translateX(3px) rotate(150deg)";
            },"200")
            setTimeout(()=>{
                document.getElementById("pad5").style.transform="translateY(2px) translateX(-1px) rotate(150deg)";
                document.getElementById("pad5").style.transition=".5s";
            }, "600");
            
        }
        
    }


    
    //pad2
    else if(cur_y > pad2_y && cur_y < pad2_y+pad_height && cur_x > pad2_x && cur_x < pad2_x+pad_width){
        
        num = Math.floor(Math.random() * 2)+1;
        if(num == 1){
            //pad3
            new_y = pad3_y + 30;
            new_x = pad3_x + 40;
            document.getElementById("frog").style.transform="rotate(40deg)";
            setTimeout(()=>{
                document.getElementById("pad3").style.transform="translateX(10px) translateY(-5px) rotate(50deg)";
            },"100");
            setTimeout(()=>{
                document.getElementById("pad3").style.transform="translateX(-5px) rotate(50deg)";
            }, "500");
        }else{
            //pad5
            new_y = pad5_y + 30;
            new_x = pad5_x + 40;
            document.getElementById("frog").style.transform='rotate(150deg)';
            setTimeout(()=>{
                document.getElementById("pad5").style.transform="translateX(10px) translateY(10px) rotate(150deg)";
            },"100");
            setTimeout(()=>{
                document.getElementById("pad5").style.transform="translateX(-3px) rotate(150deg)";
            }, "300");
            
        }
        
    }

    //pad3
    else if(cur_y > pad3_y && cur_y < pad3_y+pad_height && cur_x > pad3_x && cur_x < pad3_x+pad_width){
        num = Math.floor(Math.random() * 2)+1;
        if(num == 1){
            //pad4
            new_y = pad4_y + 30;
            new_x = pad4_x + 40;
            document.getElementById("frog").style.transform='rotate(150deg)';
            setTimeout(()=>{
                document.getElementById("pad4").style.transform="translateX(5px) translateY(10px) rotate(150deg)";
            },"100");
            setTimeout(()=>{
                document.getElementById("pad4").style.transform="translateY(-5px) rotate(150deg)";
            }, "500");
        }else{
            //pad2
            new_y = pad2_y + 30;
            new_x = pad2_x + 40;
            document.getElementById("frog").style.transform="rotate(-150deg)";
            setTimeout(()=>{
                document.getElementById("pad2").style.transform="translateX(-10px) translateY(5px) rotate(-50deg)";
            },"100");
            setTimeout(()=>{
                document.getElementById("pad2").style.transform="translateX(5px) rotate(-50deg)";
            }, "500");
        }
        
    }

    //pad4
    else if(cur_y > pad4_y && cur_y < pad4_y+pad_height && cur_x > pad4_x && cur_x < pad4_x+pad_width){
        num = Math.floor(Math.random() * 2)+1;
        if(num == 1){
            //pad5
            new_y = pad5_y + 30;
            new_x = pad5_x + 40;
            document.getElementById("frog").style.transform = 'rotate(250deg)';
            setTimeout(()=>{
                document.getElementById("pad5").style.transform="translateX(-5px) translateY(-10px) rotate(150deg)";
            },"100");
            setTimeout(()=>{
                document.getElementById("pad5").style.transform="translateY(5px) rotate(150deg)";
            }, "500");
        }else{
            //pad3
            new_y = pad3_y + 30;
            new_x = pad3_x + 40;
            document.getElementById("frog").style.transform = "rotate(-45deg)";
            setTimeout(()=>{
                document.getElementById("pad3").style.transform="translateX(-5px) translateY(-10px) rotate(50deg)";
            },"100");
            setTimeout(()=>{
                document.getElementById("pad3").style.transform="translateY(5px) rotate(50deg)";
            }, "500");
        }
        
    }
    //pad5
    else if(cur_y > pad5_y && cur_y < pad5_y+pad_height && cur_x > pad5_x && cur_x < pad5_x+pad_width){
        num = Math.floor(Math.random() * 2)+1;
        if(num == 1){
            //pad1
            new_y = pad1_y + 30;
            new_x = pad1_x + 40;
            document.getElementById("frog").style.transform = 'rotate(270deg)';
            setTimeout(()=>{
                document.getElementById("pad1").style.transform="translateX(-10px) translateY(5px)";
            },"200");
            setTimeout(()=>{
                document.getElementById("pad1").style.transform="translateX(2px)";
            }, "500");
        }else{
            //pad2
            new_y = pad2_y + 30;
            new_x = pad2_x + 40;
            document.getElementById("frog").style.transform = "rotate(-50deg)";
            setTimeout(()=>{
                document.getElementById("pad2").style.transform="translateX(-10px) translateY(-5px) rotate(-50deg)";
            },"100");
            setTimeout(()=>{
                document.getElementById("pad2").style.transform="translateX(5px) rotate(-50deg)";
            }, "500");
        }
        
    }

    

    //Testing
    //document.getElementById('msg2').innerHTML="New_X: "+new_x+" New_Y: "+new_y;
    timer(new_x, new_y);

}
