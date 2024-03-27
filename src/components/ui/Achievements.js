import React from "react";

const Achievements = () => {

  return (
    <div>
      <div class="container">
        <div class="row justify-content-center align-items-center g-2 gap-4 py-4">
          <div class="col-lg-6 col-sm-12">
            <div class="col">
                <div
                    class="row justify-content-center align-items-center g-2"
                >
                    <div class="col">
                        carousel 1
                    </div>
                    <div class="col">Column</div>
                    <div class="col">Column</div>
                </div>
                
            </div>
          </div>
          <div class="col">
            <div class="row justify-content-center align-items-center g-2 d-flex flex-column">
              <div class="col">
                <div class="h5 text-danger">Achievements</div>
              </div>
              <div class="col">
                <div class="h3">Globalogy students: Powering Top Giants</div>
              </div>
              <div class="col">
                <p>
                  Meet our proud alumni shaping the future at major Giant
                  companies. Discover the impact Globalogy has had on their
                  careers and the landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
