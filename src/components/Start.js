
import React , {useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Start() {

    const [user , setUser] = useState({
       field_1:"" , field_2:"" ,field_3:"" , field_4:"" , field_5:"",
       field_6:"" , field_7:"" ,field_8:"" , field_9:"" , field_10:"",
       field_11:"" , field_12:"" ,field_13:""    
       });
     
       let name,value ;
       
     const handleInputs = (e) => {
       console.log(e);
       name=e.target.name;
       value=e.target.value;
      
       setUser({ ...user , [name]:value});
    
      
     }
     
     
     
     function PostData(e){
       e.preventDefault();
     
       console.log(user.field_1);
       const temp = `${user.field_1},${user.field_2},${user.field_3},${user.field_4},${user.field_5},${user.field_6},${user.field_7},${user.field_8},${user.field_9},${user.field_10},${user.field_11},${user.field_12},${user.field_13}`;
       console.log(temp);
       var str = "0.00632,18.0,2.31,0.0,0.538,6.575,65.2,4.0900,1.0,296.0,15.3,396.90,4.98";
       
      axios.get("http://localhost:5000/predict/"+ temp)
       .then(function(response){
        
         console.log(response);
         window.alert("Predicted House Price : " + response.data['Predicted House Price']);
       
  
       }).catch((err)=>{
         console.log(err);
       })
     
     }
     
     

  return (
    

<div className="container">
        <div className="shadow p-5 m-5 bg-white rounded adminpContainer">

          <div class="form-body">
            <div class="row">
              <div class="form-holder">
                <div class="form-content">
                  <div class="form-items">
                    <h3 className="caHeading">Enter Input Data for Predicting Price of House</h3>

                    <form class="requires-validation mt-3" novalidate method="post" onSubmit={(e)=>PostData(e)}>

                      <div className="pInputContainer container m-2">

                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="per capita crime rate by town" name="field_1" />
                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="proportion of residential land zoned for lots over 25,000 sq.ft." name="field_2" />

                       <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="proportion of non-retail business acres per town." name="field_3" />
                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="Charles River dummy variable (1 if tract bounds river; 0 otherwise)" name="field_4" />
                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="nitric oxides concentration (parts per 10 million)" name="field_5" />

                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="average number of rooms per dwelling" name="field_6" />
                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="proportion of owner-occupied units built prior to 1940" name="field_7" />

                       <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="weighted distances to five Boston employment centres" name="field_8" />
                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="index of accessibility to radial highways" name="field_9" />
                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="full-value property-tax rate per $10,000" name="field_10" />

                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="pupil-teacher ratio by town" name="field_11" />
                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="1000(Bk - 0.63)^2 where Bk is the proportion of blacks by town" name="field_12" />

                       <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="percentage lower status of the population" name="field_13" />

                      </div>
                  
                      <div class="ubutton form-button mt-3 pr-8">
                       
                        <input  type="submit" className="btn btn-primary " id="Aditya" value="Send"/>
                       </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    
  );
}

export default Start;
