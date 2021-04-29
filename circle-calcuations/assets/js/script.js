        $( "#cirleform" ).validate({

        });
        
        function calculate() {
            // if the form is valid, then make the calculations
            if ($("#CircleForm").valid()) {
                
                 document.getElementById("Diameter").innerHTML = "";
                 document.getElementById("Circumference").innerHTML = "";
                 document.getElementById("Area").innerHTML = "";
                
                 var radius; // string representation of the radius
                 var radiusfp; // floating point value of radius
                 var diameter;  // floating point diameter
                 var circumference; // floating point circumference
                 var area; // floating point area


                 // read in the radius as a string
                 radius = document.getElementById("Radius").value;

                 // Convert numbers from strings to Floating Point
                 radiusfp = parseFloat( radius ); 


                 // calculate the diameter
                 diameter = calcDiameter(radiusfp);

                // calculate the circumference
                 circumference = calcCircumference(radiusfp)

                // calculate the circumference
                 area = calcArea(radiusfp)

                 // display the results
                 document.getElementById("Diameter").innerHTML = diameter.toString();
                 document.getElementById("Circumference").innerHTML = circumference.toString();
                 document.getElementById("Area").innerHTML = area.toString();
            }
        }

          function calcDiameter (radiusvalue)
          // returns hypotenuse of a right triangle
          // square root of leg1 squared plus leg2 squared
          {
              return 2 * radiusvalue;
          }
          
          function calcCircumference (radiusvalue)
          // returns hypotenuse of a right triangle
          // square root of leg1 squared plus leg2 squared
          {
              return 2 * Math.PI * radiusvalue;
          }

          function calcArea (radiusvalue)
          // returns hypotenuse of a right triangle
          // square root of leg1 squared plus leg2 squared
          {
              return Math.PI * radiusvalue * radiusvalue;
          }

          function clearform()
        {
            document.getElementById("Radius").value = "";
            document.getElementById("RadiusError").innerHTML = "";
            document.getElementById("Diameter").innerHTML = "";
            document.getElementById("Circumference").innerHTML = "";
            document.getElementById("Area").innerHTML = "";
            
        }
        
