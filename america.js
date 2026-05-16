window.addEventListener("DOMContentLoaded",event=>
{
    window.addEventListener("message",event=>
    {
        if(event.data.appHeight&&"d387f"==event.data.inst)
        {
            let container=document.querySelector("#scoreaxis-widget-d387f iframe");
            container&&(container.style.height=parseInt(event.data.appHeight)+"px")
        }
    },!1)
});
window.addEventListener("DOMContentLoaded",event=>
{
    window.addEventListener("message",event=>
    {
        if(event.data.appHeight&&"77dce"==event.data.inst)
        {
            let container=document.querySelector("#scoreaxis-widget-77dce iframe");
            container&&(container.style.height=parseInt(event.data.appHeight)+"px")
        }
    },!1)
});
window.addEventListener("DOMContentLoaded",event=>
    {
        window.addEventListener("message",event=>
        {
            if(event.data.appHeight&&"5a675"==event.data.inst)
            {
                let container=document.querySelector("#scoreaxis-widget-5a675 iframe");
                container&&(container.style.height=parseInt(event.data.appHeight)+"px")
            }
        },!1)
    });
    window.addEventListener("DOMContentLoaded",event=>
    {
        window.addEventListener("message",event=>
        {
            if(event.data.appHeight&&"7dce6"==event.data.inst)
            {
                let container=document.querySelector("#scoreaxis-widget-7dce6 iframe");
                container&&(container.style.height=parseInt(event.data.appHeight)+"px")
            }
        },!1)
    });
  window.addEventListener("DOMContentLoaded",event=>
  {
    window.addEventListener("message",event=>
    {
        if(event.data.appHeight&&"cbb9b"==event.data.inst)
        {
            let container=document.querySelector("#scoreaxis-widget-cbb9b iframe");
            container&&(container.style.height=parseInt(event.data.appHeight)+"px")
        }
    },!1)
  });
	function openCity(evt, cityName) 
    {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
   }
document.getElementById("defaultOpen").click();