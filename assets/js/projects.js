function show(elementId) { 
    document.getElementById("rasterizer").style.display="none";
    document.getElementById("meshEdit").style.display="none";
    document.getElementById("pathTracer").style.display="none";
    document.getElementById("clothSim").style.display="none";
    let clicked = document.getElementById(elementId)
    clicked.style.display="block";
    // clicked.style.backgroundColor="black";
}
