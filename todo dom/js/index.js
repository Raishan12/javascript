a=document.getElementById("dis")
b=document.getElementById("add")
x=document.getElementById("box")
chk=document.getElementById("chk")
lst=document.getElementById("list")
ebtn=document.getElementById("editbtn")
dbtn=document.getElementById("deletebtn")
b.addEventListener("click", () => {
  c=document.createElement("div")
  d=document.createElement("input")
  d.type="checkbox"
  e=document.createElement("span")
  e.textContent=a.value
  b1=document.createElement('button')
  b1.textContent="Edit"
  b2=document.createElement("button")
  b2.textContent="Delete"
  chk.appendChild(d)
  lst.appendChild(e)
  ebtn.appendChild(b1)
  dbtn.appendChild(b2)
  a.value=""
  
  x.appendChild(c)
})