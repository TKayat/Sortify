// "rgb(24, 190, 255)" "rgb(119, 217, 112)"

function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"rgb(24, 190, 255)");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
                div_update(divs[j],div_sizes[j], "#9BA4B5");//Color update
        }
        div_update(divs[j],div_sizes[j], "rgb(119, 217, 112)");//Color update
    }
    div_update(divs[0],div_sizes[0], "rgb(119, 217, 112)");//Color update

    enable_buttons();
}
