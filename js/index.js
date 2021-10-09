function visible() {
    // get the clock
    var dep = document.getElementById("Department").value;
    var sem = document.getElementById("Semester").value;
    
    console.log(dep);
    console.log(sem);
    if(dep=="CS" || dep=="IT")
    {
        if(sem=="two")
        {
            document.getElementById('sub1').innerText = "Discreet Maths";
            document.getElementById('sub2').innerText = "Python";
            document.getElementById('sub3').innerText = "Electronics";
            document.getElementById('sub4').innerText = "Logic";
        }
        if(sem=="three")
        {
            document.getElementById('sub1').innerText = "object oriented Programming";
            document.getElementById('sub2').innerText = "Data Structures";
            document.getElementById('sub3').innerText = "Algorithms";
            document.getElementById('sub4').innerText = "English";
        }
        if(sem=="four")
        {
            document.getElementById('sub1').innerText = "Automata";
            document.getElementById('sub2').innerText = "Database";
            document.getElementById('sub3').innerText = "Ethics";
            document.getElementById('sub4').innerText = "Economics";
        }
    }
    if(dep=="ECE")
    {
        if(sem=="one")
        {
            document.getElementById('sub1').innerText = "Mechanical";
            document.getElementById('sub2').innerText = "circuit design";
            document.getElementById('sub3').innerText = "Basics of Programming";
            document.getElementById('sub4').innerText = "Matlab";
        }
        if(sem=="two")
        {
            document.getElementById('sub1').innerText = "Discreet Maths";
            document.getElementById('sub2').innerText = "Physics";
            document.getElementById('sub3').innerText = "Electronics";
            document.getElementById('sub4').innerText = "Chemistry";
        }
        if(sem=="three")
        {
            document.getElementById('sub1').innerText = "Digital Logic";
            document.getElementById('sub2').innerText = "Electrical";
            document.getElementById('sub3').innerText = "Algorithms";
            document.getElementById('sub4').innerText = "English";
        }
        if(sem=="four")
        {
            document.getElementById('sub1').innerText = "AutoCAD";
            document.getElementById('sub2').innerText = "Database";
            document.getElementById('sub3').innerText = "Ethics";
            document.getElementById('sub4').innerText = "Management";
        }
    }
    if(dep=="Civil")
    {
        if(sem=="one")
        {
            document.getElementById('sub1').innerText = "Mechanics";
            document.getElementById('sub2').innerText = "Physics";
            document.getElementById('sub3').innerText = "Electronics";
            document.getElementById('sub4').innerText = "Chemistry";
        }
        if(sem=="two")
        {
            document.getElementById('sub1').innerText = "Building";
            document.getElementById('sub2').innerText = "development";
            document.getElementById('sub3').innerText = "Structural";
            document.getElementById('sub4').innerText = "Mechanical";
        }
        if(sem=="three")
        {
            document.getElementById('sub1').innerText = "Concrete";
            document.getElementById('sub2').innerText = "Electrical";
            document.getElementById('sub3').innerText = "Sustainibility";
            document.getElementById('sub4').innerText = "English";
        }
        if(sem=="four")
        {
            document.getElementById('sub1').innerText = "Design";
            document.getElementById('sub2').innerText = "Construction";
            document.getElementById('sub3').innerText = "Ethics";
            document.getElementById('sub4').innerText = "Management";
        }
    }
    
}