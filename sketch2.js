let Hslider, Bslider, RdShape, CpShape1, Heightslider, WidthSlider, RadiusSlider;

function setup() {
  createCanvas(400, 400);
  Hslider = createSlider(1,10,1);
  Hslider.position(400, 25);
  Hslider.style('width', '160px');
  
  Bslider = createSlider(1,10,1);
  Bslider.position(400, 50);
  Bslider.style('width', '160px');
  
  Heightslider = createSlider(1,10,1);
  Heightslider.position(400, 75);
  Heightslider.style('width', '160px');
  
  WidthSlider = createSlider(1,10,1);
  WidthSlider.position(400, 100);
  WidthSlider.style('width', '160px');
  
  RadiusSlider = createSlider(1,10,1);
  RadiusSlider.position(400, 125);
  RadiusSlider.style('width', '160px');
  
  RdShape = createRadio();
  RdShape.option("Rectangle")
  RdShape.option("Circle")
  RdShape.selected("Rectangle")
  RdShape.option("Rounded Rectangle")
  RdShape.position(400, 150)
  
  CpShape1 = createColorPicker("#ed225d")
  CpShape1.position(400,200)
  CpShape1.style("height", "25px")
  
  CpShape2 = createColorPicker("#ed3d")
  CpShape2.position(450,200)
  CpShape2.style("height", "25px")
}

function draw() {
  background(220);
  
  for(j=0;j<Bslider.value();j++){
    for (i=0; i<Hslider.value(); i++){
        if(i%2==0 && j%2==0)
          {
            fill(255)
          }
      else if(i%2==1 && j%2==1)
        {
      fill(CpShape1.color())
        }
      else 
        {
          fill(CpShape2.color())
        }
      if (RdShape.value() == "Rectangle")
        rect(i * 40 + 2, j * 40+1, Heightslider.value()+20, WidthSlider.value()+20);
      else if (RdShape.value() == "Rounded Rectangle")
        rect(i * 40 + 2, j * 40+1, Heightslider.value()+20, WidthSlider.value()+20, 10);
      else 
        circle(i * 40 + 20, j * 40+20, RadiusSlider.value()+20)
      }
    }
}