// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    //Your code goes here!
    $('#sizePicker').on("submit", function(evt) {
           let ch="";
                evt.preventDefault();
           const heightof=document.getElementById('input_height').value;
           const widthof=document.getElementById('input_width').value;
               for(let i=0;i<heightof;i++)
               {
                    ch+="<tr>"
                    for(let j=0;j<widthof;j++)
                    {
                            ch+="<td class='data'></td>"
                    }
                    ch+="</tr>"
               }
           //alert(ch);
               $("tr").html("");
               $("table").prepend(ch);
           });
        //alert(colorof);
            $("#colorPicker").on("input", function(){
                    //alert("colorchanging");
                    //const colorof=document.getElementById('colorPicker').value;
                        $("td").on("click",function(){
                            const colorof=document.getElementById('colorPicker').value;
                            //alert(colorof);
                            console.log(this);
                            $(this).css("background-color",colorof);
                        });
               });
    }
makeGrid();