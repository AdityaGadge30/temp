
import React , {useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Start() {

    const [user , setUser] = useState({
       firld_1:"" , field_2:"" ,field_3:"" , field_4:"" , field_5:""    
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
    
       
      axios.post("/send" , user)
       .then(function(response){
     
         console.log(response);
         window.alert("Done ");
       
  
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
                    <h3 className="caHeading">Enter Input Data</h3>

                    <form class="requires-validation" novalidate method="post" onSubmit={(e)=>PostData(e)}>

                      <div className="pInputContainer container m-2">

                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="enter Field 1" name="field_1" />
                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="enter Field 2" name="field_2" />

                       <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="enter Field 3" name="field_3" />
                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="enter Field 4" name="field_4" />
                        <input class="form-control m-2" type="text" onChange={handleInputs} required="true" placeholder="enter Field 5" name="field_5" />
                      </div>
                      
                    




                      <div class="ubutton form-button ">
                       
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
