n=[]
m=0
dis=''
while(true){
    a=parseInt(prompt(`1: Add Data \n2: Display Data \n3: Edit Data \n4: Remove Data \n5: Exit`))
    if(a==1){
        m++
        data=prompt(`Add Data:`)
        n.push(data)
    }else if(a==2){
        alert(n)
    }else if(a==3){
        d=parseInt(prompt(n))
        d--
        data=prompt('Modify Data:')
        n.splice(d,1,data)
    }else if(a==4){
        d=parseInt(prompt(n))
        d--
        n.splice(d,1)
    }else if(a==5){
        break
    }
}